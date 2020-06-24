<template>
  <div class="cateringCard" v-bind:class="{ recommended: recommended }">
    <h2 class="cateringCard__title">{{ name }}</h2>
    <p class="cateringCard__text">&euro;{{ price }} <span>/persoon</span></p>
    <p style="padding-left: 1.5em">BEVAT:</p>
    <ul class="cateringCard__list">
      <li
        v-for="cateringProduct in cateringProducts"
        :key="cateringProduct.id"
        class="cateringCard__list--item"
      >
        {{ cateringProduct.name }}
      </li>
    </ul>
    <nuxt-link
      :to="{ name: 'catering-title', params: { title: encodeURI(name) } }"
      tag="a"
      >Meer info</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    cateringProducts: {
      type: Array,
      required: true
    },
    recommended: {
      type: Boolean,
      required: true
    }
  }
  // data() {
  //   return {
  //     dishes: []
  //   }
  // }
}
</script>

<style lang="scss">
.cateringWrapper {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 2em;
  grid-gap: 2em;

  .cateringCard {
    background: $off-black-color;
    border-radius: 10px;
    position: relative;
    padding: 3em 1em;

    &__title {
      padding-bottom: 0.3em;
      border-bottom: 1px solid #43463f;
    }

    &__text {
      font-size: 1.3em;
      font-weight: 600;
      letter-spacing: -0.5px;
      text-align: center;
      padding-top: 0.5em;

      span {
        font-size: 0.6em;
      }
    }

    &__list {
      padding-left: 0.75em;
      margin: 0 1.5em;
      text-decoration: none;
      list-style-type: none;
      &--item {
        position: relative;
        margin: 0.45em 0;

        &::before {
          content: '';
          position: absolute;
          width: 5px;
          height: 5px;
          left: -15px;
          top: 50%;
          border-radius: 50%;
          background: $off-primary-color;
        }
      }
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 10px;
      left: 0;

      background: $primary-gradient;
    }
    &::before {
      top: 0;
      border-radius: 10px 10px 0 0;
    }
    &::after {
      bottom: 0;
      border-radius: 0 0 10px 10px;
    }
    &.recommended::before {
      height: 35px;
      content: 'Meest Gekozen!';
      align-items: center;
      display: flex;
      justify-content: center;
      text-transform: uppercase;
      font-weight: 900;
      font-size: 0.8em;
    }
    a {
      position: absolute;
      bottom: 20px;
      left: 0;
      text-align: center;
      width: 100%;
    }
  }
}

@media (min-width: 650px) {
  .cateringWrapper {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;
  }
}
</style>
