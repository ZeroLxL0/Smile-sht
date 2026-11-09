<template>
  <main class="page-wrap narrow" v-if="valid">
    <div class="eyebrow">TU ESPACIO DE BIENESTAR</div>
    <h1>Gracias por darte<br /><em>este momento.</em></h1>
    <AnimalResult :result="result" />
    <v-card class="score-card" rounded="xl" elevation="0">
      <div>
        <span class="score-caption">PUNTUACIÓN ORIENTATIVA</span>
        <div class="score-number">{{ score }}<small> / 27</small></div>
      </div>
      <div class="score-copy">
        <strong>{{ result.band }}</strong>
        <p>Este rango describe la frecuencia de síntomas que reportaste; no confirma ni descarta un diagnóstico.</p>
      </div>
    </v-card>

    <v-alert v-if="selfHarmConcern" type="error" variant="tonal" rounded="lg" class="my-5">
      <strong>Tu respuesta a la pregunta 9 indica que necesitas apoyo adicional.</strong>
      Por favor, habla hoy con alguien de confianza y contacta a un profesional. Si existe peligro inmediato, llama al 911. En México, Línea de la Vida: 800 911 2000, gratuita y disponible 24/7.
    </v-alert>

    <section class="next-steps">
      <div class="eyebrow">QUÉ PUEDES HACER AHORA</div>
      <h2>Un siguiente paso, sin presión.</h2>
      <ul>
        <li>Comparte cómo te has sentido con alguien en quien confíes.</li>
        <li>Considera una valoración con un profesional de salud mental, especialmente si los síntomas afectan tu vida diaria.</li>
        <li>Vuelve a revisar cómo te sientes, pero no uses esta herramienta como sustituto de seguimiento clínico.</li>
      </ul>
      <p class="activity-complete">Actividad completada: {{ assessment.activityScore }} de 5 hojas encontradas. (No afecta tu resultado de bienestar).</p>
    </section>

    <div class="form-actions">
      <v-btn variant="text" to="/">Inicio</v-btn>
      <v-btn color="primary" rounded="pill" @click="restart">Volver a comenzar</v-btn>
    </div>
    <p class="source-note">Instrumento de referencia: PHQ-9, Kroenke, Spitzer y Williams (2001). La interpretación debe revisarse con un profesional.</p>
  </main>
  <main v-else class="page-wrap narrow">
    <h1>Primero completa la autoevaluación.</h1>
    <v-btn color="primary" to="/evaluacion">Ir a las preguntas</v-btn>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import AnimalResult from '../components/AnimalResult.vue'
import { assessment, getBand, getTotalScore, resetAssessment } from '../stores/assessment'

const router = useRouter()
const valid = computed(() => assessment.answers.every(v => v !== null) && assessment.activityDone)
const score = computed(() => getTotalScore())
const result = computed(() => getBand(score.value))
const selfHarmConcern = computed(() => Number(assessment.answers[8]) > 0)
function restart() {
  resetAssessment()
  router.push('/evaluacion')
}
</script>
