<template>
  <footer>
    <div class="container">
      <div class="footer__sectionA">
        <img src="@/assets/img/logo.png" alt="Ribtastic Brothers Logo" />
        <div class="socials">
          <a
            href="https://www.facebook.com/The-Ribtastic-Brothers-682838975445979/"
            target="_blank"
            ><font-awesome-icon :icon="['fab', 'facebook']"
          /></a>
          <a
            href="http://www.instagram.com/ribtastic_brothers/"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </div>
      </div>
      <div class="footer__links">
        <div class="links__partner">
          <h2>Partners</h2>
          <ul v-for="partner in partners" :key="partner">
            <li class="blog-link">{{ partner.name }}</li>
          </ul>
        </div>
        <div class="links__blog">
          <h2>Blog</h2>
          <ul v-for="post in posts" :key="post">
            <li class="blog-link">{{ post.title }}</li>
          </ul>
        </div>
        <div class="links__about">
          <h2>Over Ribtastic</h2>
          <ul>
            <li class="about-link">De Saus</li>
            <li class="about-link">De Bakfiets</li>
            <li class="about-link">
              <nuxt-link to="catering">
                Catering
              </nuxt-link>
            </li>
            <li class="about-link">Bezorging</li>
            <li class="about-link">Gallerij</li>
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
        { name: 'Fat and Lazy' }
      ],
      posts: [
        { title: 'BBQ, bbq of barbeku?' },
        { title: 'Wat doen die brothers nou?' },
        { title: 'De buik schreef over ons!' },
        { title: 'We hebben een nieuwe saus!' },
        { title: 'BBQ-en doe je zo' }
      ]
    }
  }
}
</script>
