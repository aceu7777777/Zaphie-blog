<template>
<div class="control">
    <div class="ui comments">
    <h3 class="ui dividing header">评论区</h3>
    <div class="comment" v-for="item in Currentcomments" :key="item.id">
        <a class="avatar">
        <img v-comp src="">
        </a>
        <div class="content">
        <a class="author">{{item.name}}</a>
        <div class="metadata">
            <span class="date">{{item.time}}</span>
        </div>
        <div class="text">
            <p>{{item.content}}</p>
        </div>
        <div class="actions">
            <a class="reply" @click="secondaryComments(item)">回复</a>
        </div>
        </div>
        <div v-if="item.reply">
        <div class="comments"  v-for="obj in item.reply" :key="obj.time">
        <div class="comment">
            <a class="avatar">
            <img v-comp src="">
            </a>
            <div class="content">
            <a class="author">{{obj.replyname}}</a>
            <div class="metadata">
                <span class="date">{{obj.replytime}}</span>
            </div>
            <div class="text"><span class="replyname">@{{obj.name}}:</span><span>{{obj.replycontent}}</span></div>
            <div class="actions">

            </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    <Bpage 
    :total="total" :pageSize="3" :currentPage="page"
    @current-page="changePagerFn"/>
    <Form class="ui reply form" ref="formCom" :validation-schema="schema" v-slot="{errors}" autocomplete="off" 
    v-if="!isLowComment">
        <div class="field">
            <textarea placeholder='请文明发言(0-50字以内)' minlength="1" maxlength="50"
            v-model="request.content"></textarea>
        </div>
        <div class="ui left icon input" id="name">
            <Field :class="{error:errors.name}" v-model="request.name" name="name"
            type="text" placeholder="输入您的昵称" />
            <i class="user icon"></i>
        </div>
        <div class="error" v-if="errors.name">
                {{errors.name}}
        </div>
        <div class="ui left icon input" id="email">
            <Field :class="{error:errors.email}" v-model="request.email" name="email"
            type="text" placeholder="输入您的邮箱" />
            <i class="telegram plane icon"></i>
        </div>
        <div class="error" v-if="errors.email">
                {{errors.email}}
        </div>
        <div class="ui blue labeled submit icon button" @click="submit" v-if="!dis">
        <i class="icon edit"></i> 发表评论
        </div>
    </Form>
    <!-- 二级回复 -->
    <Form class="ui reply form" ref="formCom2" :validation-schema="schema" v-slot="{errors}" autocomplete="off"
    v-else>
        <div class="button" @click="backoff"><button class="ui blue basic button">退出回复</button></div>
        <div class="field">
            <textarea placeholder='请文明发言(0-50字以内)' minlength="1" maxlength="50"
            v-model="replyrequest.replycontent"></textarea>
        </div>
        <div class="ui left icon input" id="name">
            <Field :class="{error:errors.name}" v-model="replyrequest.replyname" name="name"
            type="text" placeholder="输入您的昵称" />
            <i class="user icon"></i>
        </div>
        <div class="error" v-if="errors.name">
                {{errors.name}}
        </div>
        <div class="ui left icon input" id="email">
            <Field :class="{error:errors.email}" v-model="replyrequest.replyemail" name="email"
            type="text" placeholder="输入您的邮箱" />
            <i class="telegram plane icon"></i>
        </div>
        <div class="error" v-if="errors.email">
                {{errors.email}}
        </div>
        <div class="ui blue labeled submit icon button" @click="submitLow" v-if="!disl">
        <i class="icon edit"></i> 发表回复
        </div>
    </Form>
    </div>
</div>
</template>
<script >
import dayjs from 'dayjs'
import Message from '@/components/library/Message'
import { Allcomments, Addcomments, CPage, addLowcomments } from "@/api/article";
import { reactive,ref,computed,watch,toRaw,nextTick} from 'vue'
import { Form, Field } from 'vee-validate'
import schema from '@/utils/vee-validate-schema'
import Bpage from '@/components/blog-page.vue'
export default {
    components:{ Form, Field, Bpage},
    setup(){
        const comments = ref([])
        //是否有回复 显示不显示二级回复区域   等着请求数据回来就换数据的那控制 item.什么什么的
        const reply = false
        //准备回复发请求要用到的数据
        const request = reactive({
            name:'',
            email:'',
            content:'',
            time:''
        })
        //发送的文本的默认值
        const placeholder = `请文明发言(0-50字以内)`
        //需要校验name email 
        //校验对象  schema校验函数写在外面了
        const mySchema = {
            name:schema.name,
            email:schema.email
        }
        //拿到表单
        const formCom = ref(null)
        //每次只能发一次评论和回复 发完就不让发了
        const dis = ref(false)
        const disl = ref(false)
        //点击提交按钮要做的事情
        const submit = async() =>{
            //整体校验
            const valid = await formCom.value.validate()
            //验证成功后
            if(valid === true && request.content != ''){
                //获取当前时间
                const nowtime = dayjs(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss')
                //给要请求的对象添加时间
                request.time = nowtime
                //发请求
                Addcomments(request.name,request.email,request.content,request.time)
                //发完这个请求 过一会再请求全部评论
                setTimeout(() => {
                    CPage(1).then(data => {
                    Currentcomments.value = data.data.data
                    })
                    //这里改到1000就解决了    155bug
                }, 1500);
                page.value = 1
                Message({ type: 'success', text: '成功留下足迹！' })
                dis.value = true
            }else{
                //校验失败
                Message({ type: 'error', text: '发送失败' })
            }
        }

        //定义当前页码
        const page = ref(1)
        //评论分页的东西
        let total = computed(() => {
            return comments.value.length
        })
        //定义当前页里的数据
        const Currentcomments = ref([])
        //实现分页切换 并且回到正确位置
        const changePagerFn = (newPage) =>{
            page.value = newPage
        }
        //检测当前页码变化 请求数据铺数据
        watch(page, async () => {
            const data = await CPage(page.value)
            Currentcomments.value = data.data.data
        })
        //开启的时候调用一下第一页 不至于出现空页面
        CPage(1).then(data => {
            Currentcomments.value = data.data.data
        })    

        //开局申请数据
        Allcomments().then(data => {
            comments.value = data.data.data
        //后端做了倒序 这里就不做了
        })  



        const formCom2 = ref(null)
        //二级回复相关
        //控制是一级回复还是二级回复
        const isLowComment = ref(false) 
        //二级回复需要准备的数据  和上一个请求操作的表一样
        const replyrequest = reactive({
            name:'', //被回复者的名字 丢在回复按钮操作 点击一级回复和二级回复还不一样处理 拿到item.
            replyname:'', //replyname replyemail replyecontent绑定回复表单数据
            replytime:'',
            replyemail:'',
            replycontent:'',
        })
        const replys = ref([])//二级回复全部内容  起到中间人作用 连接 secondaryComments和submitLow两个方法 
            //因为发回复方法它不会携带参数 也就没有reply数组 所以要中间人
        const ids = ref(null)//同上
        const secondaryComments = (item) => {
            isLowComment.value = true
            //点完回复按钮这里 把数据要发请求的数据整理 name 
            replyrequest.name = item.name
            replys.value = item.reply
            ids.value = item.id
        }

        //发表二级回复方法 
        const submitLow = async() =>{
            //整体校验
            const valid = await formCom2.value.validate()
            //验证成功后
            if(valid === true && replyrequest.replyecontent != ''){
                //获取当前时间
                const time = dayjs(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss')
                replyrequest.replytime = time
                //准备好格式 还有数据再发请求 Currentreplys才是要发请求的数据
                //const Currentreplys = ref([])
                replys.value.push(toRaw(replyrequest))
                const treplys=toRaw(replys.value)
                nextTick(()=>{
                    //重大bug
                    //1.这里必须异步 得让ids 和 treply 有了数据 才能搞发请求
                    //2.传值不对 后台要求json的形式 要转成字符串 不能串数组
                    //3.内容丢失 内容丢失是内容绑定错了猪鼻
                    addLowcomments(ids.value,JSON.stringify(treplys)).then(data => {
                    console.log(data);
                })
                })
                Message({ type: 'success', text: '成功回复' })
                disl.value = true
            }else{
                //校验失败
                Message({ type: 'error', text: '发送回复失败' })
            }

        }
        //回复二级回复的方法
        //实在想不起来思路 啊
        // const submitLower = async() =>{
        //     //整体校验
        //     const valid = await formCom2.value.validate()
        //     //验证成功后
        //     if(valid === true && replyrequest.replyecontent != ''){
        //         //获取当前时间
        //         const time = dayjs(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss')
        //         console.log('ok');
        //     }
        // }
        //退出回复
        const backoff = () => {
            isLowComment.value = false
            console.log(toRaw(replyrequest));
        }
        return {
            request,
            reply,
            replyrequest,
            comments,
            formCom,
            placeholder,
            schema: mySchema,
            submit,
            total,
            page,
            changePagerFn,
            Currentcomments,
            secondaryComments,
            isLowComment,
            submitLow,
            backoff,
            formCom2,
            dis,
            disl
        }
    }
}

</script>
<style lang="less" scoped>
.ui.comments{
    width: 1400px;
    padding-bottom: 30px;
}
.control{
    padding-top: 20px;
    display: flex;
    justify-content: center;
}
.ui.left.icon.input{
    padding-right: 45px;

}
#name{
    position: relative;
}
#email{
    position: relative;
}
.replyname{
    color: rgb(0, 0, 0);
    font-weight: 600;
}
.error{
    font-size: 12px;
    color: red;

}
.button{
    padding-bottom: 10px;
}
@media only screen and (max-width: 750px){
    .control{
        width: 360px;
    }
}
</style>
