<template>
<div>
    <div class="ui search">
    <div class="ui icon input">
        <input class="prompt" type="text" placeholder="搜索本站文章" 
        @click="show"  v-model="keyval">
        <i class="search icon"></i>
    </div>
    <div class="ui segment" v-show="isshow">
        <div class="lodaing" v-if="isloading">
            <img style="width: 250px; height: 210px;" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.xitongzhijia.net%2Fimages%2Fload.gif&refer=http%3A%2F%2Fwww.xitongzhijia.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668069092&t=51518c94edf0464003f72046760f5032" alt="">
        </div>    
        <div class="List" v-else>
            <div class="ui link list">
                <a class="item" v-for="item in resultList" :key="item.id" @click="go(item.id)">{{item.title}}</a>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import { Search } from '@/api/article'
import {ref, watch} from 'vue'
import { useRouter } from 'vue-router'
export default {
setup() {
    const router = useRouter()
    //控制搜索框的出现
    const isshow = ref(false)
    //加载中 与 内容互斥
    const isloading = ref(false)
    //搜索的关键字
    const keyval = ref('')
    //搜索结果
    const resultList = ref(null)
    //防抖
    let timer = null
    const show = () => {
        isshow.value = true
        isloading.value = true
    }
    const down = () => {
        isshow.value = false
    }
    //检测key值的改变 每1秒发一次请求
    watch(() => keyval.value, (val) => {
        clearTimeout(timer)
        if(val.length === 0) {
            return resultList.value = [] 
        }
        timer = setTimeout(async() => {
            const res = await Search(val)
            //console.log(typeof val);
            resultList.value = res.data.data
            isloading.value = false
        },500)
        
    })
    const go = (id) => {
        router.push(`/article/${id}`)
        isshow.value = false
        keyval.value = ''
    }
    return {
        isshow,
        show,
        isloading,
        keyval,
        timer,
        resultList,
        go,
        down
    }
}
}
</script>

<style lang="less" scoped>
.ui.icon.input{
    width: 289px;
}
.ui.segment{
    padding-top: 0;
    height: 250px;
    overflow: scroll;
    
}
.item{
    font-size: 16px;
    overflow: hidden;
}
</style>