<template>
  <div id="vue-app">
    <nav id="nav" class="text-center">
      <div class="container">
          <div class="nav-container d-flex justify-content-between align-items-center">
              <div id="logo" class="d-flex flex-row justify-content-center align-items-center">
                <img id="logo" alt="Vue logo" src="./assets/trainers.svg">
                <h1 class="h1 ml-5"><router-link to="/">Run the world!</router-link></h1>
              </div>
              <ul id="menu" class="d-flex justify-content-center align-items-center">
              <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/app-results">Best score</router-link></li>
                <li><router-link to="/personal-race-gallery">Personal race gallery</router-link></li>
                <li><router-link to="/registration">Register/Login</router-link></li>
              </ul>
          </div>
        </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
body {
    background-image: url(assets/background.svg);
    background-size: cover;
    background-repeat: no-repeat;
    object-fit: cover;
    width: 100%;
    height: 100%;
    font-family: 'Quicksand', sans-serif;
    font-size: 100%;
}

#logo {
    width: 80px;
}

#logo .h1 {
    font: 700 1.1rem/1.6rem 'Montserrat';
}
.nav-container {
    margin-bottom: 60px;
}
#menu li {
    list-style: none;
}
#menu li a{
    cursor: pointer;
    font: 500 1.25rem/1.75rem 'Montserrat';
    text-transform: lowercase;
    color: #fff;
    margin: 20px;
    padding: 5px 10px;
    background-color: #31a85e;
    transition: background-color .7s ease;
}

#menu li a:hover {
    background-color: transparent;
    color: #000;
}

#vue-app {
    padding: 30px 0;
}

#vue-app .form {
    max-width: 500px;
    margin: 0 auto;
}

#vue-app input {
    min-height: 50px;
    font: 500 1.1rem/1.6rem 'Quicksand';
    background-color: #fff;
    border-radius: 0;
}

#vue-app label {
    font: 500 1.1rem/1.6rem 'Quicksand';
}

#vue-app button {
    background-color: #206d3d;
    color: #fff;
    padding: .375rem 1rem;
    font: 500 1.1rem/1.6rem 'Quicksand';
    border: none;
    border-radius: 0;
    margin: 10px 10px 10px 0;
}

#vue-app .result-div {
    font: 600 2rem/3rem 'Quicksand';
    color: #fff183;
}
</style>
