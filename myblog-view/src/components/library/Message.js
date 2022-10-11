import { createVNode,render } from "vue";
import Blogmessage from './blog-message.vue'
//准备dom容器
const div = document.createElement('div')
//div中加属性
div.setAttribute('class', 'blog-message-container')
//添加到dom树中
document.body.appendChild(div)

//定时器标识
let timer = null

//写函数
export default ({ type, text }) => {
    // 实现：根据xtx-message.vue渲染消息提示
    // 1. 导入组件
    // 2. 根据组件创建虚拟节点
    //就寄吧是h 
    const vnode = createVNode(Blogmessage, { type, text })
    // 3. 准备一个DOM容器
    // 4. 把虚拟节点渲染DOM容器中
    render(vnode, div)
    // 5. 开启定时，移出DOM容器内容
    //习惯：定时器之前要清除一下先
    clearTimeout(timer)
    timer = setTimeout(() => {
        render(null, div)
    }, 3000)
}