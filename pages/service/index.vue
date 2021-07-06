<template>
  <section>
    <ImageHeader v-bind="heading" :image="image" />
    <div class="container-fluid">
      <p>
        Waar wij komen en wat wij bereiden, altijd zijn we enthousiast en zetten
        ons voor 110% in om er een feestje van te maken. Vanaf het eerste
        contact tot het opruimen en schoonmaken, wij hebben er plezier in om het
        voor jou zo leuk mogelijk te maken.
      </p>
      <p>
        Ons doel is het om gasten een smaakbeleving te bezorgen, door ze kennis
        te laten maken met onze unieke BBQ creaties.
      </p>
      <p>Neem contact met ons op! Don’t you wanna be part of it?</p>
    </div>
  </section>
</template>

<script>
import ImageHeader from '@/components/ImageHeader.vue'

export default {
  components: { ImageHeader },
  data() {
    return {
      heading: {
        title: 'Service',
        subtitle: 'Enthousiastic is our middle name',
      },
      image:
        'https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/static/ribtastic_brothers_samen.jpg',
    }
  },
}
</script>

<style></style>
