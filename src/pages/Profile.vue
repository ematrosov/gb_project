<template>
  <div class="profile">
    <div class="profile_img">
      <img class="profile_img__image" src="#" alt="Фото профиля" />
    </div>
    <div>
      <p class="profile_info">{{ USERS.name }}</p>
      <p class="profile_info">{{ this.surname }}</p>
      <p class="profile_info">{{ this.dateBirthday }}</p>
      <p class="profile_info">{{ this.city }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      surname: "",
      dateBirthday: "",
      city: "",
    };
  },
  computed: {
    ...mapGetters(["USERS"]),
  },
  methods: {
    ...mapActions(["GET_USERS_FROM_API"]),
  },
  mounted() {
    this.GET_USERS_FROM_API();
  },
};
</script>

<style>
.profile {
  margin: 0 auto;
  width: 500px;
  display: flex;
  justify-content: space-around;
  margin-top: 125px;
}
.profile_img {
  width: 200px;
  height: 200px;
  padding-top: 80px;
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: 50%;
  text-align: center;
}

.profile_info {
  display: block;
  width: 200px;
  height: 50px;
  border: 1px solid gray;
  border-radius: 20px;
  box-shadow: 0 0 29px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  box-sizing: border-box;
  padding-top: 10px;
}
</style>
