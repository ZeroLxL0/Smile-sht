<template>
  <main class="page-wrap narrow">
    <div class="eyebrow">PAUSA INTERACTIVA · 60 SEGUNDOS</div>
    <h1>Un minuto para<br /><em>volver al presente.</em></h1>
    <p class="lead">Encuentra y toca las cinco hojas. Hazlo sin prisa; esta actividad es solo un descanso de atención y no mide tu salud mental.</p>

    <v-card class="game-card" rounded="xl" elevation="0">
      <div class="game-top">
        <span>HOJAS ENCONTRADAS</span>
        <strong>{{ found }} / 5</strong>
      </div>
      <v-progress-linear :model-value="found * 20" color="primary" rounded height="8" />
      <div class="leaf-grid">
        <button v-for="(item, i) in leaves" :key="i" class="leaf-cell" :class="{ found: item.found }" :disabled="item.found" @click="findLeaf(i)">
          {{ item.found ? '🍃' : item.icon }}
        </button>
      </div>
      <p class="game-message">{{ message }}</p>
      <div class="game-actions">
        <v-btn variant="text" @click="resetGame">Reiniciar</v-btn>
        <v-btn color="primary" rounded="pill" :disabled="found !== 5" @click="finish">Ver mi resultado</v-btn>
      </div>
    </v-card>
    <p class="tiny-note">La puntuación de la autoevaluación se calcula únicamente con tus nueve respuestas. El juego no suma ni resta puntos.</p>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { assessment } from '../stores/assessment'

const router = useRouter()
const icons = ['🌼', '🌿', '🍀', '🌱', '🌸', '🍂', '🌾', '🪴', '🌻']
const leaves = ref(icons.map(icon => ({ icon, found: false })).sort(() => Math.random() - 0.5))
const found = computed(() => leaves.value.filter(x => x.found).length)
const message = computed(() => found.value === 5 ? '¡Lo lograste! Tómate un momento para respirar.' : 'Busca cinco hojas. Puedes tomarte el tiempo que necesites.')
function findLeaf(index) {
  leaves.value[index].found = true
}
function resetGame() {
  leaves.value = icons.map(icon => ({ icon, found: false })).sort(() => Math.random() - 0.5)
}
function finish() {
  assessment.activityDone = true
  assessment.activityScore = found.value
  router.push('/resultado')
}
</script>
