<template>
  <div class="cateringWrapper">
    <div class="cateringCard" v-for="catering in catering" :key="catering">
      <h2 class="cateringCard__title">{{ catering.title }}</h2>
      <p class="cateringCard__text">{{ catering.price }}</p>
      <ul>
        <li v-for="dish in dishes" :key="dish">
          {{ dish.title }}
        </li>
      </ul>
      <a href="#" class="btn btn-primary">Meer info</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dishes: [
        {
          title: 'Varkens Spareribs'
        },
        {
          title: 'Broodje Ribtastic'
        },
        {
          title: 'Rustieke Frieten'
        },
        {
          title: 'Brood met smeersels'
        }
      ],
      catering: [
        {
          title: 'Just Meat',
          price: 20
        },
        {
          title: 'Meat with Fries',
          price: 22.5
        },
        {
          title: 'All In',
          price: 25
        },
        {
          title: 'Catering op maat'
        }
      ]
    }
  }
}
</script>
