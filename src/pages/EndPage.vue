<template>
  <el-container style="height: 100vh;">
    <el-main>
      <el-row :gutter="20">
        <el-col :span="7">
          <div style="text-align: center;">
            <h1>
              // 技术支持 //
            </h1>
            <el-divider>
              后端
            </el-divider>
            <h3>@HunterX</h3>
            <el-divider>
              前端
            </el-divider>
            <h3>@ajycc20 @HunterX</h3>
            <el-divider>
              测试
            </el-divider>
            <h3>@奶油葡萄站务组</h3>
          </div>
          <div>
            <h1 style="text-align: center;">
              // 友情链接 //
            </h1>

            <p class="text-center">
              <el-link
                href="https://coupon.flypot.cn/"
                target="_blank"
              >
                一点优惠网（海量淘宝内部优惠券）
              </el-link>
            </p>

            <p class="text-center">
              <el-link
                href="https://www.namesilo.com/?rid=0c1a888fe"
                target="_blank"
              >
                NameSilo（便宜安全的域名服务商）
              </el-link>
            </p>

            <p class="text-center">
              <el-link
                href="https://www.vultr.com/?ref=7255655"
                target="_blank"
              >
                Vultr（价谦物美的主机商）
              </el-link>
            </p>

            <p class="text-center">
              <el-link
                href="https://ajycc20.xyz/"
                target="_blank"
              >
                →_→傲娇→_→（@ajycc20 的博客）
              </el-link>
            </p>

            <p class="text-center">
              <el-link
                href="https://hunterx.xyz/"
                target="_blank"
              >
                猎人杂货铺（@HunterX 的博客）
              </el-link>
            </p>
          </div>
        </el-col>
        <el-col :span="10">
          <el-card class="game-card">
            <div
              slot="header"
              class="clearfix"
            >
              我的成就卡

              <el-button
                type="success"
                icon="el-icon-download"
                size="mini"
                style="float: right;"
                circle
                @click="handleSaveBtnClick"
              />
            </div>
            <div ref="card">
              <div style="text-align: center; font-size: 20px; font-weight: bold; color: white; padding-bottom: 10px;">
                // 奶油葡萄成就卡 //
              </div>
              <el-divider>
                {{ endData.name }}
              </el-divider>
              <el-row>
                <el-col
                  :span="8"
                  class="text-center basic-data"
                >
                  <el-link
                    :underline="false"
                    icon="el-icon-top"
                  >
                    {{ endData.basicData.uploaded }}
                  </el-link>
                </el-col>
                <el-col
                  :span="8"
                  class="text-center"
                >
                  <el-image
                    style="width: 100px; height: 100px; border-radius: 100px; border: 3px solid lightslategray;"
                    :src="endData.avatar"
                    fit="fit"
                  />
                </el-col>
                <el-col
                  :span="8"
                  class="text-center basic-data"
                >
                  <el-link :underline="false">
                    {{ endData.basicData.downloaded }}<i class="el-icon-bottom el-icon--right" />
                  </el-link>
                </el-col>
              </el-row>
              <div
                v-if="endData.badgeList.length > 0"
                class="text-center"
              >
                <el-avatar
                  v-for="(badge, index) in endData.badgeList"
                  :key="index"
                  size="large"
                  :src="badge.img"
                />
              </div>
              <el-divider>
                我的战绩
              </el-divider>
              <div>
                <ve-radar
                  :data="overallChartData"
                  :settings="overallChartSettings"
                />
              </div>
              <el-divider>
                我的标签
              </el-divider>
              <div>
                <el-tag
                  v-for="(title, index) in endData.titles"
                  :key="index"
                  size="small"
                  :type="randomTitleType()"
                  class="title-tag"
                >
                  {{ title }}
                </el-tag>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="7">
          <div>
            <h1 style="text-align: center;">
              // 招募 //
            </h1>
            <p class="indent-p">
              我们计划从站务组中选取成员，成立非盈利的线上兴趣工作室，工作室工作内容主要有：
            </p>

            <p class="indent-p">
              1. 奶油葡萄优化 —— 不断完善本站功能
            </p>

            <p class="indent-p">
              2. 头脑风暴 —— 提出有趣的点子，并讨论
            </p>

            <p class="indent-p">
              3. 组建项目小组 —— 针对一些可实施的点子，建立小组一同实现
            </p>

            <p class="indent-p">
              我们有非常完善的技术架构和项目经验（包括但不限于 网站开发/容器技术/人工智能），以及潜在的优质种子用户。
              对于缺乏项目经验的应届生、或是有创业心的你来说，这是一个非常不错的机会。
            </p>

            <p class="indent-p">
              如何加入？首先，你需要是本站的铁粉；然后，在我们的长期招新帖子里找到你喜欢的职位并申请；通过站务考核后，在站内联系 @HunterX。
            </p>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import htmlToImage from 'html-to-image'
import download from 'downloadjs'
import { calcTimes, calcSize } from '../utils/index'

export default {
  props: {
    endData: {
      type: [Array, Object],
      required: false,
      default: () => {
        return {
          name: 'Nobody',
          avatar: 'https://i.endpot.com/image/WPA5T/2014100110290460-easyicon-net-128.jpg',
          basicData: {
            uploaded: '0 KB',
            downloaded: '0 KB'
          },
          badgeList: [],
          behaviorData: [
            { '统计对象': '同等级用户', '下载量(GB)': 1393, '下载时间(天)': 1393, '上传量(GB)': 1093, '做种时间(天)': 1093, '分享率': 0.32 },
            { '统计对象': '我', '下载量(GB)': 3530, '下载时间(天)': 1393, '上传量(GB)': 3230, '做种时间(天)': 1093, '分享率': 0.26 }
          ],
          titles: []
        }
      }
    }
  },
  data () {
    return {
      overallChartSettings: {
        label: {
          color: '#fff'
        },
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
    endPageOverallData () {
      let res = Object.assign([], this.endData.behaviorData)
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
    this.overallChartData.rows = this.endPageOverallData
  },
  methods: {
    handleSaveBtnClick () {
      htmlToImage.toPng(this.$refs.card.parentElement)
        .then(function (dataUrl) {
          download(dataUrl, '我的南洋成就卡.png')
        })
    },

    randomTitleType () {
      const typeMap = ['success', 'info', 'warning', 'danger']

      return typeMap[Math.round(Math.random() * 3)]
    }
  }
}
</script>

<style lang="scss" scoped>
.text-center {
  text-align: center;
}

.basic-data {
  line-height: 100px;
  vertical-align: middle;
}

.basic-data /deep/ .el-link {
  color: white;
  font-size: 1.4vw;
  font-weight: bolder;
}

.game-card /deep/ .el-card__body {
  color: white;
  background: url('../assets/img/card.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.el-tag + .el-tag {
  margin-left: 10px;
}

.title-tag {
  margin-bottom: 15px;
}

.el-avatar + .el-avatar {
  margin-left: 5px;
}

.el-avatar--circle {
  border: 2px solid white;
}

.indent-p {
  text-indent: 2rem;
}
</style>
