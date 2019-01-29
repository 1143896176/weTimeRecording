<template>
    <div>
        <div class="shop-header-top" style=" background-image: url('https://fuss10.elemecdn.com/f/5c/ead54394c3de198d3e6d3e9111bbfpng.png');">
            <a class="go_back  " href="javascript:window.history.back()">
                <i class="iconfont icon-jiantou2"></i>
            </a>
        </div>
        <div class="shop-detail">
            <img  src="" alt="">
            <div class="shop-name">大鸭梨</div>
            <div class="shop-lable">
               <span class="lableNum">5</span>
               <span class="lableMN">月售100单</span>
               <span>二狗专送</span>
               <span>约30分钟</span>
               <span>距离1000m</span>
            </div>
            <ul >
                <div>
                    <div class="shop-lable-list">
                        首单立减17元
                    </div>
                   <div class="shop_num">
                       4个优惠
                   </div>
                </div>
                <li></li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ShopHeader"
    }
</script>

<style scoped lang="stylus">
.shop-header-top
    text-align left
    height 50px
    line-height 50px
    .go_back
        margin-left 10px
        i
            font-size  22px
            color white
            font-weight bold
.shop-detail
    padding-top 37px
    img
        width 70px
        height 70px
        position absolute
        background #AAA
        top:10px
        left 50%
        transform translateX(-50%)
    .shop-name
        width 85%
        margin 0 auto
        padding-left 50px
        box-sizing border-box
        text-align left
        font-size 18px
        font-weight bold
        color #333
        position relative
        &::before
            content '品牌'
            font-size 13px
            padding 0 6px
            line-height 22px
            position absolute
            top 0
            left 0
            bottom 0
            background #ffd930
    .shop-lable
        width 85%
        font-size 12px
        margin 0 auto
        margin-top 5px
        display flex
        justify-content space-around
    ul
        width 85%
        height 25px
        margin 5px auto
        border 1px solid #ccc
        div
            height 100%
            display flex
            justify-content space-between
            align-items  center
            .shop-lable-list
                margin-left 35px
                position relative
                &::before
                    content '首单'
                    padding 0px 2px
                    background #25d022
                    font-size 10px
                    color white
                    border-radius 1px
                    line-height 13px
                    position absolute
                    left -33px


            .shop_num
                margin-right 20px
                position relative
                &::after
                    content: "";
                    border-style: solid;
                    border-width: 6px 0 6px 7px;
                    border-color: transparent transparent transparent rgba(0,0,0,0.67);
                    position: absolute;
                    right:- 15px;













</style>
