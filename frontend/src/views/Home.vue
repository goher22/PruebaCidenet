<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Prueba Cidenet</a>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/Registro" class="nav-link">Registro de usuario</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Usuarios" class="nav-link">Lista de usuario</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
  .router-link-active{
    color:black !important;
  }
</style>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'Home',
  methods:{
    ...mapActions(['load_countries','load_area','load_document'])
  },
  created: function () {
    this.load_countries()
    this.load_area()
    this.load_document()
  }
}
</script>
