<template>
  <div class="login">
    <h1 class="login_title">Войти</h1>
    <form class="login_form">
      <input
        type="email"
        class="login_form__input"
        placeholder="Введите email"
      />
      <input
        type="password"
        class="login_form__input"
        placeholder="Введите пароль"
      />
      <input type="submit" class="login_form__btn" placeholder="Войти" />
    </form>
    <div class="no-login">
      <p>Еще не зарегистрированы?</p>
      <a href="">Пройти регистрацию</a>
    </div>
  </div>
</template>

<script>
</script>

<style>
.login {
  margin: 0 auto;
  margin-top: 25px;
  width: 500px;
  height: 400px;
  border: 1px solid #000;
}

.login_title {
  margin: 25px 0;
  text-align: center;
}

.login_form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login_form__input {
  width: 250px;
  margin: 15px 0;
  border: 1px solid gray;
}

.login_form__btn {
  width: 100px;
  margin: 15px 0;
  border: 1px solid gray;
}

.no-login {
  margin: 15px 65px;
  display: flex;
  flex-direction: row;
}
</style>
