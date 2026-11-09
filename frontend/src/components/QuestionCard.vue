<template>
  <v-card class="question-card" rounded="xl" elevation="0">
    <div class="question-meta">PREGUNTA {{ index + 1 }} DE 9</div>
    <h2>{{ question }}</h2>
    <p class="question-hint">Durante las últimas dos semanas, ¿con qué frecuencia te ha afectado esto?</p>
    <v-radio-group :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)" hide-details>
      <v-radio v-for="(option, i) in options" :key="i" :label="option" :value="i" color="primary" class="answer-option" />
    </v-radio-group>
  </v-card>
</template>

<script setup>
defineProps({
  index: { type: Number, required: true },
  question: { type: String, required: true },
  modelValue: { type: Number, default: null },
})
defineEmits(['update:modelValue'])
const options = [
  'Nunca',
  'Varios días',
  'Más de la mitad de los días',
  'Casi todos los días',
]
</script>
