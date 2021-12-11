<template>
  <div class="__nuxt-error-page">
    <div class="cateringTitle">
      <section class="cateringTitle__leftError">
        <img
          src="https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/static/no_food_left.jpg"
        />
      </section>
      <section class="cateringTitle__right">
        <h1>{{ message }}</h1>
        <p>
          Kan gebeuren uiteraard. Maar via de link hieronder kan je direct terug
          naar het feestje gaan!
        </p>
        <div class="cateringTitle__right--container">
          <div class="cateringTitle__right--container--text" id="top">
            <NuxtLink class="error-link" to="/">
              Terug naar de homepage
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return 'De BBQ is uit gegaan!'
    },
  },
  head() {
    return {
      title: `${this.message} | The Ribtastic Brothers`,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.cateringTitle {
  &__right {
    margin: 2rem;
  }
}

@media (min-width: 650px) {
  .cateringTitle {
    display: grid;
    grid-template-columns: 45% 55%;
    height: 100vh;
    width: 100%;

    &__leftError {
      overflow: hidden;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: auto;
        min-height: 100%;
        width: auto;
        transform: translateX(200px);
      }
    }
    &__right {
      margin: auto 5%;

      &--container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        &--text {
          max-width: 400px;
          align-self: center;
        }
      }
    }
  }
}
// .__nuxt-error-page {
//   padding: 1rem;
//   background: $off-black-color;
//   color: $off-white-color;
//   text-align: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   font-weight: 700 !important;
//   -ms-text-size-adjust: 100%;
//   -webkit-text-size-adjust: 100%;
//   -webkit-font-smoothing: antialiased;
//   width: 100%;
//   height: 100vh;
// }
// .__nuxt-error-page .error {
//   max-width: 450px;
// }
// .__nuxt-error-page .title {
//   font-size: 1.5rem;
//   margin-top: 15px;
//   color: $off-white-color;
//   margin-bottom: 8px;
// }
// .__nuxt-error-page .description {
//   color: $primary-color;
//   line-height: 21px;
//   margin-bottom: 10px;
// }
// .__nuxt-error-page a {
//   color: $primary-color !important;
//   text-decoration: none;
// }
// .__nuxt-error-page .logo {
//   position: fixed;
//   left: 12px;
//   bottom: 12px;

//   img {
//     width: 75px;
//   }
// }
</style>
