import { createStore } from 'vuex'
import { ArticleD } from '@/api/article'
export default createStore({
  state: {
    articlesd:[]
  },
  getters: {
    //把对应的id对应上返回去
    
  },
  mutations: {
    articles(state,data){
      state.articlesd = data
    }
  },
  actions: {
    articles(ctx){
      ArticleD().then(data => {
        ctx.commit('articles',data.data)
      })
    }
  },
  modules: {
    
  }
})
