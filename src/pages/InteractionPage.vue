<template>
  <div style="text-align: center;">
    <h1>》 站内互动 《</h1>
    <el-carousel
      :interval="4000"
      type="card"
      height="400px"
    >
      <el-carousel-item>
        <div class="outer">
          <div class="content">
            <h1>{{ interactionData.totalFunVoteCount }}</h1>
            <h2>趣味盒投票数</h2>
          </div>
        </div>
      </el-carousel-item>

      <el-carousel-item>
        <div class="outer">
          <div class="content">
            <h1>{{ interactionData.totalShoutMessage }}</h1>
            <h2>群聊区发言</h2>
          </div>
        </div>
      </el-carousel-item>

      <el-carousel-item>
        <div class="outer">
          <div class="content">
            <h1>{{ interactionData.totalTorrentComment }}</h1>
            <h2>种子留言</h2>
          </div>
        </div>
      </el-carousel-item>

      <el-carousel-item>
        <div class="outer">
          <div class="content">
            <h1>{{ interactionData.totalForumComment }}</h1>
            <h2>论坛互动</h2>
          </div>
        </div>
      </el-carousel-item>

      <el-carousel-item>
        <div class="outer">
          <div class="content">
            <h1>{{ interactionData.totalRewardSent }}</h1>
            <h2>赠予他人的魔力</h2>
          </div>
        </div>
      </el-carousel-item>

      <el-carousel-item>
        <div class="outer">
          <div class="content">
            <h1>{{ interactionData.totalThankReceived }}</h1>
            <h2>收获点赞数</h2>
          </div>
        </div>
      </el-carousel-item>

      <el-carousel-item>
        <div class="outer">
          <div class="content">
            <h1>{{ interactionData.totalPMCount }}</h1>
            <h2>我发出的站内信</h2>
          </div>
        </div>
      </el-carousel-item>

      <el-carousel-item>
        <div class="outer">
          <div class="content">
            <h1>{{ interactionData.totalBadgeCount }}</h1>
            <h2>拥有的徽章</h2>
          </div>
        </div>
      </el-carousel-item>

      <el-carousel-item>
        <div class="outer">
          <div class="content">
            <h1>{{ interactionData.totalBetCount }}</h1>
            <h2>竞猜参与次数</h2>
          </div>
        </div>
      </el-carousel-item>

      <el-carousel-item>
        <div class="outer">
          <div class="content">
            <h1>{{ interactionData.totalBetEarn }}</h1>
            <h2>竞猜盈利数目</h2>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: {
    interactionData: {
      type: [Array, Object],
      required: true,
      default: () => {
        return {
          totalFunVoteCount: 0, // 趣味盒投票次数
          totalShoutMessage: 100, // 群聊区发言次数
          totalTorrentComment: 100, // 种子留言次数
          totalForumComment: 100, // 论坛互动次数
          totalRewardSent: 100, // 送出的赞赏
          totalThankReceived: 100, // 收获的点赞
          totalPMCount: 100, // 站内信互动次数
          totalBadgeCount: 0, // 拥有的徽章
          totalBetCount: 0, // 参与竞猜次数
          totalBetEarn: 0 // 参与竞猜盈利
        }
      }
    }
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
.el-carousel__item .outer {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-carousel__item .outer .content h1 {
  font-size: 6em;
  color: white;
}

.el-carousel__item:nth-child(2n) {
  background-color: #66CC99;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #FF6666;
}
</style>
