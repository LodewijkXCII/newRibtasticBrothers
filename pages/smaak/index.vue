<template>
  <div>
    <div class="container-fluid">
      <h1>Ribtastic Saus</h1>
      <h2>Onze geheime formule</h2>
      <p>Het geheim van lekker vlees zit voor een groot gedeelte in de voorbereiding en de magie van marinade. Ons vlees wordt daarom met een overvloed van marinade op een ambachtelijke wijze klaargemaakt, zodat de smaaksensatie tot diep in het vlees kan trekken.</p>
      <p>Met onze goedkeuring bepalen wij of het vlees klaar is voor de BBQ, en bereid kan worden voor onze gasten. Daarna volgt de finale stap in het proces, de Ribtastic Secret Sauce. Met de juiste temperatuur wordt tijdens het grillen de geheime marinade vorstelijke op het vlees gesmeerd zodat de smaaksensatie wordt afgemaakt. Zie hieronder onze heerlijke creaties, you wanna try?</p>
    </div>
    <SmallGallery />
  </div>
</template>

<script>
import SmallGallery from '@/components/SmallGallery.vue'

export default {
	name: 'Saus',
	components: {
		SmallGallery
	}
}
</script>

<style lang="scss"></style>
