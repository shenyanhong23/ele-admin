<template>
  <div>
    <el-carousel
      :interval="4000"
      type="card"
      height="250px"
    >
      <el-carousel-item
        v-for="item in items"
        :key="item"
      >
        <img
          :src="item"
          alt=""
        >
      </el-carousel-item>
    </el-carousel>
    <Echarts />
  </div>
</template>

<script>
import Echarts from './echarts.vue'
export default {
  data () {
    return {
      items: [
        require('@/assets/images/1.png'),
        require('@/assets/images/2.jpg'),
        require('@/assets/images/3.jpg'),
        require('@/assets/images/4.jpg'),
        require('@/assets/images/5.jpg')
      ]
    }
  },
  components: {
    Echarts
  }
}
</script>

<style scoped>
</style>