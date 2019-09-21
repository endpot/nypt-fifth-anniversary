<template>
  <div style="text-align: center;">
    <h1>
      我曾使用过 {{ locationData.totalCount }} 个 IP 地址
    </h1>
    <h2>
      其中最常登录地点是 {{ frequentLocation[0] }}, {{ frequentLocation[1] }}, {{ frequentLocation[2] }}
    </h2>
    <el-row>
      <el-col
        :span="8"
        :offset="8"
      >
        <ve-map
          v-if="ready"
          :settings="chartSettings"
          :data="chartData"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    locationData: {
      type: [Array, Object],
      required: false,
      default: () => {
        return {
          totalCount: 100,
          frequentIp: '115.154.25.6',
          frequentIpCount: 30
        }
      }
    }
  },
  data () {
    return {
      ready: false,
      frequentLocation: [],
      chartSettings: {},
      chartData: {
        columns: ['位置', '登录次数'],
        rows: []
      }
    }
  },

  mounted () {
    this.initFrequentLocation()
  },

  methods: {
    initFrequentLocation () {
      this.axios.get('https://cors-anywhere.endpot.workers.dev/?http://freeapi.ipip.net/' + this.locationData.frequentIp).then(response => {
        this.frequentLocation = response.data
        this.chartData.rows = [
          { '位置': response.data[1], '登录次数': this.locationData.frequentIpCount }
        ]
        this.ready = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
