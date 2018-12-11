
<template>
 <el-container class="conbody">
   <el-header>
      <i class="el-icon-menu menuControl" v-model="isCollapse" style="color:white" v-on:click="isCollapse=!isCollapse"></i>
      <span class="webTitle">TicketBlotter</span>
      <el-menu :default-active="activeIndex" class="el-menu-demo headerMenu" mode="horizontal" @select="handleSelect" text-color=white background-color="#303133" active-text-color="#42b983" >
       <el-menu-item index="1" class="headerIcon"><i class="el-icon-bell" style="color:white;"></i></el-menu-item>
       <el-submenu index="2">
        <template slot="title"><i class="el-icon-news " style="color:white;"></i></template>
        <el-menu-item index="2-1">Display Counterparty Profile</el-menu-item>
        <el-menu-item index="2-2">Dispaly Firm Account Profile</el-menu-item>
        <el-menu-item index="2-3">ChangeNotice</el-menu-item>
        <el-menu-item index="2-4">Preferences</el-menu-item>
        <el-menu-item index="2-5">Utilities</el-menu-item>
        <el-menu-item index="2-6">Bulk Action</el-menu-item>
       </el-submenu>
       <el-submenu index="3">
               <template slot="title">User</template>
               <el-menu-item index="3-1">Sign out</el-menu-item>
              </el-submenu>
      </el-menu>
   </el-header>
   <el-container class="conbody">
     <el-aside width=auto >

     <el-menu default-active="1-4-1" :collapse="isCollapse"class="el-menu-vertical-demo" style="height:100%;background-color:rgb(48, 65, 86);">
       <el-menu-item index="1" @click.native="addTab('Search')">
                <i class="el-icon-search"></i>
                <span slot="title" >Search</span>
              </el-menu-item>
       <el-menu-item index="2"  @click.native="addTab('Ticket')">
         <i class="el-icon-document"></i>
         <span slot="title">Ticket</span>
       </el-menu-item>
       <el-menu-item index="3">
         <i class="el-icon-document"></i>
         <span slot="title">导航三</span>
       </el-menu-item>
       <el-menu-item index="4">
         <i class="el-icon-setting"></i>
         <span slot="title">导航四</span>
       </el-menu-item>
     </el-menu>
     </el-aside>
     <el-main>
       <tags-view :tabList="tabList" :tabIndex="tabIndex" @changeTab="changeTab" @closeTab="closeTab">
         <keep-alive>
           <component :is="currentContent">
           </component>
         </keep-alive>
       </tags-view>
     </el-main>
   </el-container>
 </el-container>

</template>

<script>
import TagsView from './TagsView'
import Search from './Search'
import Ticket from './Ticket'
export default {
  name: 'HelloWorld',
  components: {
      "TagsView": TagsView,
      "search": Search,
      "ticket": Ticket
      },
   data() {
        return {
          isCollapse: true,
          activeIndex: '1',//现有tab数量
          tabIndex: 1,  //现在的tab数
          currentContent: 'ticket',
          tabComponent: [
          {
           tabName: 'Search',
           componentName: 'search'
          },
          {
           tabName: 'Ticket',
           componentName: 'ticket'
          }
           ],
           tabList: [
            {
              index: 0,
               name: 'Search',
              component: 'search'
            },
            {
              index: 1,
              name: 'Ticket',
              component: 'ticket'
            }
            ]
           }
    },
   methods: {
          // 切换选项卡
        changeTab: function (tab) {
        this.tabIndex = tab.index
        this.currentContent = tab.component
      },

        //添加选项卡
        addTab: function (tabName) {
          let newTabIndex = ++this.activeIndex;
          let componentName;
          for(let i=0; i<this.tabComponent.length; i++){
            if(this.tabComponent[i].tabName == tabName){
              componentName = this.tabComponent[i].componentName;
            }
          }
          this.tabList.push({
          index: newTabIndex,
          name: tabName,
          component: componentName
          });
          this.tabIndex = newTabIndex
          this.currentContent = componentName
        },
        closeTab: function (tab) {
          console.log(this.currentContent);

          let deleteIndex = 0;
           for(let i=0; i<this.tabList.length; i++){
            if(this.tabList[i].index == tab.index){
              deleteIndex = i;
            }
          }
          this.tabList.splice(deleteIndex,1);
          let lastIndex = this.tabList.length-1;
           this.tabIndex = this.tabList[lastIndex].index;
          this.currentContent = this.tabList[lastIndex].component;
         // this.tabList = this.tabList.filter(tabSingle => tabSingle.index !== tab.index);
         // let lastIndex = this.tabList.length-1;
          // this.tabIndex = this.tabList[lastIndex].index;
          //this.currentContent = this.tabList[lastIndex].component;
         // console.log(this.tabComponent);
          //console.log(this.tabIndex);
          //console.log(this.tabList);
         // console.log(this.currentContent);
        },

        consoleTest: function (){
        console.log('click success');
        }
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.webTitle{
  color:#42b983;
  font-size:25px;
  font-weight:bold;
}



.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 130px;
    min-height: 100%;
  }



.conbody{
height:100%;
overflow: hidden;
}

.el-header, .el-footer {
    background-color: #303133;
    color: #333;
    text-align: left;
    line-height: 60px;
  }



  .el-aside {
    background-color: #D3DCE6;
    color: rgb(191, 203, 217);
    text-align: center;
    line-height: 200px;
    overflow:hidden;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    padding: 0;
    text-align: center;
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
</style>
<style>
.el-menu-item{
color: rgb(191, 203, 217);
}

.el-menu-item:hover, .el-menu-item:active{
background-color: #1f2d3d;
}

.menuControl:hover{

  background-color:#42b983;
}



.headerMenu{
with: 100%;
display: inline-block;
height:58px;
float:right;
}

.headerMenu:hover{
color:"#42b983";
}

.headerIcon,.el-submenu__title{
padding: 0 4px;
}

</style>
