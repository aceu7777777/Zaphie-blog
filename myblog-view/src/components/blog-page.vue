<template>
    <div class="xtx-pagination">
        <a v-if="myCurrentPage > 1" href="javascript:;"  @click="changePager(myCurrentPage-1)"
        >上一页</a>
        <a  v-else href="javascript:;" class="disabled"
        >上一页</a>
        <span v-if="pager.start>1">...</span>
        <a href="javascript:;"  v-for="i in pager.btnArr" :key="i" @click="changePager(i)"
        :class="{active:i===myCurrentPage}"
        >{{i}}</a>
        <span v-if="pager.end<pager.pageCount">...</span>
        <a v-if="myCurrentPage<pager.pageCount" href="javascript:;" @click="changePager(myCurrentPage+1)"
        >下一页</a>
        <a v-else href="javascript:;" class="disabled"
        >下一页</a>
    </div>
</template>
<script>
import { computed,ref,watch } from 'vue'
export default {
name: 'XtxPagination',
props:{
    total:{
        type:Number,
        default:100
    },
    pageSize:{
        type:Number,
        default:10
    },
    currentPage:{
        type:Number,
        default:1
    },
},
setup(props,{emit}) {
    //准备切换页码需要的舒徐：
    //需要：按钮个数count，当前页码myCurrentPage，总条数myTotal，
    //每页的条数myPageSize起始页码start，结束页码end，按钮数组btnArr
    //1.约定按钮的个数为5个
    const count = 5
    //2.当前显示的页码
    const myCurrentPage = ref(1)
    //3.总条数 每页多少个
    const myTotal = ref(100)
    const myPageSize = ref(10)
    //其他数据 需要根据以上数据计算
    const pager = computed(() => {
        //总页数
        const pageCount = Math.ceil(myTotal.value / myPageSize.value)
        //按钮显示个数和当前页码====>起始按钮 结束按钮 按钮数组（最后显示的是什么）
        //1.理想情况下 如选中3 显示12345  那么是怎么显示12345的呢 要知到start页码和结束页码 偏移量
        //偏移量：要从前边推几个？
        const offset = Math.floor(count / 2)
        let start = myCurrentPage.value - offset
        //为什么-1  算一下发现多1
        let end = start + count - 1
        //2.如果经过上面的计算发现start页码小于1  也就是当前页是1 2
        if(start < 1){
            start = 1
            //结束页码可能大于总页数 如果大于的话end就是总页数
            end = (start + count - 1) > pageCount ? pageCount : (start + count - 1)
        }
        //3.如果结束页码大于总页数
        if(end > pageCount){
            end = pageCount
            //开始页可能小于1
            start = (end-count+1) < 1 ? 1 : (end-count+1)
        }

        //页码数组
        const btnArr = []
        for (let i = start; i<=end; i++) {
            btnArr.push(i)
        }
        //将计算属性数据返回
        return {
            pageCount,
            btnArr,
            start,
            end
        }
    })
    

    //监听props 当有传过来就更新组件内部数据
    watch(props,()=>{
        myTotal.value = props.total
        myPageSize.value = props.pageSize
        myCurrentPage.value = props.currentPage
    },{immediate:true})
    //切换页面
    const changePager = (page) =>{
        myCurrentPage.value = page
        emit('current-page',page)
    }

    return { pager, myCurrentPage,changePager}
}
}
</script>
<style scoped lang="less">
.xtx-pagination {
display: flex;
justify-content: center;
padding: 30px;
> a {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid white;
    border-radius: 4px;
    margin-right: 10px;
    &:hover {
    color: blue;
    }
    &.active {
    background: blue;
    color: #fff;
    border-color: white;
    }
    &.disabled {
    cursor: not-allowed;
    opacity: 0.4;
    &:hover {
        color: #333
    }
    }
}
> span {
    margin-right: 10px;
}
}
</style>