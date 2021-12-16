<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >     
        <v-img
          alt="Logo"
          class="shrink mr-1"
          contain          
          src="./assets/3.png"
          transition="scale-transition"
          width="20"
        />       
   

      <v-spacer></v-spacer>
       <v-img
          alt="Logo"
          class="text-logo"
          contain          
          src="./assets/3.png"
          transition="scale-transition"
          width="40"
        />
      <v-btn
        href="./components/HelloWorld"
        target="_blank"
        text
      >
        <span class="mr-2">Главная</span>        
        <!--v-icon>mdi-open-in-new</v-icon-->
      </v-btn>
     
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >        
        <span class="mr-4">Услуги</span>
      </v-btn>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >     
        <span class="mr-5">Регистрация</span>
      </v-btn>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >     
        <span class="mr-5">Отзывы</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!--HelloWorld/-->
      <Main/>
    </v-main>
  </v-app>
</template>

<script>
import Main from './components/Main';
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    //HelloWorld,
    Main,
  },

  data: () => ({
    //
  }),
};
</script>
