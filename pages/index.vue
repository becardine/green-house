<template>
  <div>
    <Nav />
    <HomeCarousel :sale_items="sale_items" />
    <br />
    <br />
    <v-container>
      <h1 class="text-md-h4 text-h6">Check these out</h1>
      <br />
      <ProductSlider :products="products" />
      <br><br><br>
      <Newsletter />
    </v-container>
    <TheFooter />
    <ScrollTop />
  </div>
</template>

<script>
export default {
  async created() {
    this.products = await this.$content("products").fetch();
    this.sale_items = await this.$content("products")
      .where({ onSale: true })
      .fetch();
  },
  data() {
    return {
      products: null,
      sale_items: null,
    };
  },
};
</script>

<style>
</style>