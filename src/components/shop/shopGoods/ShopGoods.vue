<template>
    <div class="goods-warp">
        <div class="menu-wrap" >
            <ul class="menu-list">
                <li v-for="(good ,index) in goods" :key="index"  @click="clickMenu(index)" :class="{current:index===currentIndex}">

                    <img v-if="good.icon" class="icon" :src="good.icon" alt="">
                    <span>{{good.name}}</span>
                </li>
            </ul>
        </div>

        <div class="foods-warp" >
            <ul class="foods-list" ref="foodUl" >
                <li v-for="(good,index) in goods" :key="index" class="foods-list-2">
                    <ul>
                        <p>{{good.name}}</p>
                        <li class="food-card" v-for="(food,index) in good.foods" :key="index">
                            <img class="food-pic" :src="food.image" alt="">
                            <div>
                                <h3>{{food.name}}</h3>
                                <span class="detil">{{food.description}}</span>
                                <div>
                                    <span>月售{{food.sellCount}}份</span>
                                    &nbsp;&nbsp;&nbsp;
                                    <span>好评率{{food.rating}}%</span>
                                </div>
                                <span>￥{{food.price}}</span>
                            </div>
                        </li>
                    </ul>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import BScroll from 'better-scroll'
    export default {
        name: "ShopGoods",
        data(){
          return{
              scrollY:0,
              tops:[]
          }
        },
        mounted(){
            this.$store.dispatch('getShopGoods',()=>{
                this.$nextTick(()=>{
                   this._initScroll()
                   this._initTops()
                })
            })
        },
        methods:{
            //初始化滚动条
            _initScroll(){
               new BScroll('.menu-wrap',{
                    click:true //不添加不会调用click事件
                });
                this. foodsScroll=new BScroll('.foods-warp',{
                    probeType:2 , //不要用1试
                    click:true
                })
                this.foodsScroll.on('scroll',({x,y})=>{
                    console.log(x,y)
                    console.log(this.currentIndex)
                    this.scrollY=Math.abs(y)
                })
                this.foodsScroll.on('scrollEnd',({x,y})=>{
                    console.log('scrollEnd',x,y)
                    this.scrollY=Math.abs(y)
                })
            },
            _initTops(){
                const tops=[]
                let top=0
                tops.push(top)
                //找到所有li
                const lis=this.$refs.foodUl.getElementsByClassName('foods-list-2')
                Array.prototype.slice.call(lis).forEach(li=>{
                    top+=li.clientHeight
                    tops.push(top)
                })
                //更新数据
                this.tops=tops
                console.log(tops)
            },
            clickMenu(index){
                console.log(index)
                //使右侧列表滑动到指定位置
                const scrollY=this.tops[index]
                this.scrollY=scrollY
                this.foodsScroll.scrollTo(0,-scrollY,300)
            }
        },
        computed:{
            ...mapState(['goods']),
            //得到当前分类的下标
            currentIndex(){
                //得到相关数据
                const{scrollY,tops}=this
                //根据条件计算产生一个结果
                const index=tops.findIndex((top,index)=>{
                    //scrolly>=top scrolly<下一个top
                    return scrollY>=top && scrollY<tops[index+1]
                })
                //返回结果
                return index

            }
        }
    }
</script>

<style scoped lang="stylus">
.goods-warp
    position absolute
    top 190px
    bottom 40px
    display flex
    overflow hidden
    .menu-wrap
        width 80px
        background #DDD
        .menu-list
            background #eeeeee
            li
                height 50px
                line-height 50px
                position relative
                font-size 12px
                &.current
                    position: relative
                    z-index: 10
                    margin-top: -1px
                    background: #fff
                    color: red
                    font-weight: 700
                &::after
                    content ""
                    position absolute
                    bottom 0
                    left -50%
                    width 200%
                    height 1px
                    background #ccc
                    transform scale(0.5)
                .icon
                    width 12px
                    height 12px
                    margin-right 5px
                    border-radius 2px
    .foods-warp
        width 295px
        .foods-list
            text-align left
            background #FFF
            .food-card
                padding 10px
                padding-bottom 5px
                display flex
                position relative
                line-height 1.5
                &::after
                    content ''
                    position absolute
                    left -40%
                    bottom 0
                    width 180%
                    background #CCC
                    height 1px
                    transform scale(0.5)
            .food-pic
                width 60px
                height 60px
                padding 10px
                padding-top 0
                background #FFF
            .detil
                display block
                width 180px
                white-space nowrap
                text-overflow ellipsis
                overflow hidden
            p
                text-indent 20px
                text-align left
                line-height 20px
                background #eee
    div
        width auto


</style>
