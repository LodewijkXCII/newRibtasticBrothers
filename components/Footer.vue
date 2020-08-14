<template>
  <footer>
    <div class="container">
      <div class="footer__sectionA">
        <img src="@/assets/img/logo.png" alt="Ribtastic Brothers Logo" />
        <div class="socials">
          <a
            href="https://www.facebook.com/The-Ribtastic-Brothers-682838975445979/"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
          <a
            href="http://www.instagram.com/ribtastic_brothers/"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </div>
      </div>
      <div class="footer__links">
        <!-- <div class="links__partner">
          <h2>Partners</h2>
          <ul v-for="partner in partners" v-bind:key="partner.id">
            <li class="blog-link">{{ partner.name }}</li>
          </ul>
        </div>
        <div class="links__blog">
          <h2>Blog</h2>
          <ul v-for="post in posts" v-bind:key="post.id">
            <li class="blog-link">{{ post.title }}</li>
          </ul>
        </div>-->
        <div class="links__about">
          <h2>Over Ribtastic</h2>
          <ul>
            <li>
              <nuxt-link to="/smaak" class="about-link">Smaak</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/sensatie" class="about-link">Sensatie</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/samen" class="about-link">Samen</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/catering" class="about-link">Catering</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/gallerij" class="about-link">Gallerij</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        { name: 'Brouwerij Noordt' },
        { name: 'El Parador' },
        { name: 'Fat and Lazy' },
      ],
      posts: [
        { title: 'BBQ, bbq of barbeku?' },
        { title: 'Wat doen die brothers nou?' },
        { title: 'De buik schreef over ons!' },
        { title: 'We hebben een nieuwe saus!' },
        { title: 'BBQ-en doe je zo' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
footer {
  padding-bottom: 6em;
  &::before,
  &::after {
    content: '';
    display: block;
    width: 100%;

    background: rgb(120, 135, 114);
    background: $primary-gradient;
  }

  &::before {
    height: 1.5em;
  }

  &::after {
    height: 3px;
  }

  .footer__sectionA {
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
      margin: 1em;
      width: 80px;
    }
    svg {
      margin: 0.5em;
    }
  }

  .footer__links {
    grid-gap: 0.8em;
    font-size: 1em;
    margin: 0 2em 2em;

    h2 {
      font-family: $ft-lato;
      text-transform: uppercase;
      font-size: 1em;
      color: white;
      letter-spacing: normal;
      text-align: left;
      margin-bottom: 0.5em;
    }

    ul {
      padding: 0;

      li {
        list-style: none;
        padding-left: 0;
        margin: 0.2em 0;
      }
    }
    .links__about {
      grid-column: 3/4;
    }
  }
}

@media (min-width: 650px) {
  footer {
    padding-bottom: 1em;
    .container {
      display: flex;
      justify-content: space-between;
      padding: 1em 0;

      .footer__sectionA {
        display: initial;
        justify-content: space-around;
        align-items: center;

        img {
          width: 150px;
        }
        .socials {
          text-align: center;

          svg {
            color: white;
          }
        }
      }

      .footer__links {
        font-size: 1em;
        grid-gap: 1.5em;

        a {
          color: white;
          transition: 0.3s;

          &:hover {
            color: $primary-color;
          }
        }
      }
    }
  }
}
</style>
