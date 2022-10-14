<template>
<div class="flex">
    <div class="ui fixed inverted stackable pointing menu transparent">
        <div class="ui inverted secondary menu" v-show="y>=78">
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
            <div>
        </div>
        
        </div>
    </div>
</div>

</template>

<script>
import { useWindowScroll } from '@vueuse/core'
import { ref } from 'vue'
export default {
setup () {
    const { y } = useWindowScroll()
    const item = ref(0)
        const ChangeFn = (i) =>{
            item.value = i           
        }
    return { 
        y,
        item,
        ChangeFn
    }
}
}
</script>

<style lang="less" scoped>
.ui.inverted.pointing.menu.transparent {
    background: transparent!important;
    display: flex;
    justify-content: space-around;
    
}
.ui.fixed.menu {
    transition: .3s ease-out;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    transition-delay: 0s;
}
.ui.secondary.inverted.menu a.item {
    color: rgba(0,0,0,1)!important; 
    font-weight: 1000;
}


</style>