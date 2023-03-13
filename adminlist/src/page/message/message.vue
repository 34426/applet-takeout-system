<template>
    <div class="ordering">
      <!-- 表格布局 -->
      <div class="var-table" v-if="noety">
          <!-- <div v-for="(items,index) in tableData" :key="index">
            <div v-for="(item,index) in items.messagedata" :key="index">
                <span>{{item}}</span>
                <span>我是评论</span>
            </div>
          </div> -->
		<div class="var-title">
		  <div v-for="(item,index) in tableData1" :key="index">{{item}}</div>
		</div>
        <!-- 内容 -->
		<div class="content" v-for="(item,index) in tableData" :key="index">
			<div class="content1">{{item.messagedata.time}}</div>
			<div class="content2">{{item.messagedata.nickName}}</div>
			<div class="content3">{{item.messagedata.usermess}}</div>
		</div>
	 	
	 </div>
      <!-- 没有数据 -->
      <div class="nodatas" v-if="!noety">
        你还没有订单评论
      </div>

  </div>
</template>
<script>
  import { mapState } from 'vuex';
  import {home} from '../../api/api.js'
    // 请求地址
  import {shopcomments} from '../../api/request.js'
  export default{
    data(){
      return{
        noety:false,
		tableData1: ['日期','用户','评论',' '],
        tableData:[]
      }
    },
	methods:{
      commentFun(){
      //   let data = {
      //   "openid":this.opendata.opening,
      // }
      home(1,shopcomments)
      .then((res)=>{
        if(res.data.msg=='SUCCESS'){
            this.tableData=res.data.data
            console.log(this.tableData)
            this.noety = true
        }else{
            this.noety = false           
        }

      })
      .catch((err)=>{
        console.log(err)
      })

    }

  },
    mounted(){
      this.commentFun()
    },
    computed:{
      ...mapState(['opendata'])
    }

  
  }
</script>

<style scoped="scoped">
  @import '../../../style/pubiss.css';
	.var-title{background: #f5f7fa; height: 50px; display: flex; justify-content: space-around;
	 align-items: center; font-weight: bold;
	 color: #909399;
	 }
	.content{display: flex; align-items: center;
	 height: 80px;
	 border-bottom: 1px solid #ebebeb;}
	 .content1{
		 width: 150px;margin-left:130px
	 }
	 .content2{
	 		 width: 125px;margin-left:200px
	 }
	 .content3{
	 		 width: 400px;margin-left:220px
	 }
</style>
