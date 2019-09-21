<template>
  <div
    v-loading.fullscreen.lock="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    class="app-container"
  >
    <full-page
      v-if="ready"
      :options="options"
    >
      <aplayer
        class="aplayer"
        :audio="audio"
        :autoplay="true"
        :volume="volume"
        mini
      />

      <div class="section fp-noscroll">
        <cover-page :cover-data="data.coverData" />
      </div>
      <div class="section fp-noscroll">
        <overview-page
          :overview-data="data.overviewData"
          :current-page-index="currentPageIndex"
        />
      </div>
      <div class="section fp-noscroll">
        <logo-page
          :logo-data="data.logoData"
          :current-page-index="currentPageIndex"
        />
      </div>
      <div class="section fp-noscroll">
        <register-page :register-data="data.registerData" />
      </div>
      <div class="section fp-noscroll">
        <five-years-page :five-years-data="data.fiveYearsData" />
      </div>
      <div class="section fp-noscroll">
        <location-page :location-data="data.locationData" />
      </div>
      <div class="section fp-noscroll">
        <download-page :download-data="data.downloadData" />
      </div>
      <div class="section fp-noscroll">
        <upload-page :upload-data="data.uploadData" />
      </div>
      <div class="section fp-noscroll">
        <interaction-page :interaction-data="data.interactionData" />
      </div>
      <div class="section fp-noscroll">
        <end-page :end-data="data.endData" />
      </div>
    </full-page>
  </div>
</template>

<script>
import CoverPage from '../pages/CoverPage'
import OverviewPage from '../pages/OverviewPage'
import LogoPage from '../pages/LogoPage'
import RegisterPage from '../pages/RegisterPage'
import FiveYearsPage from '../pages/FiveYearsPage'
import LocationPage from '../pages/LocationPage'
import DownloadPage from '../pages/DownloadPage'
import UploadPage from '../pages/UploadPage'
import InteractionPage from '../pages/InteractionPage'
import EndPage from '../pages/EndPage'

import 'fullpage.js/dist/fullpage.css'

export default {
  components: {
    'cover-page': CoverPage,
    'overview-page': OverviewPage,
    'logo-page': LogoPage,
    'register-page': RegisterPage,
    'five-years-page': FiveYearsPage,
    'location-page': LocationPage,
    'download-page': DownloadPage,
    'upload-page': UploadPage,
    'interaction-page': InteractionPage,
    'end-page': EndPage
  },
  data () {
    return {
      loading: true,
      ready: false,
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: '#menu'
      },
      currentPageIndex: 0,
      data: {
        coverData: null,
        overviewData: null,
        logoData: null,
        registerData: null,
        fiveYearsData: null,
        locationData: null,
        downloadData: null,
        uploadData: null,
        interactionData: null
      },
      audio: {
        name: '夏恋 - Otokaze',
        artist: 'Otokaze',
        url: 'https://mp3.itingwa.com/2012-04/22/20120422052434-NDIyODI0.mp3',
        cover: 'https://i.endpot.com/image/FMXRP/music.jpg' // prettier-ignore
      },
      volume: 0.2
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      // axios 请求 后端数据并处理
    },
    unsetLoading () {
      this.loading = false
    },
    afterLoad (origin, destination, direction) {
      this.currentPageIndex = destination.index
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  overflow: hidden;
  background-image: url('../assets/img/background.gif');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.aplayer {
  z-index: 999;
  position: fixed;
  right: 8px;
  border-radius: 33px;
  margin: 15px;
  animation: aplayers 8s linear infinite;
}

@keyframes aplayers {
  0%{-webkit-transform:rotate(0deg);}
  25%{-webkit-transform:rotate(90deg);}
  50%{-webkit-transform:rotate(180deg);}
  75%{-webkit-transform:rotate(270deg);}
  100%{-webkit-transform:rotate(360deg);}
}

</style>
