<template>
 <el-container class="conbody">
   <el-header>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
         <el-radio-button :label="false"><i class="el-icon-arrow-left"></i></el-radio-button>
         <el-radio-button :label="true"><i class="el-icon-arrow-right"></i></el-radio-button>
      </el-radio-group>
   </el-header>
   <el-container class="conbody">
     <el-aside width="200px">

     <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
       <el-menu-item index="1">
                <i class="el-icon-search"></i>
                <span slot="title">Search</span>
              </el-menu-item>
       <el-menu-item index="2">
         <i class="el-icon-document"></i>
         <span slot="title">Report</span>
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
     <el-main>Main</el-main>
   </el-container>
 </el-container>

</template>

<script>
export default {
  name: 'HelloWorld',
   data() {
        return {
          isCollapse: true
        };
      },
   methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

.conbody{
height:100%;
overflow: hidden;
}

.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    overflow:hidden;
  }

  .el-main {
    background-color: #E9EEF3;
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
</style>
