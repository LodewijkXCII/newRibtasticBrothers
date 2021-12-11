<template>
  <div class="slideshow-container aspect-w-16 aspect-h-9">
    <div
      class="fade aspect-w-16 aspect-h-9"
      v-for="(slide, index) in slides"
      :key="slide.index"
    >
      <img
        v-show="slideIndex == index"
        :src="slide.url"
        :alt="slide.caption"
        class="mySlide__img object-cover"
      />
    </div>
    <a class="prev" @click="plusSlides(-1)">&#10094;</a>
    <a class="next" @click="plusSlides(1)">&#10095;</a>
  </div>
</template>

<script>
export default {
  props: {
    slides: Array,
  },
  data() {
    return {
      slideIndex: 1,
    }
  },
  computed: {},
  methods: {
    // Next/previous controls
    plusSlides(n) {
      this.showSlides((this.slideIndex += n))
    },

    // Thumbnail image controls
    currentSlide(n) {
      this.showSlides((this.slideIndex = n))
    },
    showSlides(n) {
      console.log(n)
      if (n >= this.slides.length) {
        return (this.slideIndex = 1)
      }
      if (n < 1) {
        return (this.slideIndex = this.slides.length)
      }
      this.slideIndex = n
    },
  },
}
</script>

<style lang="scss">
.slideshow-container {
  position: relative;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  display: flex;
  align-items: center;
}
.next {
  justify-content: flex-end;
  border-radius: 3px 0 0 3px;
  pointer-events: none;
}
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>
