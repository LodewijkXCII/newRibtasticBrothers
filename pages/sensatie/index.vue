<template>
  <div>
    <div class="container-fluid">
      <h1>Bakfiets</h1>
      <h2>Ons nobel ros</h2>
      <p>Wat krijg je als je een BBQ, mobiel en opvallend wilt maken?</p>
      <p>Precies die vraag hing constant boven ons hoofd gedurende de ontwerpfase. Na flink wat geschrapte ontwerpen en uren buffelen kwam het idee om een BBQ bakfiets te bouwen. Een voertuig groot genoeg om alle benodigde materialen mee te nemen, en klein genoeg om te kunnen flaneren over de boulevard. Kortom een perfecte mix tussen onze authenticiteit en mobiliteit, zodat iedereen kennis kan maken met de Ribtastic Brothers.</p>
      <p>De fiets is vanaf scratch zelf ontworpen en gebouwd.</p>
      <p>Have you ever seen something like this?</p>
    </div>
    <div class="container">
      <h2>Opbouw van de Bakfiets</h2>
      <div class="wrapper">
        <img
          src="https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/Tjerk1--0048_479905eee4.png"
          alt
        />
        <div class="wrapper__text">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi molestias nihil nostrum. Amet natus sit veritatis! Veritatis maiores culpa dicta pariatur, consectetur inventore, aut unde id earum, asperiores perferendis obcaecati.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint, natus eum dignissimos, sed modi similique saepe doloremque accusantium sapiente dolore a, delectus iste suscipit atque. Consectetur aliquid eligendi, eos officia nam numquam laboriosam repellendus totam voluptatem sit ducimus tempora quos facere! Enim sint aliquam natus quas sapiente est doloremque.</p>
        </div>
      </div>
    </div>

    <BouwProces />
    <div class="btn btn-line">Catering</div>
    <!-- <SmallGallery :images="images" /> -->
  </div>
</template>

<script>
import SmallGallery from '@/components/SmallGallery.vue'
import BouwProces from '@/components/BouwProces.vue'

export default {
	name: 'foodtruck',
	components: {
		BouwProces,
		SmallGallery
	},
	data() {
		return {
			images: [
				{ src: 'catering_bbq_4.jpg', alt: 'header1' },
				{ src: 'catering_bbq_1.jpg', alt: 'catering_bbq2' },
				{ src: 'catering_bbq_2.jpg', alt: 'catering_bbq3' },
				{ src: 'catering_bbq_3.jpg', alt: 'catering_bbq4' }
			]
		}
	}
}
</script>
