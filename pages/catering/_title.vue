<template>
  <div class="cateringTitle">
    <section class="cateringTitle__left">
      <img :src="catering.images[0].url" alt="" />
    </section>
    <section class="cateringTitle__right">
      <h1>{{ catering.name }}</h1>
      <div class="cateringTitle__right--container">
        <div class="cateringTitle__right--container--text" id="top">
          <h2>{{ catering.subTitle }}</h2>

          <!-- <p>{{ catering.description }}</p> -->
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            veniam ab non asperiores saepe. Blanditiis, non cumque iure vero
            nulla veniam quos ex laborum rerum asperiores. Fugit, dicta in
            incidunt inventore hic aspernatur impedit atque similique nemo
            suscipit aliquam consequuntur, aut velit. Optio nostrum earum totam
            est, dolorem placeat officiis!
          </p>
          <n-link to="/catering" class="btn btn-inline"
            >Terug naar het overzicht</n-link
          >
          <p>
            Prijs vanaf:
            <strong>&euro;{{ catering.price }}</strong> per persoon.
          </p>
        </div>
        <FormCatering
          :option="catering.name"
          class="cateringTitle__right--container--form"
        />
      </div>
    </section>
  </div>
</template>

<script>
import axios from '@nuxtjs/axios'
import FormCatering from '@/components/FormCatering.vue'
import SmallGallery from '@/components/SmallGallery.vue'

export default {
  head: {
    title: 'Overheerlijke smaak | The Ribtastic Brothers',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description',
      },
    ],
    noscript: [{ innerHTML: 'Body No Scripts', body: true }],
  },
  components: {
    FormCatering,
    SmallGallery,
  },
  data() {
    return {}
  },
  asyncData(context) {
    return context.app.$axios
      .get(
        `https://ribtasticbrothers.herokuapp.com/catering-options?name=${context.params.title}`
      )
      .then((res) => {
        return {
          catering: {
            id: res.data[0].id,
            name: res.data[0].name,
            subTitle: res.data[0].subTitle,
            price: res.data[0].price,
            description: res.data[0].description,
            images: res.data[0].images,
            cateringProducts: res.data[0].catering_products,
          },
        }
      })
  },
}
</script>

<style lang="scss">
.cateringTitle {
  display: grid;
  grid-template-columns: 45% 55%;
  height: 100vh;
  width: 100%;

  &__left {
    overflow: hidden;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: auto;
      min-height: 100%;
      width: 100%;
    }
  }

  &__right {
    margin: auto 5rem;

    &--container {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;

      &--text {
        max-width: 400px;
        align-self: center;
      }
    }
  }
}

.productList {
  display: grid;
  grid-gap: 2.5rem;
  margin: 1em;
  &__Card {
    position: relative;

    &--img img {
      position: absolute;
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      z-index: -1;
    }

    &--text {
      padding: 0.5rem;
      opacity: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &:hover {
        transition: opacity 0.5s;
        opacity: 100%;
        background: rgba($color: #000000, $alpha: 0.8);
      }
    }
  }
}

@media (min-width: 650px) {
  .productList {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
