import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    posts: [
      {
        title: 'Hello World',
        star: true,
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
      },
      {
        title: 'Hello World',
        star: true,
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
      },
      {
        title: 'Hello World',
        star: false,
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
      },
      {
        title: 'Hello World',
        star: false,
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
      },
    ]
  },
  mutations: {
    changeTitle: state => {
      state.posts.map(item => item.title = 'Hello Vuex')
    }
  },
  getters: {
    starredPosts: state => (
      state.posts.filter((item) => item.star === true)
    )
  }
})
