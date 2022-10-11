<template>
<div class="notes">
    <div class="ui relaxed divided list">
    <div class="item" v-for="item in notes" :key="item.id" @click="to(item.id)">
        <i class="large middle wheelchair icon"></i>
        <div class="content">
        <a class="header">{{item.title}}</a>
        <div class="description">{{item.date}}</div>
        </div>
    </div>

    </div>
</div>
</template>
<script>
import { Mynotes } from "@/api/article";
import {ref} from 'vue'
import { useRouter } from 'vue-router';
export default {
setup() {
    const router = useRouter()
    const notes = ref([])
    //开局就调
    Mynotes().then(data => {    
        notes.value = data.data.data
    })
    const to = (id) =>{
        router.push(`/article/${id}`)
    }
    return {
        notes,
        to
    }
}
}
</script>
<style lang="less" scoped>
.notes{
    padding-top: 10px;
}

.ui.relaxed.divided.list{
    width: 800px;
    padding-left: 20px;
    padding-right: 20px;
}
</style>
