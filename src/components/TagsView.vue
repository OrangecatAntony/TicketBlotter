
<template>
  <div class="my-tabs">
    <div class="tabs-bar">
      <div class="tabs-bar-nav">
        <div class="tabs-tab" v-for="tab in tabList"
             :class="[tabIndex == tab.index ? 'tabs-active' : '']"
             @click="changeTab(tab)">
          {{tab.name}}
          <i class="el-icon-close" @click="closeTab(tab)" >

          </i>
        </div>
      </div>
    </div>
    <div class="tabs-content">
      <slot></slot>
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
    changeTab: function (tab) {
      this.$emit('changeTab', tab)
    },
    closeTab: function (tab) {
      this.$emit('closeTab', tab)

    }
  }
}
</script>

<style scoped>
.my-tabs {
  font-size: 14px;
  color: #444;
   height:100%;
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
 .tabs-content {

   padding-bottom: 30px;
   height: 100%;
   margin-top:4px;
   background-color:white;
 }
</style>
<style>
  .el-icon-close{
    margin-left:5px;
  }
</style>
