// 当前这个模块：API进行统一管理
import request from "./request";
import mockRequest from './mockRequest'
// 三级联动借口
// /api/product/getBaseCategoryList  get  无参数
// 发请求: axios 发请求返回结果是Promise对象
export const reqCategoryList = () => request.get('/product/getBaseCategoryList');

// 获取banner(Home首页轮播图接口)
export const reqGetBannerList = () => mockRequest.get('/banner');

// 获取floor数据
export const reqFLOORlIST = () => mockRequest.get('/floor');

// 获取搜索模块数据，地址:/api/list  请求方式:post  参数:需要带参数
// 当前这个接口（获取搜索模块的数据），需要给服务器传递一个参数（至少是一个空对象）
export const reqGetSearchInfo = (params) => request({ url: "/list", method: "post", data: params })

