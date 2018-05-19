<template>
  <div>
    <h1>Product List One</h1>
    <ul>
      <li v-for="(post, index) in starredPosts" :key="index">
        <b>{{ post.title }}</b>
        {{ post.body }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'ProductListOne',
  computed: {
    starredPosts() {
      return this.$store.getters.starredPosts
    }
  }
}
</script>
