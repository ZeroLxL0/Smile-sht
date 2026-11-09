import { reactive } from 'vue'

// Estado temporal en memoria: las respuestas no se guardan en localStorage ni en el servidor.
export const assessment = reactive({
  answers: Array(9).fill(null),
  activityDone: false,
  activityScore: 0,
})

export function resetAssessment() {
  assessment.answers = Array(9).fill(null)
  assessment.activityDone = false
  assessment.activityScore = 0
}

export function getTotalScore() {
  return assessment.answers.reduce((sum, value) => sum + (Number(value) || 0), 0)
}

export function getBand(score) {
  if (score <= 4) return {
    animal: 'BROTE', species: 'Mapache', emoji: '🦝',
    band: 'Pocos síntomas reportados',
    message: 'Como Brote, puedes seguir explorando lo que te hace bien. Mantén tus vínculos, descanso y actividades significativas.',
    suggestion: 'Elige una actividad pequeña que disfrutes y compártela con alguien de confianza.',
  }
  if (score <= 9) return {
    animal: 'DOPE', species: 'Gato', emoji: '🐈',
    band: 'Síntomas leves reportados',
    message: 'Como Dope, quizá necesites un espacio tranquilo para reconocer cómo te has sentido. No tienes que resolver todo hoy.',
    suggestion: 'Prueba hablar con alguien de confianza y cuidar una rutina sencilla de sueño y alimentación.',
  }
  if (score <= 14) return {
    animal: 'FROG', species: 'Rana', emoji: '🐸',
    band: 'Síntomas moderados reportados',
    message: 'Como Frog, estás en un momento en el que pedir compañía puede hacer diferencia. Lo que sientes merece atención.',
    suggestion: 'Considera conversar con un profesional de salud mental para revisar estos resultados.',
  }
  if (score <= 19) return {
    animal: 'SERO', species: 'Canario', emoji: '🐤',
    band: 'Síntomas moderadamente altos reportados',
    message: 'Como Sero, no tienes que cargar con todo en silencio. Mereces apoyo cercano y atención profesional.',
    suggestion: 'Busca una valoración profesional pronto y cuéntale a alguien de confianza cómo te has sentido.',
  }
  return {
    animal: 'AURORA', species: 'Araña', emoji: '🕷️',
    band: 'Síntomas altos reportados',
    message: 'Como Aurora, mereces apoyo y cuidado ahora. Esta puntuación no define quién eres ni significa que no haya salida.',
    suggestion: 'Contacta cuanto antes a un profesional de salud mental o a un servicio de atención. Pide a alguien de confianza que te acompañe.',
  }
}
