<template>
  <section>
    <div class="container" id="top">
      <h1>{{ catering.name }}</h1>
      <h2>{{ catering.subTitle }}</h2>
      <div class="wrapper-1-2">
        <FormCatering :option="catering.name" />
        <div class="textInfo">
          <p>{{ catering.description }}</p>
          <n-link to="/catering" class="btn btn-inline">Terug naar het overzicht</n-link>
          <p>
            Prijs vanaf:
            <strong>&euro;{{catering.price}}</strong> per persoon.
          </p>
        </div>
      </div>
    </div>
    <SmallGallery :images="catering.images" />
    <!-- <div class="cateringImages">
      <img
        v-for="image in catering.images"
        :key="image.id"
        :src="image.formats.small.url"
        class="cateringImages__image"
        :alt="image.name"
      />
    </div>-->
    <div class="container">
      <h4>
        Geintresseerd?
        <a href="#top">Vraag een offerte op!</a>
      </h4>
    </div>
  </section>
</template>

<script>
import axios from '@nuxtjs/axios'
import FormCatering from '@/components/FormCatering.vue'
import SmallGallery from '@/components/SmallGallery.vue'

export default {
	head: {
		title: 'Overheerlijke smaak | The Ribtastic Brothers',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Home page description',
			},
		],
		noscript: [{ innerHTML: 'Body No Scripts', body: true }],
	},
	components: {
		FormCatering,
		SmallGallery,
	},
	data() {
		return {}
	},
	asyncData(context) {
		return context.app.$axios
			.get(
				`https://ribtasticbrothers.herokuapp.com/catering-options?name=${context.params.title}`
			)
			.then((res) => {
				return {
					catering: {
						id: res.data[0].id,
						name: res.data[0].name,
						subTitle: res.data[0].subTitle,
						price: res.data[0].price,
						description: res.data[0].description,
						images: res.data[0].images,
						cateringProducts: res.data[0].catering_products,
					},
				}
			})
	},
}
</script>

<style lang="scss">
.productList {
	display: grid;
	grid-gap: 2.5rem;
	margin: 1em;
	&__Card {
		position: relative;

		&--img img {
			position: absolute;
			width: 100%;
			height: 100%;
			-o-object-fit: cover;
			object-fit: cover;
			z-index: -1;
		}

		&--text {
			padding: 0.5rem;
			opacity: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			&:hover {
				transition: opacity 0.5s;
				opacity: 100%;
				background: rgba($color: #000000, $alpha: 0.8);
			}
		}
	}
}

@media (min-width: 650px) {
	.productList {
		grid-template-columns: repeat(3, 1fr);
	}
}
</style>
