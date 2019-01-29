<template>
    <footer class="footer_guide border-1px" v-if="$route.meta.show">
        <!--对象语法绑定：class={classname：true/flase}-->
        <a href="javascript:;" :class="{on:'/'===$route.path}" @click="goTo('/')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
            <span>外卖</span>
        </a>
        <a href="javascript:;" :class="{on:'/search'===$route.path}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
            <span>搜索</span>
        </a>
        <a href="javascript:;" :class="{on:'/order'===$route.path}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
            <span>订单</span>
        </a>
        <a href="javascript:;" :class="{on:'/me'===$route.path}" @click="goTo('/me')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
            <span>我的</span>
        </a>
    </footer>

</template>

<script>
    export default {
        name: "mfooter",
        methods: {
            goTo(path) {
                this.$router.replace(path)
            }
        }
    }
</script>

<style scoped>
    .footer_guide {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-around;
        border-top: 1px solid red;/*no*/
        z-index: 1000;
        background: #FFF;
        line-height: 1.5;
    }

    a {
        display: flex;
        flex-flow: column;
    }

    i {
        font-size: 18px;
    }

    .on {
        color: #cb3837;
    }
</style>
