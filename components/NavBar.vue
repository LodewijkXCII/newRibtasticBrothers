<template>
  <nav class="Navbar">
    <div class="topNav">
      <div class="container">
        <nuxt-link to="/">
          <img
            src="@/assets/img/logo.png"
            alt="Ribtastic Brothers Logo"
            class="Navbar-Brand"
          />
        </nuxt-link>
        <font-awesome-icon
          :icon="'bars'"
          v-on:click="toggleNav"
          class="menuBars"
          v-bind:class="{ hidden: !isHidden }"
        />
      </div>
      <!-- TODO ADD FIRST EVENT -->
      <!-- <div class="firstEvent">
        <p>Eerstvolgend Event</p>
        <span>Freshtival</span>
      </div>-->
    </div>
    <div
      class="bottomNav"
      v-on:scoll="handleScroll"
      v-on:click="toggleNav"
      v-bind:class="{ hidden: isHidden }"
    >
      <ul class="navList">
        <li class="list-item">
          <nuxt-link to="/catering">Catering</nuxt-link>
        </li>

        <li class="list-item">
          <nuxt-link to="/bezorging">Bezorging</nuxt-link>
        </li>
        <li class="list-item">
          <nuxt-link to="/galerij">Galerij</nuxt-link>
        </li>
        <li class="list-item">
          <a href="#" @click="dropDown()"
            >Over Ons <font-awesome-icon :icon="['fas', 'angle-down']"
          /></a>
        </li>

        <li class="list-item">
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
        <!-- <li class="list-item mob-hid">
          <nuxt-link to="/blog">
            Blog
          </nuxt-link>
        </li>-->
      </ul>
    </div>
    <div
      class="bottomNav second"
      v-if="bottomBar"
      v-bind:class="{ hidden: !bottomBar }"
    >
      <ul class="navList">
        <li class="list-item"><nuxt-link to="/smaak">Smaak</nuxt-link></li>
        <li class="list-item">
          <nuxt-link to="/sensatie">Sensatie</nuxt-link>
        </li>
        <li class="list-item"><nuxt-link to="/samen">Samen</nuxt-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isHidden: true,
      barsHidden: true,
      prevScrollY: 200,
      bottomBar: false,
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    handleScroll() {
      const isMobile = window.orientation > -1
      if (isMobile === false) {
        this.isHidden = false
        this.bottomBar = false
        const currentScrollY = window.pageYOffset
        if (this.prevScrollY < currentScrollY) {
          this.isHidden = true
          this.barsHidden = false
          this.bottomBar = false
        } else {
          this.isHidden = false
          this.barsHidden = true
          this.bottomBar = false
        }
        this.prevScrollY = currentScrollY
      } else {
        this.isHidden = true
        this.bottomBar = false
      }
    },
    toggleNav() {
      this.barsHidden = !this.barsHidden
      this.isHidden = !this.isHidden
    },
    dropDown() {
      this.isHidden = false
      this.bottomBar = !this.bottomBar
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  position: fixed;
  z-index: 1000;

  .topNav {
    position: relative;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0.7);
    padding: 0.6em 0;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.8);

    .container {
      display: flex;
      padding: 0;
      a {
        margin: auto;
        grid-column: 3/4;
        img {
          width: 90px;
        }
      }
    }
    .menuBars {
      align-self: center;
    }

    @media (min-width: 650px) {
      .menuBars {
        display: block;
        justify-self: end;
        align-self: center;
        margin-right: 1em;
      }
    }

    .firstEvent {
      display: none;
    }

    @media (min-width: 650px) {
      .firstEvent {
        position: absolute;
        right: 0;
        bottom: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 2em;
        background: rgba(120, 135, 112, 0.7);

        font-size: 1rem;
        text-transform: uppercase;

        p {
          font-size: 0.75em;
          font-weight: 200;
        }

        span {
          font-weight: bold;
        }
      }
    }
  }

  .bottomNav {
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 -5px 4px rgba(48, 48, 48, 0.5);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &.hidden {
      display: none !important;
      transition: opacity 3s ease-out;
      opacity: 0;
    }

    .navList {
      max-width: $max-width;
      margin: auto;
      list-style: none;
      justify-content: space-evenly;
      padding: 1em 0 1.8em;
      text-transform: uppercase;
      box-sizing: border-box;

      li.list-item a {
        font-size: 2em;
        display: inline-block;
        align-items: center;
        grid-row-gap: 3px;
        margin: 2rem;

        text-decoration: none;
        color: white;

        &:hover,
        &:active {
          color: $secondary-color;
        }
        svg {
          justify-self: center;
        }
      }
      .mob-hid {
        display: none;
      }
    }
  }
  @media (min-width: 650px) {
    .bottomNav {
      display: inherit;
      position: relative;
      background: $primary-color;
      box-shadow: 0 5px 8px rgba(256, 256, 256, 0.2);
      opacity: 1;
      height: 100%;
      &.second {
        background: $off-primary-color;
      }

      .navList {
        padding: 0.5em 0;
        display: flex;
        .mob-hid {
          display: inherit;
        }
        li.list-item a {
          margin: 0;
          font-size: 0.8em;
          display: inline;
        }
        svg {
          margin: 0 0.3rem;
        }
      }
    }
    .hidden {
      opacity: 0 !important;
    }
  }
}
</style>
