<template>
  <div class="container">
    <h2>Bedrijven die je al voor gingen</h2>
    <div class="cateringPartner">
      <div
        v-for="partner in partners"
        :key="partner.id"
        class="cateringPartner__partner"
      >
        <h4 class="cateringPartner__partner--title">{{ partner.Company }}</h4>
        <img
          :src="partner.logo[0].url"
          alt=""
          class="cateringPartner__partner--img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@nuxtjs/axios'

export default {
  data() {
    return {
      partners: [],
    }
  },
  async fetch() {
    const { data } = await this.$axios.get(
      'https://ribtasticbrothers.herokuapp.com/catering-partners'
    )
    const partners = data.forEach((partner) => {
      this.partners.push(partner)
    })
  },
}
</script>

<style lang="scss">
.cateringPartner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  &__partner {
    margin: 1rem;
    position: relative;
    display: flex;

    &--title {
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      margin: auto;
      justify-content: center;
      align-items: center;
      color: white;
      text-transform: uppercase;
      text-align: center;

      &:hover {
        opacity: 1;
        background: rgba(0, 0, 0, 0.8);
        transition: 0.5s ease-in-out;
      }
    }

    &--img {
      max-width: 100px;

      margin: auto;
    }
  }
}

@media (min-width: 650px) {
  .cateringPartner {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
