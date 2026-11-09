<template>
  <v-card class="animal-card" rounded="xl" elevation="0">
    <div class="animal-emoji">{{ result.emoji }}</div>
    <div class="animal-label">{{ result.animal }} · {{ result.species }}</div>
    <h2>{{ result.band }}</h2>
    <p>{{ result.message }}</p>
    <div class="suggestion">
      <strong>Un paso amable</strong>
      <span>{{ result.suggestion }}</span>
    </div>
  </v-card>
</template>

<script setup>
defineProps({ result: { type: Object, required: true } })
</script>
