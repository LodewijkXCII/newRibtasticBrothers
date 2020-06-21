<template>
  <div class="products">
    <div class="productCard" v-for="product in products" :key="product.id">
      <div class="productCard__title">
        <h4>{{ product.name }}</h4>
      </div>
      <div class="productCard__discription">
        <p>
          {{ product.discription }}
        </p>
      </div>
      <div class="productCard__image">
        <img
          :src="`http://localhost:1337${product.image.url}`"
          :alt="product.image.alternativeText"
        />
      </div>
      <div class="productCard__price">&euro;{{ product.price }}</div>
      <div class="productCard__btn">
        <a class="btn btn-primary">Voeg toe</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@nuxtjs/axios'
export default {
  data() {
    return {
      products: []
    }
  },
  async fetch() {
    const { data } = await this.$axios.get('http://localhost:1337/products')
    this.products = data
  }
}
</script>

<style lang="scss">
.products {
  display: grid;
  grid-gap: 1.5rem;
  margin-top: 3rem;

  .productCard {
    background: $off-black-color;
    border-radius: 0.8rem;
    padding: 1.5rem;

    &__title {
      text-transform: uppercase;
    }

    &__discription p {
      font-size: 1rem;
    }

    &__image {
      margin: 1.5rem 0;
    }

    &__price {
      padding: 0.75rem 0;
      padding-bottom: 0;
      font-weight: bold;
      color: $primary-color;
      font-size: 1.5em;
      text-align: center;
    }

    &__btn {
      .btn-primary {
        margin: 1em auto 0;
        max-width: 100%;
      }
    }
  }
}

@media (min-width: 650px) {
  .products {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
