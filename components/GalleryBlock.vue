<template>
  <div class="galleryPost">
    <nuxt-link :to="`/gallerij/${title}`">
      <img
        v-bind:src="`https://ribtasticbrothers.herokuapp.com${thumbnailImage}`"
        v-bind:alt="title"
        class="galleryPost__img"
      />
      <div class="galleryPost__body">
        <h3 class="galleryPost__title">{{ title }}</h3>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    thumbnailImage: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss">
.galleryPost {
  position: relative;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.35);

  &__img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &:hover .galleryPost__body {
    transform: scale(1.02);
  }

  &__body {
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    color: white;
    padding: 6rem 3rem 1rem;
    transition: 0.5s ease-in-out;
  }

  &__title {
    font-size: 1.4rem;
    font-weight: normal;
    line-height: 1;
    margin-bottom: 0.5em;
    position: relative;
    z-index: 1;
    color: white;
    padding: 0.5em;
    letter-spacing: 1.2px;
    line-height: 0.8;

    &::before {
      content: '';
      position: absolute;
      background: $primary-color;
      width: 100%;
      top: -0.1em;
      bottom: -0.15em;
      left: -1rem;
      z-index: -1;
      border-radius: 5px;
    }
  }
}
</style>
