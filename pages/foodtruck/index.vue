<template>
  <div>
    <div class="container-fluid">
      <h1>Bakfiets</h1>
      <h2>Ons nobel ros</h2>
      <p>Wat krijg je als je een BBQ, mobiel en opvallend wilt maken?</p>
      <p>
        Precies die vraag hing constant boven ons hoofd gedurende de
        ontwerpfase. Na flink wat geschrapte ontwerpen en uren buffelen kwam het
        idee om een BBQ bakfiets te bouwen. Een voertuig groot genoeg om alle
        benodigde materialen mee te nemen, en klein genoeg om te kunnen flaneren
        over de boulevard. Kortom een perfecte mix tussen onze authenticiteit en
        mobiliteit, zodat iedereen kennis kan maken met de Ribtastic Brothers.
      </p>
      <p>De fiets is vanaf scratch zelf ontworpen en gebouwd.</p>
      <p>Have you ever seen something like this?</p>
    </div>
    <SmallGallery />
  </div>
</template>

<script>
import SmallGallery from '@/components/SmallGallery.vue'

export default {
	name: 'foodtruck',
	components: {
		SmallGallery
	}
}
</script>
