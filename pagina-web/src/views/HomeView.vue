<template>
  <div class="home-container">
    <!-- Imagen de fondo con la leyenda centrada -->
    <div class="hero-section">
      <div class="overlay">
        <h1>EXCELENCIA A TU ALCANCE</h1>
      </div>
    </div>
    <!-- Aquí va el contenido adicional, si lo tienes -->
  </div>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style scoped>
/* Contenedor principal */
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que la página ocupe al menos toda la altura de la pantalla */
}

/* Hero Section (Imagen de fondo) */
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh; /* Ajusta la altura de la imagen para que ocupe toda la altura de la pantalla */
  background: url('https://image.jimcdn.com/app/cms/image/transf/none/path/s3bde20fc7828c34c/backgroundarea/ia830c2cf0bf7a99d/version/1507837965/image.jpg') no-repeat center center;
  background-size: cover;
}

.hero-section .overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.5); /* Fondo claro semi-transparente */
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.hero-section h1 {
  font-size: 3rem;
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: #000033; /* Color azul oscuro para resaltar las letras */
  text-shadow: 3px 3px 15px rgba(255, 255, 255, 0.7); /* Sombra blanca para mejorar el contraste */
}

/* Media Queries */
@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 1.5rem;
  }
}
</style>
