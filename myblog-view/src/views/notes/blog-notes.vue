<template>
<div class="flex-wrapper">
    <div class="notes-flex">
        <!-- 名片 -->
        <Crad/>
        <!-- 内容 -->
        <Main/>
        <div>
        <!-- 推荐网站 -->
        <Recommend/>
        <!-- 摸鱼网站 -->
        </div>
    </div>
</div>
</template>
<script>
import Crad from "@/views/home/components/home-card.vue";
import Main from "@/views/notes/components/notes-main.vue";
import Recommend from "@/views/notes/components/notes-recommend.vue";
export default {
components:{ Crad,Main,Recommend },
setup() {
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
    .notes-flex{
        display: flex;
    }
}
</style>
