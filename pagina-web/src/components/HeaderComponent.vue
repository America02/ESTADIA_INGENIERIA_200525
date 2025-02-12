<template>
    <header>
      <nav>
        <div class="logo-container">
          <!-- Logotipo en la izquierda -->
          <img src="@/assets/logo.png" alt="Logotipo" class="logo" />
          <!-- Texto "LATCON" debajo de la imagen -->
          <p class="logo-text">LATCON</p>
        </div>
        <ul class="menu-items">
          <li v-for="(item, index) in menuItems" :key="index">
            <router-link :to="item.path" active-class="active">
              <i v-if="item.icon" :class="item.icon"></i> {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { name: "", path: "/", icon: "fas fa-home" }, // Ícono de la casita
          { name: "NOSOTROS", path: "/nosotros" },
          { name: "SERVICIOS", path: "/servicios" },
          { name: "CONTACTO", path: "/contacto" },
          { name: "AVISO DE PRIVACIDAD", path: "/aviso-de-privacidad" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  header {
    background-color: #FBE9E7;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo-container {
    display: flex;
    flex-direction: column; /* Alinea la imagen y el texto en columna */
    justify-content: center;
    align-items: center; /* Centra la imagen y el texto */
  }
  
  .menu-items {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
    justify-content: flex-end;
  }
  
  nav li {
    position: relative;
  }
  
  nav a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    color: #FF5722;
    padding: 10px 15px;
    transition: 0.3s ease;
    font-family: Arial, sans-serif;
    font-size: 16px;
    border-radius: 25px;
  }
  
  nav a.active, nav a:hover {
    background-color: #FFCCBC;
    border-radius: 25px;
  }
  
  nav i {
    margin-right: 8px;
    font-size: 26px;
  }
  
  /* Estilo para el logotipo */
  .logo {
    width: 100px; /* Tamaño de la imagen */
    height: auto;
    margin-bottom: 5px; /* Espacio entre la imagen y el texto */
  }
  
  /* Estilo para el texto LATCON */
  .logo-text {
    font-family: Arial, sans-serif;
    font-weight: bold;
    color: #FF5722;
    font-size: 25px; /* El mismo tamaño que la imagen */
    margin: 0;
  }
  
  /* Media Query para pantallas pequeñas */
  @media (max-width: 768px) {
    nav {
      flex-direction: column; /* Cambia a disposición vertical en pantallas pequeñas */
      align-items: center;
    }
  
    .menu-items {
      flex-direction: column; /* Hace que los elementos del menú se apilen verticalmente */
      gap: 10px;
      align-items: center;
      margin-top: 20px; /* Da espacio superior al menú */
    }
  
    .logo-container {
      margin-bottom: 15px; /* Espacio entre el logo y el menú */
    }
  
    nav a {
      font-size: 14px; /* Ajusta el tamaño de la fuente en pantallas pequeñas */
      padding: 8px 12px; /* Ajusta el tamaño del botón */
    }
  
    .logo {
      width: 80px; /* Ajusta el tamaño del logo en pantallas pequeñas */
    }
  
    .logo-text {
      font-size: 20px; /* Ajusta el tamaño del texto en pantallas pequeñas */
    }
  }
  
  /* Media Query para pantallas muy pequeñas */
  @media (max-width: 480px) {
    nav a {
      font-size: 12px; /* Reduce aún más el tamaño de la fuente en pantallas pequeñas */
    }
  
    .logo {
      width: 60px; /* Ajusta el tamaño del logo en pantallas muy pequeñas */
    }
  
    .logo-text {
      font-size: 18px; /* Ajusta el tamaño del texto en pantallas muy pequeñas */
    }
  }
  </style>
  