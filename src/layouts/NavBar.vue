<template></template>

<script>
export default {
  data() {
    return {
      isHidden: false,
    };
  },

  methods: {
    handleScroll() {
      const isMobile = window.orientation > -1;
      if (isMobile === false) {
        this.isHidden = false;
        this.bottomBar = false;
        const currentScrollY = window.pageYOffset;
        if (this.prevScrollY < currentScrollY) {
          this.isHidden = true;
          this.barsHidden = false;
          this.bottomBar = false;
        } else {
          this.isHidden = false;
          this.barsHidden = true;
          this.bottomBar = false;
        }
        this.prevScrollY = currentScrollY;
      } else {
        this.isHidden = true;
        this.bottomBar = false;
      }
    },
    toggleNav() {
      this.barsHidden = !this.barsHidden;
      this.isHidden = !this.isHidden;
    },
    dropDown() {
      this.isHidden = false;
      this.bottomBar = !this.bottomBar;
    },
  },
};
</script>

<style lang="scss"></style>
