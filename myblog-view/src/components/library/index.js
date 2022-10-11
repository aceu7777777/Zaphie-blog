//这里是插件的入口文件 专门把我们写的插件在app上进行扩展
import Blogmessage from './blog-message.vue'

export default {
    install(app){
        app.component(Blogmessage.name,Blogmessage)
        //defineDirective(app)
    }
}


//随机头像自定义指令
//随机取头像的函数
export const changeHead = () => {
    const Head = [
    'https://img1.baidu.com/it/u=1792352219,771762329&fm=253&fmt=auto&app=138&f=JPEG?w=501&h=500',
    'https://img2.baidu.com/it/u=1328088209,1168718900&fm=253&fmt=auto&app=138&f=JPG?w=499&h=499',
    'https://img1.baidu.com/it/u=268870003,2260069710&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    'https://img1.baidu.com/it/u=1545085457,2065214244&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    'https://img2.baidu.com/it/u=2772875713,2693698850&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    'https://img2.baidu.com/it/u=2831009362,3855598942&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
]
    let src = Head[Math.floor(Math.random()*Head.length)]
    return src
}

