// 当前这个模块：API进行统一管理
import request from "./request";

// 三级联动借口
// /api/product/getBaseCategoryList  get  无参数
// 发请求: axios 发请求返回结果是Promise对象
export const reqCategoryList = () => request({url:'product/getBaseCategoryList', method:'get'});
