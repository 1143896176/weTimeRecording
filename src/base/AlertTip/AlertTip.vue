<template>
    <div class="alert_warp">
        <img src="" alt="">
        <p>{{alertText}}</p>
        <a href="javascript:void(0)" @click="closeTip">
            确定
        </a>
    </div>
</template>

<script>
    export default {
        name: "AlertTip",
        props:{
            alertText:String
        },
        methods:{
            closeTip(){
                this.$emit('closeTip')
            }
        }
    }
</script>

<style scoped lang="stylus">
.alert_warp
    width 70%
    height 60%
    position fixed
    top 20%
    left 15%
    background #FFF
    z-index 300
    border-radius 10px
    overflow hidden
    box-shadow  0 0 5px #999
    p
        color #333
        line-height 40px
        font-size 20px
    a
        display block
        background #e84d4c
        font-size 20px
        color white
        height 40px
        line-height 40px
        position absolute
        bottom 0
        width 100%
</style>
