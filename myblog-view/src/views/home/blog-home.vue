<template>
    <div class="c">
        <!-- 大图片 -->
        <div class="col">
            <img src="@/assets/首页大图.jpg" alt="" class="big">
            <div class="downlook">
                <div class="control" @click="scrollFn">
                    <i class="angle double down icon animated bounce infinite"></i>
                </div>
            </div>
        </div>
        <!-- 我的名片 -->
        <div class="flex-wrapper">
            <div class="flex">
                <Crad />
                <!-- main面板 -->
                <Main />
                <!-- 欢迎语 -->
                <Welcome />
            </div>
        </div>

    </div>
</template>
<script>
import Crad from "@/views/home/components/home-card.vue";
import Main from "@/views/home/components/home-main.vue";
import Welcome from "@/views/home/components/home-welcome.vue";
import { useStore } from 'vuex'
import { onMounted } from 'vue'
export default {
    components: { Crad, Main, Welcome },
    setup() {
        const store = useStore()
        const scrollFn = () => {
            window.scrollTo(0, 700)
        }
        //当home挂载的时候 就去请求那些文章详情 这样第一次点就不会出现空了
        onMounted(() => {
            store.dispatch('articles')
        })
        return {
            scrollFn
        }

    }
}
</script>
<style lang="less" scoped>
.big {
    width: 100%;
    height: 100%;
}

.downlook {
    position: absolute;
    top: 670px;
    left: 745px;
    font-size: 80px;
}


.flex-wrapper {
    display: flex;
    justify-content: space-around;
    .flex {
        display: flex;
        padding-top: 20px;
    }
}


.c {
    width: 100%;
}
</style>
