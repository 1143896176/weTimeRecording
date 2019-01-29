<template>
  <div class="hello">
    <h1>{{}}</h1>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    a: Object
  },
    mounted(){
      this.addTask()
        this.add()
    },
    methods:{
        addTask(){
            //this.$store.commit("TO_PTATH",'/taskHead');
        },
        add(){
            setTimeout(()=>{
                this.$store.commit("TO_PTATH",'/taskHead');
            },1000)


        }
    },
    computed: {
        listenshowpage1() {
            return this.$store.state.topath;
        }
    },
    watch:{
        listenshowpage1:function(old,newd){
            console.log(old)
            this.temp = old;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1{
  background:#cb3837;
}
</style>
