<template>
  <div>
    <div class="container-fluid">
      <h1>Samen</h1>
      <h2>“May you always be surrounded by good friends and awesome BBQ”</h2>
      <p>Het geheim van lekker vlees zit voor een groot gedeelte in de voorbereiding en de magie van marinade. Ons vlees wordt daarom met een overvloed van marinade op een ambachtelijke wijze klaargemaakt, zodat de smaaksensatie tot diep in het vlees kan trekken.</p>
      <p>Met onze goedkeuring bepalen wij of het vlees klaar is voor de BBQ, en bereid kan worden voor onze gasten. Daarna volgt de finale stap in het proces, de Ribtastic Secret Sauce. Met de juiste temperatuur wordt tijdens het grillen de geheime marinade vorstelijke op het vlees gesmeerd zodat de smaaksensatie wordt afgemaakt. Zie hieronder onze heerlijke creaties, you wanna try?</p>
      <h2>Duurzaamheid</h2>
      <p>Samen genieten, is tevens samen zorg dragen. Zorgen voor het opruimen, zorgen voor de afwas, zorgen voor het minimaliseren van je afval en het beperken van jouw impact op het milieu. Wij van Ribtastic Brothers, dragen ons steentje hierin bij. Duurzaamheid zit diep in onze vezels. Alles wat we doen, doen we met een duurzame gedachte.</p>
      <p>Alle producten en materialen die we gebruiken zijn zoveel mogelijk duurzaam. Dit zie je terug in de materialen die we hebben gebruikt voor het maken van onze fiets, in de biologisch afbreekbare verpakkingen en de CO2 die we jaarlijkse compenseren.</p>
      <p>Wij nemen de verantwoordelijkheid om zo duurzaam mogelijk te ondernemen, zodat we samen nog lang kunnen genieten van onze aardekloot.</p>
    </div>
    <SmallGallery :images="images" />
  </div>
</template>

<script>
import SmallGallery from '@/components/SmallGallery.vue'

export default {
	name: 'Saus',
	components: {
		SmallGallery
	},
	data() {
		return {
			images: [
				{ src: 'catering_foodtruck_spareribs-min.jpg', alt: 'header1' },
				{ src: 'header_1.jpg', alt: 'header2' },
				{ src: 'header_2.jpg', alt: 'header3' },
				{ src: 'header_3.jpg', alt: 'header4' }
			]
		}
	}
}
</script>

<style lang="scss"></style>
