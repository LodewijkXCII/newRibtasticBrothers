<template>
  <section>
    <ImageHeader />

    <div class="container">
      <h1>{{ catering.name }}</h1>
      <h2>{{ catering.subTitle }}</h2>
      <div class="wrapper-1-2">
        <FormCatering />
        <div class="textInfo">
          <p>{{ catering.description }}</p>
          <n-link to="/catering">Terug naar het overzicht</n-link>
        </div>
      </div>
      <h2>Dit pakket bevat de volgende gerechten:</h2>
      <div class="productList">
        <div
          class="productList__Card"
          v-for="cateringProduct in catering.cateringProducts"
          :key="cateringProduct.id"
        >
          <div class="productList__Card--img">
            <img
              :src="
                `https://ribtasticbrothers.herokuapp.com${cateringProduct.image.formats.small.url}`
              "
              alt=""
            />
          </div>
          <div class="productList__Card--text">
            <h3>{{ cateringProduct.name }}</h3>
            <p>{{ cateringProduct.discription }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '@nuxtjs/axios'
import ImageHeader from '@/components/ImageHeader.vue'
import FormCatering from '@/components/FormCatering.vue'

export default {
  components: {
    ImageHeader,
    FormCatering
  },
  data() {
    return {}
  },
  asyncData(context) {
    return context.app.$axios
      .get(
        `http://localhost:1337/catering-options?name=${context.params.title}`
      )
      .then(res => {
        return {
          catering: {
            id: res.data[0].id,
            name: res.data[0].name,
            subTitle: res.data[0].subTitle,
            price: res.data[0].price,
            description: res.data[0].description,
            cateringProducts: res.data[0].catering_products
          }
        }
      })
  }
}
</script>

<style lang="scss">
.productList {
  display: grid;
  grid-gap: 1em;
  margin: 1em;
}

@media (min-width: 650px) {
  .productList {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
