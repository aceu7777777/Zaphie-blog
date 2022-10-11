<template>
<div class="flex-wrapper"> 
    <div class="my-flex">
    <Crad/>
    <div class="myinfo">
        <Myinfo/>
        <Comment class="mycomment"/> 
    </div>
    <Welcome/>
    </div>
</div>
</template>
<script>
import Crad from "@/views/home/components/home-card.vue";
import Comment from "@/views/my/components/my-comment.vue";
import Welcome from "@/views/home/components/home-welcome.vue";
import Myinfo from "@/views/my/components/my-myinfo.vue"
export default {
components:{Comment, Crad, Welcome,Myinfo},  
    setup(){

        return {

        }
    }
}

</script>
<style lang="less" scoped>
.flex-wrapper{
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
    .my-flex{
        display: flex;
    }
}
.myinfo{
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    padding-right: 15px;
}
</style>
