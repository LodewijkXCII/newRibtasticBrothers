<template>
  <nav class="Navbar">
    <div class="topNav">
      <img
        src="@/assets/img/logo.png"
        alt="Ribtastic Brothers Logo"
        class="Navbar-Brand"
      />
      <font-awesome-icon :icon="['fas', 'bars']" class="menuBars" />
      <div class="firstEvent">
        <p>Eerstvolgend Event</p>
        <span>Freshtival</span>
      </div>
    </div>
    <div class="bottomNav">
      <ul class="navList">
        <li class="list-item">Foodtruck</li>
        <li class="list-item">Catering</li>
        <li class="list-item">Bezorging</li>
        <li class="list-item">Over Ons</li>
        <li class="list-item">Contact</li>
        <li class="list-item">Blog</li>
        <li class="list-item">Gallerij</li>
      </ul>
    </div>
  </nav>
</template>
