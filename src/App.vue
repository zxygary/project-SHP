<template>
  <div>
    <Header></Header>
    <!-- 书写路由组件出口的地方 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'APP',
  components: {
    Header, 
    Footer,
  },
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
    // 派发一个action | 获取商品分类的三级列表的数据
    this.$store.dispatch("categoryList");
  },
}
</script>
<style lang="less" scoped>

</style>
