<template>
  <section class="riderGezochtSecion">
    <div class="container riderGezocht">
      <div class="riderGezocht__icon">
        <font-awesome-icon :icon="'bicycle'" />
      </div>
      <div>
        <h1>Riders gezocht!</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos beatae
          quidem, consequuntur vitae ullam aliquid nostrum modi nulla neque
          molestias architecto ex vero, fugit expedita, ducimus alias amet
          ipsum! Quasi fugiat mollitia amet illum magnam, rem culpa maxime
          debitis sequi! Maxime nemo optio doloribus odit eos voluptatum cum,
          sed dolorum nisi quibusdam placeat consequuntur officiis ullam aliquam
          esse nostrum recusandae!
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
  background-color: $alert-color;
  margin-top: -1em;
}
.riderGezocht {
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-content: center;
  align-items: center;

  &__icon {
    background: #e9e9e9;
    border: 5px solid $off-alert-color;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    text-align: center;

    justify-self: center;

    svg {
      color: $alert-color;
      height: 100%;
      font-size: 5em;
      margin: auto;
    }
  }
  h1 {
    text-align: left;
  }
}
</style>
