<template>
    <div class="flex-wrapper">
        <div class="ui raised very padded text container segment">
            <div class="ui threaded comments">
            <h3 class="ui dividing header" style="text-align: center; font-size: 30px;">我的动态</h3>
            <div class="comment" v-for="item in allstate" :key="item.id">
                <a class="avatar">
                <img class="ui avatar image" src="@/assets/touxiang.png">
                </a>
                <div class="state">
                    <div class="ui card">
                    <div class="extra content">
                        <div class="header">Zaphie</div>
                        <span>{{item.time}}</span>
                    </div>
                    <div class="extra content">
                        <span class="description">{{item.content}}</span>
                    </div>
                    <div class="ui divider"></div>
                    </div>
                </div>     
            </div>
            
            </div>
        </div>
    </div>
</template>
<script>
import { Mystate } from "@/api/article";
import { ref, } from 'vue'
export default {
    setup() {
        const allstate = ref([])
        //开局请求铺设数据
        Mystate().then(data => {
            allstate.value = data.data.data
        })
        return {
            allstate
        }
    }
}
</script>

<style lang="less" scoped>
.flex-wrapper{
    padding-top: 20px;
    min-height: 700px;
}
.ui.raised.very.padded.text.container.segment{
    max-width: 1000px!important;
}
.ui.threaded.comments{
    max-width: 1000px!important;
}
.ui.dividing.header{
    font-weight: normal;
}
.ui.card{
    width: 750px;
}
.state{
    padding-left: 50px;
}
</style>
