<template>
  <div class="nosotros-container">
    
    <div class="hero-section"></div>

    <div class="content">
      <div class="text-section">
        <h2 class="title left">NOSOTROS</h2>
        <p class="description">
          En Laboratorio y Apoyo Técnico para la Construcción, nos dedicamos a brindar soluciones innovadoras y de calidad,
          enfocadas en satisfacer las necesidades de nuestros clientes. Con un equipo comprometido y profesional,
          trabajamos cada día para construir relaciones de confianza y ofrecer un servicio que supere las expectativas.
        </p>
      </div>

      <div class="text-section center">
        <h2 class="title mission">MISIÓN</h2>
        <p class="description">
          Proveer servicios y soluciones de alta calidad que impulsen el crecimiento y la satisfacción de nuestros clientes, 
          apoyándonos en la innovación, la excelencia y un equipo humano comprometido.
        </p>
      </div>

      <div class="text-section">
        <h2 class="title right">VISIÓN</h2>
        <p class="description">
          Ser reconocidos como líderes en nuestro sector, destacándonos por nuestra innovación, calidad y compromiso, 
          convirtiéndonos en la primera opción para nuestros clientes.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor principal */
.nosotros-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Imagen de fondo */
.hero-section {
  width: 100%;
  height: 65vh; /* Ajusta según sea necesario */
  background: url('https://image.jimcdn.com/app/cms/image/transf/none/path/s3bde20fc7828c34c/backgroundarea/ia830c2cf0bf7a99d/version/1507837965/image.jpg') no-repeat center center;
  background-size: cover;
}

/* Contenedor del contenido */
.content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 2rem;
}

/* Estilos para cada sección de texto */
.text-section {
  flex: 1;
  min-width: 300px;
  padding: 1rem;
}

/* Títulos */
.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

/* Colores específicos */
.left {
  color: #000033;
}

.mission {
  color: #FF5722;
}

.right {
  color: #000033;
}

/* Descripción */
.description {
  font-family: Arial, sans-serif;
  font-size: 1rem;
  text-align: justify;
}

/* Ajustes responsivos */
@media (max-width: 768px) {
  .content {
    flex-direction: column;
    text-align: center;
  }

  .text-section {
    width: 100%;
  }
}
</style>
