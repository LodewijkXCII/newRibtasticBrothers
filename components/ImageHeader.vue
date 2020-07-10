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

<style lang="scss" scoped>
.imgHeader {
	position: relative;
	height: 40vh;
	overflow: hidden;
	background: rgba(0, 0, 0, 0.2);

	.imgHeader__image {
		position: absolute;
		z-index: -10;
		left: -70%;
		width: auto;
		height: 100%;
		overflow: hidden;
		background-size: cover;
	}
	@media (min-width: 650px) {
		.imgHeader__image {
			height: auto;
			top: -35%;
			left: 0;
		}
	}
}
</style>
