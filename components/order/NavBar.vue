<template>
  <div class="orderNav">
    <a href="#hoewerkthet">Hoe werkt het</a>
    <a href="#depakketten">De pakketten</a>
    <a href="#faq">Veel gestelde vragen</a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.orderNav {
  width: 100%;
  background: $off-black-color;
  display: flex;
  justify-content: center;

  a {
    color: white;
    text-transform: uppercase;
    margin: 1em 2em;

    &:hover {
      color: $off-primary-color;
    }
  }
}
</style>
