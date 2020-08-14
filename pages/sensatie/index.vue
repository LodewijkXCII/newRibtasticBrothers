<template>
  <section>
    <ImageHeader v-bind="heading" :image="image" />

    <div class="container-fluid">
      <p>
        Naast smaak is sensatie een belangrijke pijler in onze bedrijfsvoering.
        Wij zijn pas tevreden als het gezelschap lekker heeft kunnen genieten
        van onze BBQ creaties en het feestje is geslaagd. We zetten ons
        enthousiast en volledig in, om bij te kunnen dragen aan het succes. Dat
        merk je aan onze vibe, en onze uitstraling.
      </p>
      <p>
        Over uitstraling gesproken, ons nobel ros. Wat krijg je als je een BBQ,
        mobiel en opvallend wilt maken?
      </p>
      <p>
        Precies die vraag hing constant boven ons hoofd gedurende de
        ontwerpfase. Na flink wat geschrapte ontwerpen en uren buffelen kwam het
        idee om een BBQ bakfiets te bouwen. Een voertuig groot genoeg om alle
        benodigde materialen mee te nemen, en klein genoeg om te kunnen flaneren
        over de boulevard. Kortom een perfecte mix tussen onze authenticiteit en
        mobiliteit, zodat iedereen kennis kan maken met de Ribtastic Brothers.
      </p>
      <p>
        De fiets is vanaf scratch zelf ontworpen en gebouwd.
      </p>
      <p>
        Have you ever seen something like this?
      </p>
    </div>
    <div class="btn btn-line">
      <nuxt-link to="catering">Catering</nuxt-link>
    </div>
    <SmallGallery v-bind:images="images.image[0].images" />
    <BouwProces />
    <nuxt-link to="catering" class="btn btn-line">Catering</nuxt-link>
  </section>
</template>

<script>
import SmallGallery from '@/components/SmallGallery.vue'
import ImageHeader from '@/components/ImageHeader.vue'

import BouwProces from '@/components/BouwProces.vue'

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
  name: 'foodtruck',
  components: {
    BouwProces,
    SmallGallery,
    ImageHeader,
  },
  data() {
    return {
      heading: {
        title: 'Bakfiets',
        subtitle: 'Ons nobel ros',
      },
      image:
        'https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/ribtastic_bbq_bakfiets_catering_0a41a085fd.jpeg',
      images: [
        // {
        // 	src:
        // 		'https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/Pijl_a9cc8e4b3e.png',
        // },
        // {
        // 	src:
        // 		'https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/DSC_0085_d437ce640d.jpeg',
        // },
        // {
        // 	src:
        // 		'https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/DSC_0072_bf8b01dbda.jpeg',
        // },
      ],
    }
  },
  async fetch() {
    const { data } = await this.$axios.get(
      'https://ribtasticbrothers.herokuapp.com/gallery-images/1'
    )
    this.images = data
  },
}
</script>
