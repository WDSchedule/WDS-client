// 定制请求实例

// 导入axios
import axios from "axios";
import { ElMessage } from "element-plus";

// 定义变量，记录公共前缀，baseUrl
const baseURL = '/api';
const instance = axios.create({ baseURL });

// 添加token
import { useTokenStore } from "@/stores/token";

// import { useRouter } from "vue-router";
// const router = useRouter();
import router from '@/router'

// 添加发送拦截器
instance.interceptors.request.use(
    (config) => {
        // 请求前的回调
        // 添加token
        const tokenStore = useTokenStore();
        // 判断有没有token
        if (tokenStore.token) {
            config.headers.Authorization = tokenStore.token;
        }
        return config;
    },
    (err) => {
        //请求错误后的回调
        // 判断响应状态码，如果为401，就跳转至登录页面
        if (err.response.status == 401) {
            ElMessage.error('请先登录');
            router.push('/login')
        } else {
            ElMessage.error('服务异常')
        }
        return Promise.reject(err);
    }
);

// 添加响应拦截器
instance.interceptors.response.use(
    result => {
        if (result.data.code === 'SSSS') {
            return result.data;
        }
        ElMessage.error(result.data.message ? result.data.message : '未知的服务异常')
        // 异步操作返回失败
        return Promise.reject(result.data)

    },
    err => {
        alert('服务异常');
        return Promise.reject(err);//异步的状态转化成失败的状态
    }
)
export default instance;