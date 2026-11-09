<template>
  <main>
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow">UN MOMENTO PARA TI</div>
        <h1>¿Cómo te has<br /><em>sentido últimamente?</em></h1>
        <p>Un espacio sencillo para hacer una pausa, reconocer tus emociones y descubrir un pequeño paso de cuidado personal.</p>
        <div class="hero-actions">
          <v-btn color="primary" size="x-large" rounded="pill" to="/evaluacion" append-icon="mdi-arrow-right">Comenzar</v-btn>
          <span>9 preguntas · 5 minutos aprox.</span>
        </div>
      </div>
      <div class="hero-art">
        <div class="sun"></div>
        <div class="plant">🌱</div>
        <div class="art-note">Crecer también<br />es pedir apoyo.</div>
      </div>
    </section>

    <section class="intro-grid">
      <article class="intro-card">
        <span class="card-icon">🌿</span>
        <h3>Un espacio sin juicios</h3>
        <p>No hay respuestas buenas o malas. Contesta con honestidad y a tu propio ritmo.</p>
      </article>
      <article class="intro-card">
        <span class="card-icon">🧭</span>
        <h3>Una guía, no un diagnóstico</h3>
        <p>El cuestionario orienta sobre síntomas recientes. Solo un profesional puede realizar una evaluación clínica.</p>
      </article>
      <article class="intro-card">
        <span class="card-icon">🧩</span>
        <h3>Una pausa interactiva</h3>
        <p>Al terminar, podrás realizar una actividad breve de atención. Su resultado no modifica la puntuación de salud.</p>
      </article>
    </section>

    <section id="acerca" class="about">
      <div>
        <div class="eyebrow">CÓMO FUNCIONA</div>
        <h2>Pequeños pasos también cuentan.</h2>
      </div>
      <p>Primero responderás preguntas sobre las últimas dos semanas. Después harás un juego breve de atención y recibirás un resultado simbólico representado por uno de cinco animales.</p>
    </section>

    <section class="notice">
      <v-icon icon="mdi-shield-heart-outline" size="28" />
      <p><strong>Tu privacidad importa.</strong> Esta demostración mantiene las respuestas solo en memoria mientras navegas. No recopila datos personales ni sustituye atención médica.</p>
    </section>
  </main>
</template>
