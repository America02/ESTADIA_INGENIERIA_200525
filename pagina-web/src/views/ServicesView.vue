<template>
  <div class="services-container">
    <!-- Imagen a todo lo largo de la pantalla -->
    <div class="image-container">
      <img
        src="https://innovapucp.pucp.edu.pe/wp-content/uploads/2022/11/laboratorio-mecanica-suelos-7.jpg"
        alt="Laboratorio de Mecánica de Suelo"
      />
    </div>

    <!-- Texto centrado debajo de la imagen -->
    <div class="text-container">
      <h1>Servicios</h1>
      <p>Laboratorio en Mecánica de Suelo</p>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor principal */
.services-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

/* Imagen que ocupa todo el ancho */
.image-container {
  width: 100%;
}

.image-container img {
  width: 100%;
  height: 65vh;
  display: block;
}

/* Texto centrado */
.text-container {
  margin-top: 20px;
}

.text-container h1 {
  font-size: 2rem;
  font-weight: bold;
  color: #000033;
}

.text-container p {
  font-size: 1.5rem;
  font-family: Arial, sans-serif;
  color: #000;
}
</style>
