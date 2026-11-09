<template>
  <main class="page-wrap narrow">
    <div class="eyebrow">AUTOEVALUACIÓN · PHQ-9</div>
    <h1>Hablemos de cómo<br /><em>han sido tus días.</em></h1>
    <p class="lead">Lee cada frase y selecciona la opción que mejor describa tu experiencia durante las últimas dos semanas.</p>
    <v-alert type="info" variant="tonal" rounded="lg" class="mb-6">
      Esta herramienta es un tamizaje orientativo para personas adultas (18+), no un diagnóstico. Si eres menor de 18 años, busca apoyo de un adulto de confianza y un profesional.
    </v-alert>

    <div class="progress-line">
      <span>Progreso</span><strong>{{ answered }} / 9</strong>
      <v-progress-linear :model-value="answered / 9 * 100" color="primary" rounded height="8" />
    </div>

    <div class="questions">
      <QuestionCard
        v-for="(q, i) in questions" :key="i"
        :index="i" :question="q" :model-value="assessment.answers[i]"
        @update:model-value="setAnswer(i, $event)"
      />
    </div>

    <v-alert v-if="selfHarmConcern" type="warning" variant="tonal" rounded="lg" class="my-5">
      <strong>Queremos tomar esta respuesta en serio.</strong>
      Si has pensado en hacerte daño o en que sería mejor no estar, no esperes al resultado: habla ahora con alguien de confianza y busca apoyo profesional. Si estás en peligro inmediato o no puedes mantenerte a salvo, llama al 911. En México puedes llamar gratis a Línea de la Vida: 800 911 2000, 24/7.
    </v-alert>

    <div class="form-actions">
      <v-btn variant="text" to="/">Volver</v-btn>
      <v-btn color="primary" size="large" rounded="pill" :disabled="answered !== 9" @click="$router.push('/actividad')">
        Continuar a la actividad <v-icon end>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import QuestionCard from '../components/QuestionCard.vue'
import { assessment } from '../stores/assessment'

const router = useRouter()
const questions = [
  'Poco interés o placer en hacer las cosas.',
  'Sentirte decaído/a, deprimido/a o sin esperanza.',
  'Dificultad para dormir, permanecer dormido/a o dormir demasiado.',
  'Sentirte cansado/a o con poca energía.',
  'Poco apetito o comer en exceso.',
  'Sentirte mal contigo mismo/a; sentir que eres un fracaso o que has decepcionado a tu familia o a ti mismo/a.',
  'Dificultad para concentrarte en actividades, como leer o trabajar.',
  'Moverte o hablar tan lento que otras personas podrían notarlo; o lo contrario, estar tan inquieto/a que te mueves mucho más de lo habitual.',
  'Pensamientos de que estarías mejor muerto/a o de hacerte daño de alguna manera.',
]
const answered = computed(() => assessment.answers.filter(v => v !== null).length)
const selfHarmConcern = computed(() => Number(assessment.answers[8]) > 0)
function setAnswer(index, value) {
  assessment.answers[index] = value
}
</script>
