<template>
  <div class="contact-container">
    <!-- Imagen de fondo -->
    <div class="image-container">
      <img
        src="https://image.jimcdn.com/app/cms/image/transf/none/path/s3bde20fc7828c34c/backgroundarea/ia830c2cf0bf7a99d/version/1507837965/image.jpg"
        alt="Imagen de contacto"
      />
    </div>

    <div class="info-container">
      <div class="map-section">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3742.852286201413!2d-97.949429!3d20.26496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDE1JzUzLjkiTiA5N8KwNTYnNTcuOSJX!5e0!3m2!1ses-419!2smx!4v1740772347376!5m2!1ses-419!2smx" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p class="address">
          📍<strong> Dirección:</strong> 
          Fraccionamiento Rincón del Bosque,  
          Calle Pino No.15,  
          Col. Lomas Verdes, Xicotepec de Juárez, Puebla.
        </p>
      </div>

      <!-- Teléfono y Correo -->
      <div class="contact-info">
        <div class="contact-box">
          <p>📞 <strong>Teléfono:</strong> +52 123 456 7890</p>
          <p>📧 <strong>Correo:</strong> contacto@latcon.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
};
</script>

<style scoped>
/* Contenedor principal */
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  font-family: Arial, sans-serif;
}

.image-container {
  width: 100%;
}

/* Imagen de fondo */
.image-container img {
  width: 100%;
  height: 70vh;
  display: block;
}

/* Sección de información en columnas */
.info-container {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 20px;
  flex-wrap: wrap;
}

/* Mapa */
.map-section {
  flex: 1;
  text-align: left;
  padding: 20px;
  min-width: 300px;
}

/* Dirección */
.address {
  font-size: 1rem;
  color: #333;
  margin-top: 10px;
}

/* Contacto */
.contact-info {
  flex: 1;
  text-align: left;
  padding: 20px;
  min-width: 300px;
}

/* Cuadro para teléfono y correo */
.contact-box {
  background-color: #f4f4f4;
  padding: 30px; /* Aumenté el padding para hacerlo más grande */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.contact-box p {
  margin: 15px 0; /* Espaciado mayor entre las líneas */
}

.contact-box strong {
  color: #333;
  font-size: 1.1rem; /* Aumenté el tamaño de la fuente */
}
</style>
