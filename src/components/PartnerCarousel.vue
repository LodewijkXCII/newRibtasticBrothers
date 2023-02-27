<template>
  <h2>PartnerCarousel</h2>
  <div class="carousel--container">
    <!-- <VueSlickCarousel
      v-bind="settings"
      v-if="$slots.default && $slots.default.length"
    >
      <div
        v-for="(partner, index) in partners"
        :key="partner.id"
        class="carousel--item"
      >
        
      </div>
    </VueSlickCarousel> -->
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <!-- <swiper-slide
        v-for="(partner, index) in partners"
        :key="partner.id"
        class="carousel--item"
        ><span>{{ partner.logo.url }}</span></swiper-slide
      > -->
    </swiper>
  </div>
</template>

<script>
import axios from "axios";

// import VueSlickCarousel from "vue-slick-carousel";

// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper/vue";

// Import Swiper styles

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },

  // data() {
  //   return {
  //     partners: [],
  //     onSwiper,
  //     onSlideChange,
  //   };
  // },
  // async created() {
  //   const { data } = await axios.get(
  //     "https://admin.ribtasticbrothers.nl/catering-partners?_sort=bedrijf"
  //   );
  //   console.log(data);
  //   this.partners = data;

  //   const swiper = new Swiper();
  // },
  // async mounted() {
  //   const onSwiper = (swiper) => {
  //     console.log(swiper);
  //   };
  //   const onSlideChange = () => {
  //     console.log("slide change");
  //   };
  // },
};
</script>

<style lang="scss">
// .carousel {
//   &--container {
//     display: flex;
//   }

//   &--item {
//     width: 500px;
//     background: lightgray;
//     padding: 0.75rem;

//     img {
//       width: 100%;
//     }
//   }
// }
</style>
