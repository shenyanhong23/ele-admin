<template>
  <el-aside width="200px">
    <el-menu
      :default-active="$route.path" exact
      class="el-menu-vertical-demo"
      router
    >
      <NavItem
        v-for="v in items"
        :key="v.url"
        :item="v"
        :basePath="v.url"
      />
    </el-menu>
  </el-aside>
</template>

<script>
import NavItem from './NavItemView.vue'
export default {
  data () {
    return {
      items: [
        {
          name: '首页',
          url: '/index'
        },
        {
          name: '数据统计',
          url: '/stats'
        },
        {
          name: '信息管理',
          url: '/message',
          child: [
            {
              name: '列表展示',
              url: '/message/list'
            }
          ]
        },
        {
          name: '用户管理',
          url: '/user',
          child: [
            {
              name: '列表展示',
              url: '/user/list'
            }
          ]
        },
      ]
    }
  },
  components: {
    NavItem
  }
}
</script>

<style lang="scss" scoped>
</style>
