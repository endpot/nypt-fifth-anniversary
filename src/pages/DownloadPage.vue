<template>
  <div style="text-align: center;">
    <h1>》 吸血小报 《</h1>
    <el-row :gutter="10">
      <el-col :span="12">
        <div style="text-align: center">
          <h3> {{ favoriteCategory ? ('独爱' + favoriteCategory) : '雨露均沾' }} </h3>
          <h3>
            有效下载 {{ downloadData.downloadCount }} 次 | 累计耗时 {{ downloadData.downloadDays }} 天
          </h3>
        </div>
        <ve-pie
          :data="categoryChartData"
          :settings="categoryChartSettings"
        />
      </el-col>
      <el-col :span="12">
        <div style="text-align: center">
          <h3> 近期下载曲线 </h3>
        </div>
        <ve-line
          :data="activeChartData"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    downloadData: {
      type: [Array, Object],
      required: false,
      default: () => {
        return {
          downloadCount: 1000,
          downloadDays: 1000,
          categoryData: [
            { 'title': '电影', 'count': 213 },
            { 'title': '剧集', 'count': 846 },
            { 'title': '动漫', 'count': 238 },
            { 'title': '综艺', 'count': 24 },
            { 'title': '体育', 'count': 110 },
            { 'title': '纪录', 'count': 44 },
            { 'title': '学习', 'count': 41 },
            { 'title': '音乐', 'count': 5 },
            { 'title': '游戏', 'count': 1 },
            { 'title': '软件', 'count': 5 }
          ],
          recentDownloadData: [
            { '月份': '四月', '下载次数': 1393 },
            { '月份': '五月', '下载次数': 3530 },
            { '月份': '六月', '下载次数': 2923 },
            { '月份': '七月', '下载次数': 1723 },
            { '月份': '八月', '下载次数': 3792 },
            { '月份': '九月', '下载次数': 4593 }
          ]
        }
      }
    }
  },
  data () {
    return {
      categoryChartSettings: {
        limitShowNum: 5
      },
      categoryChartData: {
        columns: ['title', 'count'],
        rows: this.downloadData.categoryData
      },
      activeChartData: {
        columns: ['月份', '下载次数'],
        rows: this.downloadData.recentDownloadData
      }
    }
  },
  computed: {
    favoriteCategory () {
      let result = ''; let max = 0

      this.downloadData.categoryData.forEach(item => {
        if (item.count > max) {
          max = item.count
          result = item.title
        }
      })

      return result
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
