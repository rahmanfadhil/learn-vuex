<template>
  <div id="app">
    <h1>Hello World</h1>
    <ProductListOne></ProductListOne>
    <ProductListTwo></ProductListTwo>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'

export default {
  name: 'app',
  components: { ProductListOne, ProductListTwo },
  data: () => ({

  })
}
</script>
