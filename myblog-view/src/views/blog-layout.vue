<template>
    <div>
    <!-- 头部导航 -->
    <BlogHeader></BlogHeader>
    <BlogHeaders />
    <!-- 二级路由 -->
    <keepAlive>
        <router-view/>   
    </KeepAlive>
    <!-- 尾部 -->
    <BlogFooter></BlogFooter>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import BlogHeader from '@/components/blog-header.vue'
import BlogFooter from '@/components/blog-footer.vue'
import BlogHeaders from '@/components/blog-header-sticky.vue'
export default defineComponent({
components:{
    BlogHeader,
    BlogFooter,
    BlogHeaders
    }
})
</script>
<style lang="less">

</style>
