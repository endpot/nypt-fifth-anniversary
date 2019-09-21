<template>
  <div style="text-align: center;">
    <h1>{{ registerData.date }}</h1>
    <h2>我成为了奶油葡萄的第 {{ registerData.id }} 位用户，同一天加入大家庭的还有 {{ registerData.peers.length }} 位小伙伴~</h2>
    <ve-wordcloud :data="chartData" />
  </div>
</template>

<script>
export default {
  props: {
    registerData: {
      type: [Array, Object],
      required: true,
      default: () => {
        return {
          date: '2014 年 9 月 19 日',
          id: 1,
          peers: [
            {
              'name': 'somebody',
              'count': 1
            },
            {
              'name': 'nobody',
              'count': 1
            },
            {
              'name': 'anybody',
              'count': 1
            }
          ]
        }
      }
    }
  },
  data () {
    return {
      chartData: {
        columns: ['name', 'count'],
        rows: this.registerData.peers
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
