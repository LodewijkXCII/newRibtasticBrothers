<template>
  <div class="smallGallery">
    <img src="@/assets/img/catering_bbq_1.jpg" alt="Catering_1" />
    <img src="@/assets/img/catering_bbq_2.jpg" alt="Catering_2" />
    <img src="@/assets/img/catering_bbq_3.jpg" alt="Catering_3" />
    <img src="@/assets/img/catering_bbq_4.jpg" alt="Catering_4" />
  </div>
</template>

<script>
export default {}
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
