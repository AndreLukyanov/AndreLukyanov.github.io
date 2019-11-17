<template>
  <div class="app">
    <header class="header">
      <div class="container">
        <a href="/" class="logo">
          <img src="./assets/core/core/img/logo.png" alt="">
        </a>
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item">
              <router-link :to="'/'" class="nav__link">Главная</router-link>
              <router-link :to="'/news'" class="nav__link">Новости</router-link>
              <router-link :to="'/idea'" class="nav__link">Идеи</router-link>
              <router-link :to="'/orders'" class="nav__link">Опросы</router-link>
              <router-link :to="'/calculator'" class="nav__link">Калькулятор</router-link>
              <router-link :to="'/javaScript'" class="nav__link">JavaScript</router-link>
              <router-link :to="'/tablitsa'" class="nav__link">Таблица</router-link>
              <router-link :to="'/bitcoin'" class="nav__link">Биткоин</router-link>
            </li>
          </ul>
        </nav>
      </div>

    </header>


    <footer class="footer">
      <div class="container">
        
      </div>
    </footer>
    

    <router-view></router-view>
    
  </div>
</template>

<script>

export default {

  data() {
    return {
     
    };
  }

}
</script>

<style lang="less">
@import "./assets/core/core/props";
@import './assets/core/core/main';



  
</style>