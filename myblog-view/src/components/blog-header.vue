<template>
    <div>
    <div class="ui inverted segment">
    <div class="ui inverted secondary menu">
        <img src="@/assets/E6711E7EDD01674808CC0E4B9351CB9B.png" alt="">
        <RouterLink to="/home" >
        <a class="item"  :class="{'active':item === $route.meta.link0 }"
        @click="ChangeFn(0)">
        <i class="home icon"></i>
        首页
        </a>
        </RouterLink>
        <RouterLink to="/notes"  >
        <a class="item" :class="{'active':item === $route.meta.link1 }"
        @click="ChangeFn(1)">
        <i class="keyboard outline icon"></i>
        我的笔记
        </a>
        </RouterLink>
        <RouterLink to="/item"  @click="ChangeFn(2)">
        <a class="item" :class="{'active':item === $route.meta.link2 }">
        <i class="code icon"></i>
        项目
        </a>
        </RouterLink>
        <RouterLink to="/state" @click="ChangeFn(4)">
        <a class="item" :class="{'active':item === $route.meta.link4 }">
        <i class="bell outline icon"></i>
        动态
        </a>
        </RouterLink>
        <RouterLink to="/my" @click="ChangeFn(6)">
        <a class="item" :class="{'active':item === $route.meta.link6 }">
        <i class="bed icon"></i>
        关于我  
        </a>
        </RouterLink>
    </div>
    </div>
    </div>
</template>
<script lang="ts">
import {ref} from 'vue'
export default {
    setup() {
        const item = ref<number>(0)
        const ChangeFn = (i:number) =>{
            item.value = i           
        }
        return {
            ChangeFn,
            item,

        }
    }
}
</script>
<style lang="less" scoped>
img{
    width: 70px;
    height: 35px;
}
.ui.inverted.segment{
    z-index: 999;
}
@media only screen and (max-width: 750px){
img{
    display: none;
}
a{
    font-size: 10px;
}
.ui.inverted.segment{
    height: 50px;
}
}
</style>
    