<template>
  <div class="trbValues">
    <div v-for="keyValue in keyValues" :key="keyValue" class="trbValues__Value">
      <div class="ValueIcon">
        <font-awesome-icon :icon="keyValue.icon" />
      </div>
      <div class="ValueText">
        <h4>{{ keyValue.title }}</h4>
        <p>
          {{ keyValue.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyValues: [
        {
          title: 'Genieten',
          text:
            'Wij geloven in het genot van gezamenlijk buiten eten, en hebben de missie om het BBQ evangelie verder te verspreiden.',
          icon: 'trophy'
        },
        {
          title: 'Bakfiets',
          text:
            'Een uniek vervoersmiddel waar we heerlijke BBQ gerechten mee kunnen maken. Volledig zelf gemaakt met duurzame materialen.',
          icon: 'bicycle'
        },
        {
          title: 'Saus',
          text:
            'De keuze is niet: Welke saus moet ik kiezen, nee de keuze is welk vlees. Onze saus past overal bij en maakt alles overheerlijk!',
          icon: 'pepper-hot'
        },
        {
          title: 'Duurzaamheid',
          text:
            'Duurzaamheid zit in onze vezels. Alles wat we doen, doen we met een duurzame gedachten. Zo reduceren we ons gas verbruik jaarlijks',
          icon: 'leaf'
        }
      ]
    }
  }
}
</script>
