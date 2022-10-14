<template>
    <div>
        <div class="control" v-for="item in Currentarticle" :key="item.id">
            <div class="ui raised very padded text container segment">
                <div class="ui blue ribbon label">
                    {{ item.classif==1 ? '谢特杂烩' : '我的笔记'}}
                </div>
                <h2 class="ui header center">{{item.title}}</h2>
                <p><img class="contentimg" :src="item.cover" alt=""></p>
                <div class="flexs">
                    <p>{{item.date}}</p>
                    <p>
                        <i v-if="item.isgood===1" class="heart icon"></i>
                        <i v-else @click="changeGood(item)" class="heart outline icon"></i>
                        <a class="ui label">
                            {{item.good}}
                        </a>
                    </p>
                </div>
                <p>Zaphie</p>
                <div class="button">
                    <button class="ui blue basic button">
                        <RouterLink :to="`/article/${item.id}`">
                            阅读全文
                        </RouterLink>
                    </button>

                </div>
                <a class="ui blue tag label">{{item.label}}</a>
            </div>
        </div>
        <!-- 分页组件 -->
        <Bpage :total="total" :pageSize="3" :currentPage="page" @current-page="changePagerFn" />
    </div>
</template>
<script>
import Message from '@/components/library/Message'
import { Allarticle } from "@/api/article";
import { Good, Page } from "@/api/article";
import Bpage from '@/components/blog-page.vue'
import { computed, ref, watch } from 'vue';
export default {
    //此组件唯一和首页组件不同的就是接口的不同
    components: { Bpage },
    setup() {
        const article = ref([])
        //请求文章
        Allarticle().then(date => {
            article.value = date.data.data
        })
        //点赞方法
        const changeGood = (item) => {
            item.isgood = 1
            Good(item.id)
            item.good++
            Message({ type: 'success', text: '谢谢你的点赞' })
        }
        //分页
        let total = computed(() => {
            return article.value.length
        })
        //定义当前页码
        const page = ref(1)
        //定义当前页里的数据
        const Currentarticle = ref([])
        //实现分页切换 并且回到正确位置
        const changePagerFn = (newPage) => {
            page.value = newPage
            window.scrollTo(0, 750)
        }
        //检测当前页码变化 请求数据铺数据
        watch(page, async () => {
            const data = await Page(page.value)
            Currentarticle.value = data.data.data
        })
        //开启的时候调用一下第一页 不至于出现空页面
        Page(1).then(data => {
            Currentarticle.value = data.data.data
        })
        return {
            article,
            changeGood,
            total,
            page,
            changePagerFn,
            Currentarticle
        }
    }
}
</script>
<style lang="less" scoped>
.control {
    padding-left: 10px;
    padding-bottom: 20px;
}

.center {
    align-items: center;
}

.contentimg {
    width: 100%;
    height: 100%;
}

.button {
    display: flex;
    justify-content: center;
}

.flexs {
    display: flex;
    justify-content: space-between;
}
</style>
