// var url = 'http://120.25.193.97:3000/api/'
var url = 'http://localhost:3000/api/'
// 120.25.193.97
// 添加为你优选
let preferurl = `${url}banner/prefer/`

// 商家添加商品
let dishesurl = `${url}banner/dishes/`

// 拉取商品分类
let getshopcalssurl = `${url}forshop/getshopcalss`

// 添加商品分类
let shopcalssurl = `${url}banner/shopcalss`

// 删除商品分类
let deleshopcalssurl = `${url}banner/deleshopcalss`

// 修改商品
let updatapreferurl = `${url}banner/updataprefer/`

// 提交商家设置
let shopossurl = `${url}banner/oss/`

//请求成功显示商家信息{商家设置}
let shopsuccurl = `${url}forshop/shop`

// 登录
let loginurl = `${url}pcuser/login`

// 注册
let rejisturl = `${url}pcuser/register`

// 发送验证码
let codeurl = `${url}pcuser/smcode`

// 商家订单
let merchantorderurl = `${url}forshop/merchantorder`

// 拉取为你优选
let getpreferurl = `${url}forshop/getprefer`

// 为你优选删除商品
let delepreferurl = `${url}banner/deleprefer`

// 菜品管理
let getdishesurl = `${url}forshop/getdishes`

// 菜品管理{删除商品}
let deledishesurl = `${url}banner/deledishes`
//评论
let shopcomments = `${url}forshop/shopcomments`

//更改商家信息
let updatehome = `${url}banner/updatehome`
//更改商品信息
let updatedish = `${url}banner/editdish`
//商家自己上下架
let updatestateurl = `${url}banner/updatestate`
//管理员获取所有商家信息
let adminshopurl = `${url}forshop/adminshop`
//管理员上下架
let adminupdateurl = `${url}banner/adminupdate`
export{preferurl,dishesurl,getshopcalssurl,shopcalssurl,deleshopcalssurl,updatapreferurl,
shopossurl,shopsuccurl,loginurl,rejisturl,codeurl,merchantorderurl,getpreferurl,delepreferurl,
getdishesurl,deledishesurl,shopcomments,updatehome,updatedish,updatestateurl,adminshopurl,adminupdateurl}
