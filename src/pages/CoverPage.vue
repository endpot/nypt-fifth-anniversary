<template>
  <div style="text-align: center;">
    <h1>「奶油葡萄」五岁啦！</h1>
    <el-row>
      <el-col
        :span="8"
        :offset="8"
      >
        <el-divider />
      </el-col>
    </el-row>
    <h2>@{{ coverData.name }} 与「奶油葡萄」不得不说的故事</h2>
  </div>
</template>

<script>
export default {
  props: {
    coverData: {
      type: [Array, Object],
      required: true,
      default: () => {
        return {
          name: 'HunterX'
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
.el-divider.el-divider--horizontal {
  background-color: black;
}
</style>
