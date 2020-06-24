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
    <!-- TODO Options inladen + selected binden -->
    <select name="option" id="option" required>
      <option value="just-meat">Just meat</option>
      <option value="meat-with-fries" selected>Meat with Fries</option>
      <option value="all-in">All-In</option>
      <option value="custom">Catering op Maat</option>
    </select>
    <label for="date">Gewenste datum: *</label>
    <input type="date" name="date" id="date" required />
    <label for="people">Aantal personen: *</label>
    <input type="number" name="people" id="people" min="0" value="0" required />
    <button type="submit" class="btn btn-primary">Aanvragen</button>
  </form>
</template>

<style lang="scss" scoped>
.formCatering {
  display: flex;
  flex-direction: column;

  margin: 2em 0;
  padding: 1.5em 2.5em;

  background: $off-black-color;
  border: 2px solid darken($color: $off-black-color, $amount: 3);
  border-radius: 15px;
  font-size: 0.75em;

  h2 {
    margin-bottom: 0.7em;
  }

  label {
    margin-bottom: 0.35em;
  }
  input,
  select {
    margin-bottom: 1em;

    background: #212121;
    border: 1px solid #4a6053;
    border-radius: 10px;
    padding: 0.8em;
    color: #fff;
    font-family: $ft-lato;
  }

  button {
    margin: 1em 0;
  }

  input:focus,
  select:focus {
    box-shadow: 0 0 10px $primary-color, 0 0 2px #4a6053;
    outline: none;
  }
}

@media (min-width: 650px) {
  .formCatering {
    margin: 2em;

    button {
      max-width: 50%;
      margin: auto;
    }
  }
}
</style>
