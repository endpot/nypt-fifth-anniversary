<template>
  <div>
    <el-row
      v-for="row in activeIndex.length"
      :key="'row'+row"
    >
      <el-col
        v-for="col in 24"
        :key="'col'+col"
        :span="1"
        class="image-col"
      >
        <div>
          <el-popover
            :title="'@' + logoData.commentList[row*24+col-25].name"
            width="200"
            trigger="hover"
            :content="logoData.commentList[row*24+col-25].content"
          >
            <el-image
              slot="reference"
              :class="activeIndex[row-1].includes(col) ? 'active' : 'inactive'"
              style="width: 100%; height: 100%;"
              :src="logoData.commentList[row*24+col-25].avatar"
              fit="cover"
            >
              <div
                slot="error"
                class="image-slot"
              >
                <img
                  style="width: 100%;"
                  src="https://nanyangpt.com/pic/default_avatar.png"
                >
              </div>
            </el-image>
          </el-popover>
        </div>
      </el-col>
    </el-row>
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
    },
    logoData: {
      type: [Array, Object],
      required: false,
      default: () => {
        return {
          commentList: []
        }
      }
    }
  },
  data () {
    return {
      activeIndex: [
        [],
        [],
        [2, 3, 4, 5, 8, 11, 14, 15, 16, 17, 20, 21, 22, 23],
        [2, 5, 8, 11, 14, 17, 21, 22],
        [2, 5, 8, 9, 10, 11, 14, 15, 16, 17, 21, 22],
        [2, 5, 11, 14, 21, 22],
        [2, 5, 8, 9, 10, 11, 14, 21, 22],
        [],
        []
      ]
    }
  },

  watch: {
    currentPageIndex (newVal) {
      //
    }
  },

  methods: {
    //
  }
}
</script>

<style lang="scss" scoped>
.image-col {
  width: calc(100vw / 24);
  height: calc(100vw / 24);
  text-align: center;
}

.image-col div {
  height: 100%;
  width: 100%;
}

.image-col .active {
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
}

.image-col .inactive {
  opacity: 0.2;
}

.image-col:hover .active {
  opacity: 0.8;
}

.image-col:hover .inactive {
  opacity: 0.8;
}
</style>
