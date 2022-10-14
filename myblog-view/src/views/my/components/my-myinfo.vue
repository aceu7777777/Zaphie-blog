<template>
<div class="shouji">
<div class="ui raised very padded text container segment">
    <h2 class="ui header">情报</h2>
    <div class="tiele">Zaphie</div>
    <div class="ui divider"></div>
    <ul class="ui list">
        <li>M  E: 软工躺平大三</li>
        <li>爱好: 写Bug、改Bug、打游戏、听歌、睡觉</li>
        <li>特点: 开心就好</li>
        <li>目标: 躺平</li>
        </ul>
    <p></p>
    <div class="tiele">关于博客</div>
    <div class="ui divider"></div>
    <div>此博客是本人接触vue3、nodejs、mysql、云服务器等写
        的第一个小项目,主要用来记录学习,这是第一版,有无数个做的不满意的地方。<br>
        目前此博客部署在腾讯云
    </div>
</div>
</div>
</template>
<script lang="ts">

</script>
<style lang="less" scoped>

.tiele{
    color: #000;
    font-size: 22px;
}
@media only screen and (max-width: 450px){
.ui.raised.very.padded.text.container.segment{
    max-width: 400px!important;
    min-width:300px!important;
}
.shouji{
    display: flex;
    justify-content: center;
}
}
</style>
