<template>
  <v-app>
    <v-app-bar app color="#778899" dark elevation="7" justify="center">
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-1"
          contain
          src="./assets/137993883.jpg"
          transition="scale-transition"
          width="60"
        />
        <v-spacer></v-spacer>
        <v-btn href="/" text>
          <span class="mr-2">Главная</span>
        </v-btn>

        <v-menu offset-y class="mr-5">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="#778899" v-bind="attrs" v-on="on">
              Наши услуги
            </v-btn>
          </template>
          <v-list color="#778899">
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :href="item.path"
            >
              <v-btn color="#ffffff" text>
                <span class="mr-5">{{ item.title }}</span>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn href="/reviews" text>
          <span class="mr-5">Отзывы</span>
        </v-btn>
        <v-btn href="/about" text>
          <span class="mr-5">О нас</span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app color="#778899" dark elevation="7">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    items: [
      { title: "Найти пэт-ситтера", path: "/find-sitter" },
      { title: "Стать пэт-ситтером", path: "/become-sitter" },
    ],
    //
  }),
};
</script>

<style>
@import "./assets/style.css";
</style>