<template>
<div>
    <shop-header>

    </shop-header>
    <div class="tab">
        <div class="tab-item" >
            <router-link to="/shop/goods" :class="{on:'/shop/goods'===$route.path}">点餐</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/shop/ratings" :class="{on:'/shop/ratings'===$route.path}">评价</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/shop/info"  :class="{on:'/shop/info'===$route.path}">商家</router-link>
        </div>

    </div>
    <router-view>

    </router-view>
</div>
</template>

<script>
    import ShopHeader from '../../base/shopHeader/ShopHeader'
    export default {
        name: "Shop",
        components:{
            ShopHeader,

        },
        // mounted(){
        //     this.$store.dispatch('getShopInfo')
        // }
    }
</script>

<style scoped lang="stylus">
.tab
    height 30px
    display flex
    justify-content space-around
    align-items center
    font-size 15px
    position relative
    &::after
        content ''
        position absolute
        width 200%
        height 1px
        background #ccc
        transform scale(0.5)
        bottom 0
    .tab-item
        position relative
        .on
            color #cb3837
            &::after
                content ''
                display block
                position absolute
                top 20px
                background #cb3837
                width 100%
                height 2px



</style>
