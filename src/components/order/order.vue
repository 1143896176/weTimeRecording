<template>
    <section class="order">

        <MHeader title="订单列表"></MHeader>
        <section class="order_no_login">
            <img src="./images/person.png">
            <h3>登录后查看外卖订单</h3>
            <button>立即登陆</button>
        </section>
    </section>
</template>

<script>
    import MHeader from '../../base/MHeader'
    export default {
        name: "order",
        components:{
            MHeader
        }
    }
</script>

<style scoped lang="stylus">
    .order  //订单
        width 100%
        .order_no_login
            padding-top 140px
            width 60%
            margin 0 auto
            text-align center
            >img
                display block
                width 100%
                height 30%
            >h3
                padding 10px 0
                font-size 17px
                color #6a6a6a
            >button
                display inline-block
                background #cb3837
                font-size 14px
                color #fff
                border 0
                outline none
                border-radius 5px
                padding 10px 20px
    .header //头部公共css
        background-color #cb3837
        position fixed
        z-index 100
        left 0
        top 0
        width 100%
        height 45px
        .header_search
            position absolute
            left 15px
            top 50%
            transform translateY(-50%)
            width 10%
            height 50%
            .iconfont
                font-size 22px
                color #fff
        .header_title
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
            width 30%
            color #fff
            font-size 22px
            text-align center
</style>
