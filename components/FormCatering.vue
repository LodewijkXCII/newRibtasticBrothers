<template>
  <form class="formCatering">
    <h2>Vraag een offerte op</h2>
    <label for="name">Naam: *</label>
    <input type="text" name="name" id="name" required />
    <label for="email">Email: *</label>
    <input type="email" name="email" id="email" required />
    <label for="company">Bedrijf:</label>
    <input type="text" name="company" id="company" />
    <label for="option">Gewenst pakket: *</label>
    <select name="option" id="option" required>
      <option value="just-meat">Just meat</option>
      <option value="meat-with-fries" selected>Meat with Fries</option>
      <option value="all-in">All-In</option>
      <option value="custom">Catering op Maat</option>
    </select>
    <label for="date">Gewenste datum: *</label>
    <input type="date" name="date" id="date" required />
    <label for="people">Aantal personen: *</label>
    <input type="number" name="people" id="people" min="0" required value="0" />
    <button type="submit" class="btn btn-primary">Aanvragen</button>
  </form>
</template>
