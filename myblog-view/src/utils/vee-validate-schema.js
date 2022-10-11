//定义校验规则提供给vee-validate组件使用
export default {
    //校验account
    name (value) {
        //value是将来使用该规则的表单元素的值
        //1.不能为空  2.英文数字英文加数字中文
        if (!value) return '昵称不能为空'
        return true
    },
    email (value) {
        //不可为空
        if (!value) return '邮箱不能为空'
        if (!/^\w{1,18}@[a-z0-9]+(\.[a-z]{2,4})+$/i.test(value)) return '请输入正确的邮箱格式'
        return true
    },
}