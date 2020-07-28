<template>
  <div class="bouwProces container-fluid" style="padding-top: 0">
    <h1>Bouw van de fiets</h1>
    <div class="overview">
      <div class="overview__element" v-for="proces in proces" :key="proces.index">
        <div class="overview__element--text">
          <p>{{proces.text}}</p>
          <small>{{proces.date}}</small>
        </div>
        <div class="overview__element--image">
          <img :src="proces.image" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			proces: [
				{
					date: '2019',
					image:
						'https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/Tjerk1--0048_479905eee4.png',
					text:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates repudiandae iusto necessitatibus excepturi quos voluptatum veniam possimus minus deleniti maxime pariatur rerum dignissimos accusantium enim, odit, laboriosam inventore placeat fugiat, aperiam nisi! Dolor quae sed facilis, neque possimus alias minima!',
				},
				{
					date: '2019',
					image:
						'https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/Tjerk1--0048_479905eee4.png',
					text:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates repudiandae iusto necessitatibus excepturi quos voluptatum veniam possimus minus deleniti maxime pariatur rerum dignissimos accusantium enim, odit, laboriosam inventore placeat fugiat, aperiam nisi! Dolor quae sed facilis, neque possimus alias minima!',
				},
				{
					date: '2019',
					image:
						'https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/Tjerk1--0048_479905eee4.png',
					text:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates repudiandae iusto necessitatibus excepturi quos voluptatum veniam possimus minus deleniti maxime pariatur rerum dignissimos accusantium enim, odit, laboriosam inventore placeat fugiat, aperiam nisi! Dolor quae sed facilis, neque possimus alias minima!',
				},
				{
					date: '2019',
					image:
						'https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/Tjerk1--0048_479905eee4.png',
					text:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates repudiandae iusto necessitatibus excepturi quos voluptatum veniam possimus minus deleniti maxime pariatur rerum dignissimos accusantium enim, odit, laboriosam inventore placeat fugiat, aperiam nisi! Dolor quae sed facilis, neque possimus alias minima!',
				},
			],
		}
	},
}
</script>

<style lang="scss">
.overview {
	&__element {
		margin: 3rem 0;
		display: grid;
		grid-template-columns: 2fr 3fr;
		grid-gap: 1.5rem;
		gap: 2.5rem;

		&:nth-child(even) {
			grid-template-columns: 3fr 2fr;
			img {
				grid-column-start: 2;
			}

			.overview__element--text {
				grid-column-start: 2;
				grid-row-start: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
		}

		&--text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: left;
		}
		&--image {
			filter: grayscale(100%);
			&:hover {
				transform: scale(1.05);
				transition: 0.5s;
			}
		}
	}
}
</style>