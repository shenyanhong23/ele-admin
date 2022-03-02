<template>
  <el-breadcrumb
    separator="/"
    class="breadcrumb"
  >
    <el-breadcrumb-item
      v-for="(v,i) in list"
      :key="i"
    >
      {{v.meta.title}}
    </el-breadcrumb-item>
    <el-button
      type="primary"
      round
      class="goback"
      @click="goBack"
    >退出</el-button>
  </el-breadcrumb>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    goBack () {
      this.$router.push('/login')
    }
  },
  created () {
    console.log(this.$route.matched)
    this.list = this.$route.matched
  },
  watch: {
    $route (to, from) {
      this.list = to.matched
    }
  }
}
</script>

<style lang="scss" scoped>
.goback {
  position: absolute;
  width: 70px;
  top: 89px;
  left: 1156px;
}
</style>