<template>
<div class="flex-wrapper">
    <div class="article">
        <Crad/>
        <div class="main">
            <div class="ui raised very padded text container segment" v-html="markedHtml">
            </div>
        </div>
        <div></div>
    </div>
</div>
</template>
<script>
import {marked} from 'marked'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import {ref,watch,toRaw,computed} from 'vue'
import Crad from "@/views/home/components/home-card.vue";
export default {
components:{Crad},
setup() {
    let articlesd = []
    const store = useStore()
    const route = useRoute()
    const markedHtml = ref(null)  //文章数据
    // 对应后端接口路径，或者本地路径
    setTimeout(() => {
    //注意只能解析字符串 得换成字符串
    markedHtml.value = marked.parse(`${articledetai.value}`);
    }, 0);
    //console.log(markedHtml.value);
    //监听 当id改变的时候获取数据 铺设数据
    watch(() => route.params.id, (val) => {
        //确定是点进去文章详情才发请求
        if(val && `/article/${val}` === route.path){
        articlesd = toRaw(store.state.articlesd.data)
        //console.log(articlesd.mds);
        }
    }, { immediate: true })
    //计算属性根据 mds数组选id和路径一样的 当依赖值改变的时候走计算属性 所以不要担心articlesd没值
    //坑卡了两天 用find方法不行 不会改变基础路径基础类型(它执行的时候就直接是浅拷贝了 再深拷贝无意义)   foreach则不会
    const articledetai = computed(()=>{
        const ddd = ref(null)
        //而foreach 找到值后等出来的是undefined没有返回值  要在里边等
        const articledetail = articlesd.mds.forEach(item => {
            if(item.tid == route.params.id){
                //console.log(item.data)
                ddd.value = item.data
                return 
            }
        });
        return ddd.value
    })
    return{
        articlesd,
        markedHtml,
        articledetai
    }
    
}
}
</script>
<style lang="less" scoped>
.flex-wrapper{
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
    .article{
        padding-top: 10px;
        display: flex;
    }
}
.Crad{
    padding-top: 15px;
}
.main{
    padding-left: 10px;
    padding-bottom: 20px;
}
.ui.raised.very.padded.text.container.segment{
    max-width: 1000px!important;
}
</style>
