<template>
  <div>
    <NavBar />
    <ImageHeader v-if="!isHome" />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'
import ImageHeader from '@/components/ImageHeader.vue'

export default {
  components: {
    NavBar,
    Footer,
    ImageHeader
  },

  computed: {
    isHome() {
      return this.$nuxt.$route.path === '/'
    }
  }
}
</script>
