<template>
  <div class="home">
    <el-container>
      <!--导航-->
      <Nav />
      <!--右侧内容-->
      <el-container>
        <!--头部-->
        <el-header>
          <!--面包屑-->
          <Breadcrumb />
        </el-header>
        <!--主体-->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Nav from './NavView.vue'
import Breadcrumb from './BreadcrumbView.vue'
export default {
  name: 'HomeView',
  components: {
    Nav,
    Breadcrumb
  },
  methods: {
    goBack () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.breadcrumb {
  margin-top: 22px;
}
.goback {
  width: 70px;
  margin-top: -11px;
  margin-left: 649px;
}
</style>
