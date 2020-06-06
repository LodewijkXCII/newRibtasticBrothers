<template>
  <div class="imgHeader">
    <img
      :src="require(`@/assets/img/${selectedImage.src}`)"
      :alt="selectedImage.alt"
      class="imgHeader__image"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: 'catering_foodtruck_spareribs-min.jpg', alt: 'header1' },
        { src: 'header_1.jpg', alt: 'header2' },
        { src: 'header_2.jpg', alt: 'header3' },
        { src: 'header_3.jpg', alt: 'header4' }
      ],
      selectedImage: null
    }
  },
  methods: {
    randomItem(items) {
      return items[Math.floor(Math.random() * items.length)]
    }
  },
  created() {
    this.selectedImage = this.randomItem(this.images)
  }
}
</script>

<style></style>
