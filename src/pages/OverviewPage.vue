<template>
  <div>
    <h1 style="text-align: center;">
      奶油葡萄的五年
    </h1>
    <div>
      <el-steps
        :active="active"
        finish-status="process"
        :align-center="true"
      >
        <el-step
          v-for="(history, index) in histories"
          :key="index"
          :title="history.date"
          :description="history.content"
        />
      </el-steps>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPageIndex: {
      type: [String, Number],
      required: false,
      default: () => {
        return 0
      }
    }
  },
  data () {
    return {
      active: 1,
      histories: [
        {
          content: '站点正式成立',
          date: '2014-09-28'
        },
        {
          content: 'NYPAD 压制组成立',
          date: '2014-10-16'
        },
        {
          content: '论坛日发帖量 1865',
          date: '2015-04-05'
        },
        {
          content: 'NYHD 压制组成立',
          date: '2015-04-06'
        },
        {
          content: '日访问人数破千',
          date: '2015-04-18'
        },
        {
          content: '发种数破万',
          date: '2015-10-14'
        },
        {
          content: '徽章功能公测',
          date: '2016-03-07'
        },
        {
          content: '用户数破万',
          date: '2016-04-08'
        },
        {
          content: 'UI 透明度改动',
          date: '2019-02-27'
        },
        {
          content: '站点代码重大调整',
          date: '2019-04-13'
        },
        {
          content: '6.5w 做种数 6.7w 同伴数',
          date: '2019-04-15'
        }
      ]
    }
  },

  watch: {
    currentPageIndex (newVal) {
      if (newVal === 1) {
        this.handleShow()
      }
    }
  },

  methods: {
    handleShow () {
      this.active = 0
      this.runSteps()
    },

    runSteps () {
      if (this.active < this.histories.length) {
        this.active = this.active + 1
        setTimeout(this.runSteps, 600)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
