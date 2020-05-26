<template>
  <nav class="Navbar">
    <div class="topNav">
      <nuxt-link to="/">
        <img
          src="@/assets/img/logo.png"
          alt="Ribtastic Brothers Logo"
          class="Navbar-Brand"
        />
      </nuxt-link>
      <font-awesome-icon :icon="'bars'" class="menuBars" />
      <div class="firstEvent">
        <p>Eerstvolgend Event</p>
        <span>Freshtival</span>
      </div>
    </div>
    <div class="bottomNav">
      <ul class="navList">
        <li class="list-item">
          <nuxt-link to="foodtruck">
            <font-awesome-icon :icon="'utensils'" />Foodtruck
          </nuxt-link>
        </li>
        <li class="list-item">
          <nuxt-link to="catering">
            <font-awesome-icon :icon="'utensils'" />Catering
          </nuxt-link>
        </li>
        <li class="list-item">
          <nuxt-link to="bezorging">
            <font-awesome-icon :icon="'bicycle'" />Bezorging
          </nuxt-link>
        </li>
        <li class="list-item">
          <font-awesome-icon :icon="'bars'" class="menuBars" />
        </li>
        <!--  <li class="list-item">Contact</li>
        <li class="list-item">Blog</li>
        <li class="list-item">Gallerij</li> -->
      </ul>
    </div>
  </nav>
</template>
