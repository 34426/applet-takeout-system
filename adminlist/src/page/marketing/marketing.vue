<template>
  <div>
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
		  <div class="content">
			  <div class="a">
			    <div v-for="(item,index) in datatime" :key="index">{{item}}</div>
			  </div>
			  <div class="b">
			    <div v-for="(item,index) in total" :key="index">{{item}}</div>
			  </div>
		  </div>
      </div>
      <!-- 没有数据 -->
      <div class="nodatas" v-if="!noety">
        你还没有营业信息
      </div>

  </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import {home} from '../../api/api.js'
    // 请求地址
  import {merchantorderurl} from '../../api/request.js'
  export default{
    data(){
      return{
        noety:false,
		tableData1:['日期','营业额'],
        tableData:[],
		total:[],
		datatime:[]
      }
    },
    methods:{
      commentFun(){
      //   let data = {
      //   "openid":this.opendata.opening,
      // }
      home(1,merchantorderurl)
      .then((res)=>{
        if(res.data.msg=='SUCCESS'){
			let datass=[]
            this.tableData=res.data.data
			datass=this.tableData
            console.log(datass.length)
			let num=datass.length
			console.log(num)
			let price=0
			let totalprice=0
			let time
			let datatime
			let datatimes=[]
			let totalprices=[]
			let nums=0
			for(let i=0;i<num;i++){
				// console.log(datass[i])
				// console.log("==="+datass[1].wxorder.total_fee)
				price=datass[i].wxorder.total_fee
				time=datass[i].wxorder.timeing
				datatime=time.split(' ')[0]
				if(datatimes.includes(datatime)==false){
					datatimes.push(datatime)
					if(datatimes.length>1){
						totalprices.push(totalprice)
						totalprice=0
					}
					
				}
				
				if(datatimes.includes(datatime)==true){
					nums+=1
					totalprice+=price
					console.log(totalprice)
				}
				if(num===nums){
					totalprices.push(totalprice)
				}
			}
			this.total=totalprices
			this.datatime=datatimes
			// console.log(datatime)
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
	 .a{width: 500px;margin-left:280px}
	 .b{width: 500px;margin-left:340px}
	 /* .content3{width: 320px;margin-right:100px} */
	 
</style>
