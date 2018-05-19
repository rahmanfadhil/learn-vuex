import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    posts: [
      { title: 'Hello World', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit' },
      { title: 'Hello World', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit' },
      { title: 'Hello World', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit' },
      { title: 'Hello World', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit' },
      { title: 'Hello World', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit' }
    ]
  }
})
