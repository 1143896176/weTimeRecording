/*
* 通过mutation间接更新state的多个方法的对象
* */
import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPS,
    RECEIVE_CATEGORYS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
} from './mutation_types'
import {
    reqAddress,
    reqFoodCategorys,
    reqShopList,
    reqGeolocation,
    reqUserinfo,
    reqLogout,
    reqShopGoods,
    reqShopInfo,
    reqShopRatings,
} from '../api'

export default {
//异步获取经纬度地址
    async getGeolocation({commit}) {
        const result = await reqGeolocation()
        commit(RECEIVE_ADDRESS, {address: result.data})
    },

//异步获取食品列表
    async getCategorys({commit}) {
        //发送异步ajax请求
        const result = await reqFoodCategorys()
        //提交一个mutation
        if (result.code === 0) {
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, {categorys})
        }
    }
    ,

//异步获取商家列表
    async getShops({commit, state}) {
        //发送异步ajax请求
        const {longitude, latitude} = state
        const result = await
            reqShopList(longitude, latitude)
        //提交一个mutation
        if (result.code === 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS, {shops})
        }
    }
    ,
    //获取同步用户信息
    getUser({commit}, userinfo) {
        commit(RECEIVE_USER_INFO, {userinfo})
    },
    //异步获取用户信息
    async getUserInfo({commit}){
        const result=await reqUserinfo()
        if(result.code===0){
            const userinfo=result.data
            commit(RECEIVE_USER_INFO,{userinfo})
        }

    },
    async logout({commit}){
        const result=await reqLogout()
        if(result.code===0){
            commit(RESET_USER_INFO)
        }
    },
    async getShopGoods({commit},callback){
        const result=await reqShopGoods()
        if (result.code===0){
            const goods=result.data
            commit(RECEIVE_GOODS,{goods})
            //数据跟新了，通知下一个组件
            callback && callback()
        }
    },
    async getShopInfo({commit}){
        const result=await reqShopInfo()
        if (result.code===0){
            const info=result.data
            commit(RECEIVE_INFO,{info})
        }
    },
    async getShopRatings({commit}){
        const result=await reqShopRatings()
        if (result.code===0){
            const ratings=result.data
            commit(RECEIVE_RATINGS,{ratings})
        }
    }


}
