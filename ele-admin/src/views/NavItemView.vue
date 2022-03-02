<template>
  <div>
    <!--无子集-->
    <el-menu-item
      :index="basePath"
      v-if="!item.child"
    >
      <i class="el-icon-menu"></i>
      <span slot="title">{{item.name}}</span>
    </el-menu-item>
    <!--有子集-->
    <el-submenu
      :index="basePath"
      v-else
    >
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{item.name}}</span>
      </template>
      <NavItem
        v-for="child in item.child"
        :key="child.url"
        :item="child"
        :basePath="child.url"
      />
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'NavItem',
  data () {
    return {
    }
  },
  props: ['item', 'basePath']
}
</script>

<style lang="scss" scoped>
</style>
