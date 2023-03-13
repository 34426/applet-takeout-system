<template>
	<div>
		<div>
			<!-- 表格布局 -->
			<div class="var-table">
			  <!-- 标题 -->
			  <div class="main-title">
			    <div>商 家 管 理 中 心</div>
				<div>
					<a href="login.vue">返回登陆首页</a>
				</div>
			  </div>
			  <div class="var-title">
			    <div v-for="(item,index) in tableData" :key="index">{{item}}</div>
			  </div>
			  <!-- 内容 -->
			  <div>
			    <div class="var-content" v-for="(item,index) in showshopdata" :key="index">
			      <div>
			        <img :src="item.logo" />
			      </div>
			      <div>{{item.shop}}</div>
			      <div>{{item.types}}</div>
				  <div>{{item.address}}</div>
			      <div class="operation" @click="changestatus(item)">
			        <span>{{item.status ===  1 ?'下架':'上架'}}</span>
			      </div>
			    </div>
			  </div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import {
		home,
		getdata
	} from '../../api/api.js'
	// 请求地址
	import {
		adminshopurl,
		adminupdateurl
	} from '../../api/request.js'
	export default {
		data() {
			return {
				status:0,
				shopstatus:'',
				tableData: ['商家logo','商家名称','商品类型','商家地址','操作'],
				showadmin:false,
				showshopdata:[],
				administrator: false,
				name: '',
				password: ''
			}
		},

		methods: {

			// 商家上下架
			changestatus(item){
			  if(this.status==item.status){
				  console.log("========")
				  this.status=1
				  this.shopstatus='下架'
			  }else{
				  console.log("---------")
				  this.status=0
				  this.shopstatus='上架'
			  }
			  let list = {
				  "status":this.status,
				  "openid":item._id
			  }//{ '{"state":1,"openid":"1649634398349"}': '' }
			  // console.log(list)
			  // let list = [
				 //  {"state":this.state},
				 //  {"openid":openid}
			  // ]
			  // { '{"state":1},{"openid":"1649634398349"}': '' }
			  home(list,adminupdateurl)
			  .then((res)=>{
				  console.log(res)
			  })
			  // .catch((err)=>{
				 //  console.log(err)
			  // })
			}


		},

		mounted() {
			getdata(adminshopurl)
			.then((res)=>{
				if(res.data.msg=='SUCCESS'){
					this.showshopdata=res.data.data
				}
			})
		}

	}
</script>

<style scoped="scoped">

	.var-title{background: #f5f7fa; height: 50px; display: flex; justify-content: space-around;
	align-items: center; font-weight: bold;
	color: #909399;
	}

	.main-title div:nth-child(1){background: #ffffff; height: 60px; display: flex; justify-content: space-around;
	align-items: center; font-weight: bold;
	color: #909399;font-size:30px
	}
	.main-title div:nth-child(2){
	color: #909399;font-size:20px;text-align:right;height: 30px;margin-right: 90px;
	}

	.var-title div{width: 200px; text-align: center;}
	.var-table{margin-top: 20px;}
	.operation{display: flex; align-items: center; justify-content: space-around;}
	.operation span:nth-child(1){background-color: #ecf5ff;
	color: #409eff;
	border: 1px solid #d9ecff;
	border-radius: 4px;
	padding: 5px 10px;
	cursor:pointer}
/* 	.operation span:nth-child(2){color: #fff;
	  background-color: #f56c6c;
	  border-radius: 4px;
	  padding: 5px 10px;
	  cursor:pointer} */
	  /* 菜品 */
	.var-content{display: flex; justify-content: space-around; align-items: center;
	height: 50px;
	border-bottom: 1px solid #ebebeb;}
	.var-content div{width: 200px; text-align: center;}
	.var-content img{width: 40px; height: 40px; border-radius: 5px;}
</style>
