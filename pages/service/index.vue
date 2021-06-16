<template>
  <section>
    <ImageHeader v-bind="heading" :image="image" />
    <div class="container-fluid">
      <h1>Hello World</h1>
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
        subtitle: 'We only serve the best!',
      },
      image:
        'https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/static/ribtastic_brothers_samen.jpg',
    }
  },
}
</script>

<style></style>
