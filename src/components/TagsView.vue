
<template>
  <div class="my-tabs">
    <div class="tabs-bar">
      <div class="tabs-bar-nav">
        <router-link class="tabs-tab" :to="{path:tag.path, query: {t:tag.t}}" :key="tag.path" :class="isActive(tag)?'active':''" v-for="(tag) in Array.from(visitedViews)">
          {{tag.title}}
          <i class="el-icon-close" @click.prevent.stop="delSelectTag(tag)">
          </i>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
  name: 'TagsView',
   props:
  {
    tabList: Array,
    tabIndex: Number
  },
  data () {
    return {
    }
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path && route.t === this.$route.query.t
    },
    delSelectTag(route){//先提交删除数据的方法,数组删除出掉数据后，如果关闭的是当前打开的路由需要将路由改为数组最后一次push进去的路由
      this.$store.dispatch('delVisitedViews',route).then((views)=>{
        if(this.isActive(route)){//只有在关闭当前打开的标签页才会有影响
          let lastView = views.slice(-1)[0]//选取路由数组中的最后一位
          if(lastView){
            this.$router.push(lastView);
          }else{
            this.$router.push('/');
          }
        }
      })
    }
  },
  computed: {
    visitedViews() {
      return this.$store.state.tagsview.visitedviews
    }
  }
}
</script>

<style scoped>
.my-tabs {
  font-size: 14px;
  color: #444;
   height:auto;
}
 .tabs-bar {
   border-bottom: 1px solid #d8dce5;
   position: relative;
   padding: 5px 0;
   background-color:white;
 }
 .tabs-bar-nav {
   display: table;
 }
 .tabs-tab {
   min-width: 80px;
   padding: 5px 0;
   display: inline-block;
   text-align: center;
   cursor: pointer;
   border: 1px solid #d8dce5;
   color: #494060;
   margin-left: 5px;

 }
 .tabs-active {
   border-color: #42b983;
   background-color: #42b983;
 }
 
</style>
<style>
  .el-icon-close{
    margin-left:5px;
  }
</style>
