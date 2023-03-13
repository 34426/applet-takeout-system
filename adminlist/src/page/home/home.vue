<template>
  <div class="ordering">

    <div v-if="homemen">
      <div class="home-list">
        <div class="home-title">设置店铺名</div>
         <el-input v-model="shop" placeholder="请设置你的店铺名称"></el-input>
      </div>
      <!-- logo -->
      <div class="home-list">
        <div class="home-title">上传logo</div>
        <el-upload
          action="#"
          :show-file-list="false"
          list-type="picture-card"
            :auto-upload="false"
          :on-change="successing"
          >
            <img v-if="fileimg" :src="fileimg" class="avatar">
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
          <el-button type="success" @click="btNs()">提交</el-button>
        </el-row>
      </div>
    </div>

    <!-- 已设置的商家 -->
    <div v-if="!homemen" id="all">
			<div id="one">
				<div class="home-list home-list-homemen">
				  <img :src="homeData.logo" />
				  <div class="home-title">商家名称 : {{homeData.shop}}</div>
				</div>
				<div class="home-list">
				  <div class="home-title">起送金额 : {{homeData.delivering}}元</div>
				</div>
				<div class="home-list">
				  <div class="home-title">配送金额 : {{homeData.physical}}元</div>
				</div>
				<div class="home-list">
				  <div class="home-title">人均价格 : {{homeData.capita}}元</div>
				</div>
				<div class="home-list">
				  <div class="home-title">商品类型 : {{homeData.types}}</div>
				</div>
				<div class="home-list">
				  <div class="home-title">配送时间 : {{homeData.times}}</div>
				</div>
				<div class="home-list">
				  <div class="home-title">配送时长 : {{homeData.duration}}分钟</div>
				</div>
				<div class="home-list">
				  <div class="home-title">商家地址 : {{homeData.address}}</div>
				</div>
			</div>
			<div id="two">
				<el-calendar v-model="value">
				</el-calendar>
			</div>

	  <div class="operation">
		<span @click="updatehome(homeData)">修改商家信息</span>
	  </div>
	  <div class="state">
	  	<span @click="changestate(homeData._id,homeData.state)">{{shopstate}}</span>
	  </div>
    </div>

    <!-- 引入登录提示模态框 -->
    <motal ref="mon"></motal>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  // 引入登录提示模态组件
  import motal from '../../tips/login.vue'
  import {home} from '../../api/api.js'
  // 请求地址
  import {shopossurl,shopsuccurl,updatestateurl} from '../../api/request.js'
  export default{
    components:{
    	motal
    },
    data() {
      return {
		state:0,
		shopstate:'商家营业状态',
		value: new Date(),
        homemen:true,
        homeData:{},
        shop:'',
        delivering:'',
        physical:'',
        capita:'',
        types:'',
        times:'',
        duration:'',
        address:'',
        dialogVisible: false,
        disabled: false,
        fileimg:'',
        files:''
      }
    },
     methods: {
            successing(file, fileList){
              this.fileimg = file.url
              console.log(file)
              console.log(fileList)
              this.files = file.raw
            },
			// 编辑商品
			updatehome(itemdata){
			  this.$router.push({name:'edithome',params:{datas:itemdata}});
			},
			// 商家上下架
			changestate(openid,state){
			  if(this.state==state){
				  console.log("========")
				  this.state=1
				  this.shopstate='暂停营业'
			  }else{
				  console.log("---------")
				  this.state=0
				  this.shopstate='开始营业'
			  }
			  let list = {
				  "state":this.state,
				  "openid":openid
			  }//{ '{"state":1,"openid":"1649634398349"}': '' }

			  // let list = [
				 //  {"state":this.state},
				 //  {"openid":openid}
			  // ]
			  // { '{"state":1},{"openid":"1649634398349"}': '' }
			  home(list,updatestateurl)
			  .then((res)=>{
				  console.log(res)
			  })
			  // .catch((err)=>{
				 //  console.log(err)
			  // })
			},
            // 提交
          async  btNs(){
              console.log('提交')
              console.log("home vue this.opendata.goeasyid"+this.opendata.goeasyid)
              let list = [
                {"shop": this.shop},
                {"file": this.files},
                {"delivering": this.delivering},
                {"physical": this.physical},
                {"capita": this.capita},
                {"types": this.types},
                {"times": this.times},
                {"duration": this.duration},
                {"address": this.address},
                {"goeasyid": this.opendata.goeasyid}
              ]

              let  uploading = await new this.myreferto(list).appfrom()

              home(uploading,shopossurl)
              .then((res)=>{
                console.log(res)
                new this.myreferto(list).men()
                if(res.data.msg == 'SUCCESS'){
                 this.homeSucc()
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

        //请求成功显示商家信息
         homeSucc(){
           home(1,shopsuccurl)
           .then((res)=>{
             console.log(res)
             if(res.data.msg == 'SUCCESS'){
               console.log('123')
               this.homeData = res.data.data[0]
               this.homemen = false
             }else{
               this.homemen = true
             }
           })
           .catch((err)=>{
             console.log(err)
           })
         },

     },

     // 进入页面请求数据
     mounted() {
       this.homeSucc()
     },
      computed:{
          ...mapState(['opendata']),
      }
  }
</script>

<style scoped="scoped">
  @import '../../../style/pubiss.css';
  @import '../../../style/table.css';
  .home-list-homemen img{margin-bottom: 20px; width: 150px; height: 150px;
  border-radius: 10px;}
	.operation span:nth-child(1){background-color: #ecf5ff;
	color: #409eff;
	border: 1px solid #d9ecff;
	border-radius: 4px;
	padding: 5px 10px;
	cursor:pointer}
	.state{
		margin:20px 0;
		width: 96px;
		background-color: #ecf5ff;
		color: #409eff;
		border: 1px solid #d9ecff;
		border-radius: 4px;
		padding: 5px 10px;
		text-align: center;
		cursor:pointer
	}
 #one{
            float: left;
            /*display: inline-block;*/
            width: 50%;
            height: 40%;
            word-wrap: break-word;
            /* border-bottom: 3px solid; */
        }
 #two{
            /*display: inline-block;*/
            float: right;
            position: relative;
            width: 50%;
            height: 40%;
            /* border-bottom: 3px solid green; */
        }

</style>
