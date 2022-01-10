<template>
  <v-container class="display">
    <div class="text-flex">      
      <v-col cols="4">       
        <div class="text-color">
          <h1>Уезжаешь?</h1>
          <h2>
            Не с кем оставить
            <br />
            своего любимого питомца?
          </h2>
          <h2>Тебе поможет</h2>
          <h1 class="textGoodFriend">Добрый друг!</h1>                  
          <div>
            <v-btn color="#18a8b5" href="/services">
              <span class="mr-1 text-btn">Перейти к услугам</span>
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col cols="4" class="d-flex align-center">
        <v-img
          :src="require('../assets/pexels-photo-3945402.jpeg')"
          class="img-large"
          height="550"
        />
      </v-col>
      <v-col cols="2">
        <v-img
          :src="require('../assets/8-Крольченок породы карликовый баран.jpg')"
          class="img-small"
          height="170"
        />
        <v-img
          :src="require('../assets/koshka-696x522.jpg')"
          class="img-small"
          height="170"
        />
        <v-img
          :src="require('../assets/78.jpg')"
          class="img-small"
          height="170"
        />
        <v-img
          :src="
            require('../assets/detail_c97de83e946ba7a99ef1840e46ba7c57.jpg')
          "
          class="img-small"
          height="170"
        />
      </v-col>
      <v-col cols="2">
        <v-img
          :src="require('../assets/dog-4372036_960_720.jpg')"
          class="img-small"
          height="170"
        />
        <v-img
          :src="require('../assets/puppy-dog-canine-pet.jpeg')"
          class="img-small"
          height="170"
        />
        <v-img
          :src="
            require('../assets/popugay-ili-pevchaya-ptichka-kakogo-pitomtsa-vyibrat-nachinayushhim-04.jpg')
          "
          class="img-small"
        />
        <v-img
          :src="require('../assets/4107265220_e55560cdba3.jpg')"
          class="img-small"
        />
        <v-img :src="require('../assets/Home_01.jpg')" class="img-small" />
      </v-col>
      <!--/v-row-->
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Main",

  data: () => ({}),
};
</script>
