<template>
  <div>
    <NavBar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer,
  },

  computed: {
    isHome() {
      return this.$nuxt.$route.path === '/'
    },
  },
}
</script>

<style lang="scss">
.btn {
  cursor: pointer;
  text-decoration: none;
  padding: 0.8em 1.5em;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;

  max-width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em auto;

  &.btn-primary {
    background: $primary-color;
    border: 2px solid $off-primary-color;
    color: white;
    box-shadow: 0 6px 8px rgba($color: #000000, $alpha: 0.4);
    transition: 0.3s;

    &:hover,
    &:focus {
      background: $alert-color;
      border: 2px solid $off-alert-color;
      outline: none;
    }
  }

  &.btn-line {
    background: rgba($color: #000000, $alpha: 0.1);
    border: 2px solid $primary-color;
    color: $primary-color;
    box-shadow: 0 6px 8px rgba($color: #000000, $alpha: 0.4);
    transition: 0.3s;

    &:hover,
    &:focus {
      border: 2px solid $alert-color;
      outline: none;
      color: $alert-color;
      a {
        color: $alert-color;
      }
    }
  }
  &.btn-inline {
    margin: 2rem 0;
    max-width: fit-content;
    padding: 0;
  }

  svg {
    margin-left: 0.5em;
  }
}

@media (min-width: 650px) {
  .btn {
    max-width: 50%;
    margin: 2em auto;
  }
}
</style>
