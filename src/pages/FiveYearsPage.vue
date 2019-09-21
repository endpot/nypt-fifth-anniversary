<template>
  <div style="text-align: center;">
    <h1>2019 年 09 月 28 日</h1>
    <el-image
      :src="require('../assets/img/born.gif')"
      style="width: 480px; border-radius: 70px;"
    />
    <h2>南洋破壳的 5 周年纪念日，也是我在南洋大家庭的第 {{ fiveYearsData.days }} 天</h2>
  </div>
</template>

<script>
export default {
  props: {
    fiveYearsData: {
      type: [Array, Object],
      required: true,
      default: () => {
        return {
          days: 1000
        }
      }
    }
  },
  data () {
    return {
      // 注册相关
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
