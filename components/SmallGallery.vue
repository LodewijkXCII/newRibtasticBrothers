<template>
  <div class="smallGallery">
    <div v-for="image in images" :key="image.index">
      <!-- <img :src="require(`@/assets/img/${image.src}`)" :alt="image.alt" /> -->
      <img :src="image.formats.small.url" :alt="image.alt" />
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			images: this.$attrs.images
		}
	}
}
</script>

<style lang="scss">
.smallGallery {
	margin: 1.8em 0;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 0.3em;
}

@media (min-width: 650px) {
	.smallGallery {
		grid-template-columns: repeat(4, 1fr);
	}
}
</style>
