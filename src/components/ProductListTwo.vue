<template>
  <div>
    <h1>Product List Two</h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <b>{{ post.title }}</b>
        {{ post.body }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'ProductListTwo',
  computed: {
    posts: function() {
      return this.$store.state.posts
    }
  }
}
</script>
