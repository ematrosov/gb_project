<template>
  <v-container class="text-flex">    
    <v-row class="text-flex">     
      <v-col cols=4>
        <v-img
          :src="require('../assets/3.png')"          
          contain
          height="200"
        />       
        <p class="subheading font-weight-regular">
          Уезжаешь?
           <br />Не с кем оставить своего любимого питомца?           
        </p>
        <h1 class="display-2 font-weight-bold mb-3">Добрый друг!</h1>
        <p>
          <br />поможет! Воспользуйся нашими услугами!
        </p>
        <div class="itemsTable">
          <button class="operButton">Перейти к услугам</button>
        </div>     
      </v-col>  
      <v-col cols="4">        
        <v-img
          :src="require('../assets/pexels-photo-3945402.jpeg')"  
          class="img-large"
          contain
        />          
      </v-col>        
      <v-col cols="4">
        <v-img
          :src="require('../assets/puppy-dog-canine-pet.jpeg')"         
          class="img-small"
          contain
          height="200"
        />
        <v-img        
          :src="require('../assets/lying-down-orange-cat-cute-pets-cats.jpeg')"
          class="img-small"
          contain
          height="200"
        />        
        <v-img
          :src="require('../assets/kolli-shchenok-morda.jpg')"          
          class="img-small"
          contain
          height="200"
        />        
         <v-img
          :src="require('../assets/kot-koshka-morda-jfua.jpg')"
          class="img-small"
          contain
          height="200"
        />        
      </v-col>          
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Main",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
