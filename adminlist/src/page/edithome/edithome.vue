<template>
  <div class="ordering">
      <div>
      <div class="home-list">
        <div class="home-title">设置店铺名</div>
         <el-input v-model="shop" placeholder="请设置你的店铺名称"></el-input>
      </div>
      <!-- logo -->
      <div class="home-list" v-bind="upImg">
        <div class="home-title">上传logo</div>
        <el-upload
          action="#"
          :show-file-list="false"
          list-type="picture-card"
            :auto-upload="false"
          :on-change="successing"
          >
            <img v-if="logo" :src="logo" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <!-- 起送金额 -->
      <div class="home-list">
        <div class="home-title">起送金额(单位元)</div>
         <el-input v-model="delivering" placeholder="请输入起送金额"></el-input>
      </div>
      <!-- 起送金额 -->
      <div class="home-list">
        <div class="home-title">配送金额(单位元)</div>
         <el-input v-model="physical" placeholder="请输入配送金额"></el-input>
      </div>
      <!-- 人均价格 -->
      <div class="home-list">
        <div class="home-title">人均价格(单位元)</div>
         <el-input v-model="capita" placeholder="请输入人均价格"></el-input>
      </div>
      <!-- 人均价格 -->
      <div class="home-list">
        <div class="home-title">商品类型</div>
         <el-input v-model="types" placeholder="请输入商品类型"></el-input>
      </div>
      <!-- 人均价格 -->
      <div class="home-list">
        <div class="home-title">配送时间</div>
         <el-input v-model="times" placeholder="请输入配送时间"></el-input>
      </div>
      <!-- 配送时长 -->
      <div class="home-list">
        <div class="home-title">配送时长(单位分钟)</div>
         <el-input v-model="duration" placeholder="请输入配送时长"></el-input>
      </div>
      <!-- 人均价格 -->
      <div class="home-list">
        <div class="home-title">商家地址</div>
         <el-input v-model="address" placeholder="请输入商家地址"></el-input>
      </div>

      <!-- 提交 -->
      <div class="home-list">
        <el-row>
          <el-button type="success" @click="btNs()">提交修改</el-button>
        </el-row>
      </div>
    </div>


    <!-- 引入登录提示模态框 -->
    <!-- <motal ref="mon"></motal> -->
  </div>
</template>

<script>
  // 引入登录提示模态组件
  // import motal from '../../tips/login.vue'
  import {home} from '../../api/api.js'
  // 请求地址
  import {updatehome} from '../../api/request.js'
  export default{
    // components:{
    // 	motal
    // },
    data() {
      return {
        homeData:{},
        logo:'',
        shop:'',
        delivering:'',
        physical:'',
        capita:'',
        types:'',
        times:'',
        duration:'',
        address:'',
        ids:'',
        dialogVisible: false,
        disabled: false,
        fileimg:'',
        files:'',
		upfile:''
      }
    },
     methods: {
            successing(file, fileList){
              this.logo= file.url
              console.log(file)
              console.log(fileList)
              this.files = file.raw
            },
            // 提交
          async  btNs(){
              console.log('提交')
              let list = [
                {"shop": this.shop},
                {"file": this.upfile},
                {"delivering": this.delivering},
                {"physical": this.physical},
                {"capita": this.capita},
                {"types": this.types},
                {"times": this.times},
                {"duration": this.duration},
                {"address": this.address},
				{"ids": this.ids}
              ]

              let  uploading = await new this.myreferto(list).appfrom()

              home(uploading,updatehome)
              .then((res)=>{
                console.log(res)
                new this.myreferto(list).men()
                if(res.data.msg == 'SUCCESS'){
                 // this.homeSucc()
                  new this.mytitle(this.$message,'success','提交成功').funtitle()
                }else{
                  new this.mytitle(this.$message,'warning',res.data.msg).funtitle()
                }

              })
              .catch((err)=>{
                new this.myreferto(list).men()
                new this.mytitle(this.$message,'info','提交失败').funtitle()
              })
            },
     },

     // 进入页面请求数据
     mounted() {
        // 接收修改传过来的值
       console.log(this.$route.params)
       let dataedit = this.$route.params.datas
       this.logo= dataedit.logo
       this.shop= dataedit.shop
       this.delivering= dataedit.delivering
       this.physical= dataedit.physical
       this.capita= dataedit.capita
       this.types= dataedit.types
       this.times= dataedit.times
       this.duration= dataedit.duration
       this.address= dataedit.address
       this.ids = dataedit._id
     },
	// 计算
	computed:{
	  upImg(){
	    // 如果图片地址更换
	    if(this.files != ''){
	       // 用户更换了图片
	       console.log('已更换')
	       this.upfile = this.files
	    }else{
	       this.upfile = this.logo
	       console.log(this.upfile)
	    }
	  }
	}
  }
</script>

<style scoped="scoped">
  @import '../../../style/pubiss.css';
  @import '../../../style/table.css';
  .home-list-homemen img{margin-bottom: 20px; width: 150px; height: 150px;
  border-radius: 10px;}
</style>