<template>
  <div class="ordering">
    <div class="home-list">
      <div class="home-title">商品分类</div>
       <el-select v-model="value" placeholder="请选择商品分类"  @change="listmin">
           <el-option
             v-for="item in options"
             :key="item._id"
             :label="item.classdata"
             :value="item._id"
             >
           </el-option>
        </el-select>
    </div>
    <!-- 商品名称 -->
    <div class="home-list">
      <div class="home-title">商品名称</div>
       <el-input v-model="input" placeholder="请填写商品名称"></el-input>
    </div>
    <!-- 商品特色 -->
    <div class="home-list">
      <div class="home-title">商品特色</div>
      <div class="home-search">
       <el-input v-model="unique" placeholder="请填写商品特色,比如微辣,中辣"></el-input>
       <el-row class="home-btning">
         <el-button type="primary" @click="addIing()">确定</el-button>
       </el-row>
      </div>
      <!-- 分类显示 -->
      <div class="classify-lable">
        <el-tag
        effect="dark"
        class="eltab"
          v-for="(tag,index) in tags"
          :key="index"
          closable
          type="warning"
          @close="handleClose(index)"
          >
          {{tag}}
        </el-tag>
      </div>
    </div>
    <!-- 商品划线价 -->
    <div class="home-list">
      <div class="home-title">商品划线价(单位元)</div>
       <el-input v-model="Price" placeholder="请输入商品划线价"></el-input>
    </div>
    <!-- 商品优惠价 -->
    <div class="home-list">
      <div class="home-title">商品优惠价(单位元)</div>
       <el-input v-model="Discount" placeholder="请输入商品优惠价"></el-input>
    </div>
    <!-- 商品图片 -->
    <div class="home-list" v-bind="upImg">
      <div class="home-title">上传商品图片</div>
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

    <!-- 提交 -->
    <div class="home-list">
      <el-row>
        <el-button type="success" @click="btNs()">提交</el-button>
      </el-row>
    </div>

  </div>
</template>

<script>
  import {home} from '../../api/api.js'
  // 请求接口getshopcalssurl
  import {getdishesurl,updatedish,getshopcalssurl} from '../../api/request.js'
  export default{
    data() {
      return {
        // 商品名称
        input: '',
        // 商品特色
        tags:[],
        // 划线价
        Price:'',
        // 商品优惠价
        Discount:'',
        // 商品分类
        optidata:'',
        // 上传的图片files
        files:'',
		upfile:'',
        fileimg:'',
        // 商品特色input
        unique:'',
        options: [],
        value: '',
        ids:''
      }
    },
     methods: {
       // 上传图片
            successing(file, fileList){
              this.fileimg = file.url
              this.files = file.raw
            },

            // 取到单个分类
            listmin(val){
              console.log(val)
              this.options.forEach((item)=>{
                  if(item._id === val){
                    console.log(item.classdata)
                    this.optidata = item.classdata
                  }
              })
            },

            // 删除商品特色
            handleClose(tag) {
              console.log(tag)
              this.tags.splice(tag,1)
            },

            // 添加商品特色
            addIing(){
              if(this.unique != ''){
                console.log(this.unique)
                this.tags.push(this.unique)
                let newarr = Array.from(new Set(this.tags))
                this.tags = newarr
                this.unique = ''
              }
            },

            // 提交
           async btNs(){
              console.log('提交')
              let tags = JSON.stringify(this.tags)
              let list = [
                {"optidata": this.optidata},
                {"file": this.upfile},
                {"input": this.input},
                {"tags": tags},
                {"Price": this.Price},
                {"Discount": this.Discount},
				{"ids": this.ids}
              ]
              
              let  uploading = await new this.myreferto(list).appfrom()
              
              home(uploading,updatedish)
              .then((res)=>{
                new this.myreferto(list).men()
                console.log(res)
                if(res.data.msg == 'SUCCESS'){
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

            // 拉取分类
            geTdata(){
              home(1,getshopcalssurl)
              .then((res)=>{
                console.log(res)
                if(res.data.msg == 'SUCCESS'){
                  // this.noclass = false
                  this.options = res.data.data
                }else{
                  // this.noclass = true
                }

              })
              .catch((err)=>{
                console.log(err)
              })
            },

         },
         //
         mounted() {
           this.geTdata(),
		   // 接收修改传过来的值
		   console.log(this.$route.params)
		   let dataedit = this.$route.params.datas
		   this.value= dataedit.optidata
		   this.input= dataedit.objdis.input
		   this.unique= dataedit.objdis.tags
		   this.Price= dataedit.objdis.Price
		   this.Discount= dataedit.objdis.Discount
		   this.fileimg= dataedit.objdis.image
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
		        this.upfile = this.fileimg
		        console.log(this.upfile)
		     }
		   }
		 }

      
  }
</script>

<style scoped="scoped">
  @import '../../../style/pubiss.css';
  @import '../../../style/table.css';
  .el-select{width: 100%;}
  .home-search{display: flex;}
  .home-btning{margin-left: 10px;}
  .classify-lable{margin-top: 20px;}
  .eltab{margin: 5px;}
</style>

