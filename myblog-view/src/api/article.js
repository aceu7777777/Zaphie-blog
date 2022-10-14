import request from '@/utils/request'
//获取所有文章
export const Allarticle = () => {
    return request ({
        url:'api/article',
        method: 'get',
    })
}
//获取所有文章
export const Good = (id) => {
    return request ({
        url:'api/good',
        method: 'post',
        data:{
        id
    }        
})
}
//分页
export const Page = (page) => {
    return request ({
        url:'api/page',
        method: 'post',
        data:{
        page
    }  
})
}

//全部评论
export const Allcomments = () => {
    return request ({
        url:'api/allcomments',
        method: 'get',
})
}

//发送一级评论
export const Addcomments = (name, email, content, time) => {
    return request ({
        url:'api/addcomments',
        method: 'post',
        data:{
            name,
            email,
            content,
            time
        }
})
}

//评论分页
export const CPage = (page) => {
    return request ({
        url:'api/cpage',
        method: 'post',
        data:{
        page
    }  
})
}

//二级评论
export const addLowcomments = (id, reply) => {
    return request ({
        url:'/api/addLowcomments',
        method: 'post',
        data:{
            id,
            reply
        }
    })
}
//文章内容
export const ArticleD = () => {
    return request ({
        url:'/api/articleD',
        method:'get',
    })
}   

//我的状态
export const Mystate = () => {
    return request ({
        url:'/api/state',
        method:'get',
})
}

//我的笔记
export const Mynotes = () => {
    return request ({
        url:'/api/notes',
        method:'get',
})
}

//搜索
export const Search = (key) => {
    return request ({
        url:'/api/search',
        method:'post',
        data:{
            key
        }
})
}

