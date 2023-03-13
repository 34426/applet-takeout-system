(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/placeorder/placeorder"],{

/***/ 82:
/*!******************************************************************************************************!*\
  !*** C:/Users/fwl/Desktop/wechatwaimai/wxmeituan/main.js?{"page":"pages%2Fplaceorder%2Fplaceorder"} ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _placeorder = _interopRequireDefault(__webpack_require__(/*! ./pages/placeorder/placeorder.vue */ 83));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_placeorder.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 83:
/*!***********************************************************************************!*\
  !*** C:/Users/fwl/Desktop/wechatwaimai/wxmeituan/pages/placeorder/placeorder.vue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _placeorder_vue_vue_type_template_id_e7307e34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placeorder.vue?vue&type=template&id=e7307e34& */ 84);
/* harmony import */ var _placeorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeorder.vue?vue&type=script&lang=js& */ 86);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _placeorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _placeorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _placeorder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeorder.vue?vue&type=style&index=0&lang=css& */ 88);
/* harmony import */ var _E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _placeorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _placeorder_vue_vue_type_template_id_e7307e34___WEBPACK_IMPORTED_MODULE_0__["render"],
  _placeorder_vue_vue_type_template_id_e7307e34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _placeorder_vue_vue_type_template_id_e7307e34___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/placeorder/placeorder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 84:
/*!******************************************************************************************************************!*\
  !*** C:/Users/fwl/Desktop/wechatwaimai/wxmeituan/pages/placeorder/placeorder.vue?vue&type=template&id=e7307e34& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_template_id_e7307e34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./placeorder.vue?vue&type=template&id=e7307e34& */ 85);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_template_id_e7307e34___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_template_id_e7307e34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_template_id_e7307e34___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_template_id_e7307e34___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 85:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/fwl/Desktop/wechatwaimai/wxmeituan/pages/placeorder/placeorder.vue?vue&type=template&id=e7307e34& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.HMmessages = _vm.$refs.HMmessages
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 86:
/*!************************************************************************************************************!*\
  !*** C:/Users/fwl/Desktop/wechatwaimai/wxmeituan/pages/placeorder/placeorder.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./placeorder.vue?vue&type=script&lang=js& */ 87);
/* harmony import */ var _E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 87:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/fwl/Desktop/wechatwaimai/wxmeituan/pages/placeorder/placeorder.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 61));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 63));
var _api = __webpack_require__(/*! ../../api/api.js */ 41);
var _request = __webpack_require__(/*! ../../api/request.js */ 43);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _console = console,
  log = _console.log;
// 引入提示组件
var HMmessages = function HMmessages() {
  __webpack_require__.e(/*! require.ensure | components/HM-messages/HM-messages */ "components/HM-messages/HM-messages").then((function () {
    return resolve(__webpack_require__(/*! @/components/HM-messages/HM-messages.vue */ 182));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    HMmessages: HMmessages
  },
  data: function data() {
    return {
      addreing: true,
      allorder: [],
      openid: '',
      payment: '',
      physical: Number,
      MerchantId: '',
      nameshop: '',
      logo: '',
      // 收货地址
      addressing: {}
    };
  },
  methods: {
    // 选择收货地址
    addRess: function addRess() {
      var _this = this;
      wx.chooseAddress({
        success: function success(res) {
          log(res);
          _this.addressing = res;
          _this.addreing = false;
        }
      });
    },
    setTime: function setTime() {
      setTimeout(function () {
        console.log("定时器");
        wx.switchTab({
          url: '../order/order'
        });
      }, 3000);
    },
    // 去支付
    toPay: function toPay() {
      if (this.addreing == true) {
        log('没有选择收货地址');
        var succ = '请选择收货地址';
        var ico = 'error';
        this.tIps(succ, ico);
        return false;
      }
      log('可以支付');
      this.wxPay();
    },
    // 微信支付
    wxPay: function wxPay() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var peopleobj, merchantid, ide, commod, logo, Paymentinfor, Placeorder, paysucc;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 提示用户正在下单，防止用户多次点击下单按钮
                wx.showToast({
                  title: '正在下单',
                  icon: 'loading',
                  duration: 1000,
                  mask: true
                });
                // 搞定必填参数
                // 客户信息
                peopleobj = {
                  address: _this2.addressing.detailInfo,
                  name: _this2.addressing.userName,
                  iphone: _this2.addressing.telNumber
                }; // 商家标识
                merchantid = _this2.MerchantId; // 截取商家标识字符串
                ide = _this2.MerchantId.slice(0, 7); // 商家名称
                commod = _this2.nameshop; // 商家logo
                logo = _this2.logo; // 把要发送到后台的数据以对象形式存储
                Paymentinfor = {
                  type: 'placeOrder',
                  peopleobj: peopleobj,
                  arrinfo: _this2.allorder,
                  merchantid: merchantid,
                  ide: ide,
                  commod: commod,
                  logo: logo,
                  useropenid: _this2.openid,
                  payment: _this2.payment
                }; // log(Paymentinfor)
                // es6 :async await:异步编程同步化
                // 第一步：统一下单
                // await:等待
                log("----------------");
                log(Paymentinfor);
                log('--------------');
                _context.next = 12;
                return _this2.placeOrder(Paymentinfor);
              case 12:
                Placeorder = _context.sent;
                log("=============");
                log(Placeorder.data);
                log("=============");
                // 第二步：发起支付
                // let wxpay = await this.wxPays(Payparame)
                // log(wxpay)
                // 第三步：查询时候支付成功
                _context.next = 18;
                return _this2.paySucc(Placeorder.data);
              case 18:
                paysucc = _context.sent;
              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // 第一步：统一下单
    placeOrder: function placeOrder(Paymentinfor) {
      return new Promise(function (resolve, reject) {
        (0, _api.publicing)(_request.wxpayingurl, Paymentinfor).then(function (res) {
          // wx.hideToast()
          resolve(res);
        }).catch(function (err) {
          log(err);
          // wx.hideToast()
          reject('支付错误');
        });
      });
    },
    //第二步：发起支付
    // wxPays(Payparame){
    // 	return new Promise((resolve,reject)=>{
    // 		wx.requestPayment({
    // 			timeStamp:Payparame.time_stamp,
    // 			nonceStr:Payparame.nonceStr,
    // 			package:`prepay_id=${Payparame.prepayId}`,
    // 			signType:'MD5',
    // 			paySign:Payparame.payauto,
    // 			success:(res)=>{
    // 				// log(res)
    // 				resolve(res)
    // 			},
    // 			fail:(err)=>{
    // 				log(err)
    // 				reject(err)
    // 				let succ = '支付失败'
    // 				let ico = 'success'
    // 				this.tIps(succ,ico)
    // 			}
    // 		})
    // 	})
    // },
    // 查询是否支付成功
    paySucc: function paySucc(Payparame) {
      var _this3 = this;
      return new Promise(function (resolve, reject) {
        // log("1111"+Payparame.out_trade_no)
        // log("0000"+Payparame._id)
        // log(this.MerchantId)
        var data = {
          type: 'paysucc',
          out_trade_no: Payparame.out_trade_no,
          id: Payparame._id,
          merchantid: _this3.MerchantId
        };
        (0, _api.publicing)(_request.wxpayingurl, data).then(function (res) {
          log(res);
          var succ = '支付成功';
          var ico = 'success';
          _this3.tIps(succ, ico);
        }).catch(function (err) {
          log(err);
          var succ = '支付失败';
          var ico = 'success';
          _this3.tIps(succ, ico);
        });
      });
    },
    // 提示
    tIps: function tIps(succ, ico) {
      this.HMmessages.show(succ, {
        icon: ico,
        fontColor: "#ffffff",
        iconColor: "#ffffff",
        background: "rgba(102,0,51,0.8)"
      });
    }
  },
  // 接收下单页面的路径数据
  onLoad: function onLoad(e) {
    log(e);
    var ordermen = JSON.parse(e.ide);
    log("========+++++");
    log(ordermen);
    log("+++++++++");
    // 商品数据go
    this.allorder = ordermen.allorder;
    // openid
    this.openid = ordermen.openid;
    // 支付的价格
    this.payment = ordermen.payment;
    // 配送费
    this.physical = ordermen.physical;
    // 商家标识
    this.MerchantId = ordermen.MerchantId;
    // 商家名称
    this.nameshop = ordermen.nameshop;
    // 商家logo
    this.logo = ordermen.logo;
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 88:
/*!********************************************************************************************************************!*\
  !*** C:/Users/fwl/Desktop/wechatwaimai/wxmeituan/pages/placeorder/placeorder.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./placeorder.vue?vue&type=style&index=0&lang=css& */ 89);
/* harmony import */ var _E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_programmer_software_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_placeorder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 89:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/fwl/Desktop/wechatwaimai/wxmeituan/pages/placeorder/placeorder.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[82,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/placeorder/placeorder.js.map