// 定制请求实例

// 导入axios
import axios from "axios";
import { ElMessage } from "element-plus";
// 定义变量，记录公共前缀，baseUrl
const baseURL = '/api';
const instance = axios.create({baseURL});

// 添加响应拦截器
instance.interceptors.response.use(
    result=>{
        if (result.data.code === 'SSSS'){
            return result.data; 
        }
        ElMessage.error(result.data.message ? result.data.message: '未知的服务异常')
        // 异步操作返回失败
        return Promise.reject(result.data)
        
    },
    err=>{
        alert('服务异常');
        return Promise.reject(err);//异步的状态转化成失败的状态
    }
)
export default instance;