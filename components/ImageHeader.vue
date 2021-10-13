<template>
  <div class="imgHeader">
    <img :src="image" class="imgHeader__image" />

    <div class="imgHeader__heading">
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.imgHeader {
  position: relative;
  height: 55vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);

  &__image {
    position: absolute;
    z-index: -10;
    left: -190%;
    width: auto;
    height: 100%;
    overflow: hidden;
    background-size: cover;
  }

  &__heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 75px;
    h2 {
      color: white;
    }
  }
  @media (min-width: 650px) {
    .imgHeader__image {
      height: auto;
      left: 0;
      width: 100%;
    }
  }
}
</style>
