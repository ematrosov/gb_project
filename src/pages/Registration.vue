<template>
  <div>
    <form class="registration_form">
      <input
        required
        type="text"
        class="registration_form__input"
        placeholder="Имя"
        v-model="name"
      />
      <input
        required
        type="text"
        class="registration_form__input"
        placeholder="Фамилия"
        v-model="surname"
      />
      <input
        type="text"
        class="registration_form__input"
        placeholder="Город"
        v-model="city"
      />
      <input
        type="text"
        class="registration_form__input"
        placeholder="Дата рождения"
        v-model="dateBirthday"
      />
      <input
        required
        type="email"
        class="registration_form__input"
        placeholder="Электронная почта"
        v-model="email"
      />
      <input
        required
        type="password"
        placeholder="Придумайте пароль"
        class="registration_form__input"
        v-model="password"
      />
      <input
        required
        type="password"
        placeholder="Повторите пароль"
        class="registration_form__input"
        v-model="secondPassword"
      />
      <p v-if="this.password != this.secondPassword">Пароли не совпадают</p>
      <p v-if="check">Заполните все обязательные поля!</p>
      <router-link to="/profile">
        <input
          type="submit"
          placeholder="Зарегистрироваться"
          class="registration_form__btn"
          @click="registration"
        />
      </router-link>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
      secondPassword: "",
      dateBirthday: "",
      city: "",
      check: false,
      route: false,
    };
  },
  methods: {
    ...mapMutations(["ADD_NEW_USER"]),

    registration() {
      const { name, surname, email, password, city, dateBirthday } = this;
      this.ADD_NEW_USER({ name, surname, email, password, city, dateBirthday });

      if (!name || !surname || !email || !password || !secondPassword) {
        this.check = true;
      } else {
        this.route = true;
      }

      if (this.route === true) {
        this.$route.push("/profile");
      }
    },
  },
};
</script>

<style>
.registration_form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 25px;
  width: 500px;
  height: 500px;
  border: 1px solid #000;
}
.registration_form__input {
  width: 250px;
  margin: 15px 0;
  border: 1px solid gray;
}
.registration_form__btn {
  width: 100px;
  margin: 15px 0;
  border: 1px solid gray;
}
</style>