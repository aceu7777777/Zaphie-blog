<template>
<div>
    <div class="padding">
    <div class="ui link cards">
        <div class="card">
            <div class="image">
            <img src="@/assets/touxiang.png">
            </div>
            <div class="content">
            <div class="header">Zaphie</div>
            <div class="meta">
                <a>真的菜</a>
            </div>
            <div class="description">
                今天过的比昨天好一点,这就是希望
            </div>
            </div>
            <div class="content">
                <div class="images">
                    <a href="https://github.com/aceu7777777" target="_blank" class="ui avatar image">
                        <img src="@/assets/tubiao/github.png" alt="" >
                    </a>
                    <a href="https://space.bilibili.com/30902431?spm_id_from=333.1007.0.0" target="_blank" class="ui avatar image">
                        <img src="@/assets/tubiao/b站.png" alt="">
                    </a>
                    <a class="ui avatar image"
                    @click="botton">
                    <a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=IRAYFBEQFxITERRhUFAPQk5M" style="text-decoration:none;">
                    </a>
                        <img src="@/assets/tubiao/wx.png" alt="">
                    </a>
                    <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=IRAYFBEQFxITERRhUFAPQk5M" target="_blank" class="ui avatar image">
                        <img src="@/assets/tubiao/邮箱.png" alt="">
                    </a>
                </div>
            </div>
            <div class="extra description">
            <span><i class="wheelchair icon"></i>技术栈</span>
            </div>
            <div class="wenzi">
                本人精通Html,Css,JavaScript,Less,Vue3全家
                桶,Vue2全家桶,TypeScript,nodeJs,
                Mysql,Echarts
                的单词拼写!!!</div>
            <div class="extra description">
            <span><i class="smile icon"></i>幻想时间</span>
            </div>
            <div class="wenzi">
                保持上进 开心就好
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script >
export default {
    setup(){
        const botton =() =>{
            window.scrollTo(0, document.body.scrollHeight)
        }
        return {
            botton
        }
    }
}
</script>
<style lang="less" scoped>
.wenzi{
    padding-left: 10px;
}

a{
    text-decoration: none;
    color: #000;
}
.images{
    display: flex;
    justify-content: space-around;
}
</style>
