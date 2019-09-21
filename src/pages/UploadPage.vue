<template>
  <div style="text-align: center;">
    <h1>》 上传战绩 《</h1>
    <h3> 上传排名 No.{{ uploadData.rank }} | 发布 {{ uploadData.uploadCount }} 次 | 做种 {{ uploadData.seedDays }} 天</h3>
    <el-row :gutter="10">
      <el-col :span="12">
        <ve-pie
          :data="categoryChartData"
          :settings="categoryChartSettings"
        />
      </el-col>
      <el-col :span="12">
        <ve-radar
          :data="overallChartData"
          :settings="overallChartSettings"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { calcTimes, calcSize } from '../utils/index'

export default {
  props: {
    uploadData: {
      type: [Array, Object],
      required: false,
      default: () => {
        return {
          rank: 1,
          uploadCount: 1000,
          seedDays: 1000,
          categoryData: [
            { 'title': '电影', 'count': 213 },
            { 'title': '剧集', 'count': 846 },
            { 'title': '动漫', 'count': 238 },
            { 'title': '综艺', 'count': 24 },
            { 'title': '体育', 'count': 110 },
            { 'title': '纪录', 'count': 44 },
            { 'title': '音乐', 'count': 5 },
            { 'title': '学习', 'count': 41 },
            { 'title': '游戏', 'count': 1 },
            { 'title': '软件', 'count': 5 },
            { 'title': '其它', 'count': 5 }
          ],
          peerAndMineData: [
            { '统计对象': '同等级用户', '下载量(GB)': 1393, '下载时间(天)': 1393, '上传量(GB)': 1093, '做种时间(天)': 1093, '分享率': 0.32 },
            { '统计对象': '我', '下载量(GB)': 3530, '下载时间(天)': 1393, '上传量(GB)': 3230, '做种时间(天)': 1093, '分享率': 0.26 }
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
        rows: this.uploadData.categoryData
      },
      overallChartSettings: {
        areaStyle: {
          color: 'rgba(127,95,132,.3)',
          opacity: 1,
          shadowBlur: 45,
          shadowColor: 'rgba(0,0,0,.5)',
          shadowOffsetX: 0,
          shadowOffsetY: 15
        }
      },
      overallChartData: {
        columns: ['统计对象', '下载量(GB)', '下载时间(天)', '上传量(GB)', '做种时间(天)', '分享率'],
        rows: undefined
      }
    }
  },
  computed: {
    uploadPageOverallData () {
      let res = Object.assign([], this.uploadData.peerAndMineData)
      for (let i = 0; i < res.length; i++) {
        res[i]['下载时间(天)'] = calcTimes(res[i]['下载时间(天)'])
        res[i]['做种时间(天)'] = calcTimes(res[i]['做种时间(天)'])
        res[i]['下载量(GB)'] = calcSize(res[i]['下载量(GB)'])
        res[i]['上传量(GB)'] = calcSize(res[i]['上传量(GB)'])
      }
      return res
    }
  },
  mounted () {
    this.overallChartData.rows = this.uploadPageOverallData
  }
}
</script>

<style lang="scss" scoped>
</style>
