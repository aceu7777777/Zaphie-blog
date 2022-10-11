<template>
    <div>
    <!-- 头部导航 -->
    <BlogHeader></BlogHeader>
    <!-- 二级路由 -->
    <router-view/>
    <!-- 尾部 -->
    <BlogFooter></BlogFooter>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import BlogHeader from '@/components/blog-header.vue'
import BlogFooter from '@/components/blog-footer.vue'
export default defineComponent({
components:{
    BlogHeader,
    BlogFooter,
    }
})
</script>
<style lang="less">

</style>
