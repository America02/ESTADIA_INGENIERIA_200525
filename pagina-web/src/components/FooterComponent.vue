<template>
  <footer>
    <div class="footer-content">
      <div class="footer-left">
        <p>TELÉFONO: +52 764 764 4756</p>
      </div>
      <div class="footer-center">
        <p>CORREO: latcon_labxico@hotmail.com</p>
      </div>
      <div class="footer-right">
        <div class="logo-container">
          <img src="@/assets/logo.png" alt="Logotipo" class="logo" />
          <p class="logo-text">LATCON</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

body, html {
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* Footer */
footer {
  background-color: #000033;
  color: white;
  padding: 1rem;
  font-family: Arial, sans-serif;
  width: 100%;
  margin-top: auto; /* Asegura que el footer se coloque al final */
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-left, .footer-center, .footer-right {
  flex: 1;
}

.footer-left, .footer-center {
  text-align: center;
}

.footer-right {
  text-align: right;
}

/* Estilos para el logo */
.logo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 60px;
  height: auto;
  margin-bottom: 5px;
}

.logo-text {
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: #FF5722;
  font-size: 30px;
  margin: 0;
}

/* Media Queries */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-left, .footer-center, .footer-right {
    flex: none;
    margin-bottom: 10px;
  }

  .footer-right {
    margin-top: 15px;
  }

  .logo {
    width: 50px;
  }

  .logo-text {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .logo {
    width: 40px;
  }

  .logo-text {
    font-size: 20px;
  }

  .footer-content {
    padding: 0.5rem;
  }

  .footer-left, .footer-center, .footer-right {
    margin-bottom: 5px;
  }
}
</style>
