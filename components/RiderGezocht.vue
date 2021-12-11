<template>
  <section class="riderGezochtSecion">
    <div class="container riderGezocht">
      <div class="riderGezocht__icon">
        <font-awesome-icon :icon="'bicycle'" />
      </div>
      <div class="riderGezocht__text">
        <h1>Personeel gezocht!</h1>
        <p>
          Wil jij werken bij het restaurant wat bekend staat om de beste
          spareribs en de unieke ribsalon? We zijn op zoek naar extra fietsers,
          maar ook nieuwe collega's in de keuken! Bij intresse neem
          <nuxt-link to="contact">contact</nuxt-link> met ons op!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.riderGezochtSecion {
  background: $primary-gradient;
  margin-top: -1em;
}
.riderGezocht {
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-content: center;
  align-items: center;

  &__icon {
    background: #e9e9e9;
    border: 5px solid $off-primary-color;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    text-align: center;

    justify-self: center;

    svg {
      color: $primary-color;
      height: 100%;
      font-size: 5em;
      margin: auto;
    }
  }
  &__text {
    h1 {
      text-align: left;
    }

    a {
      color: $off-black-color;
      font-weight: bold;
    }
  }
}
</style>
