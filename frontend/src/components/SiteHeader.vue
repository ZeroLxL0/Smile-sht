<template>
  <header class="site-header">
    <RouterLink to="/" class="brand">
      <span class="brand-mark">✳</span>
      <span>BROTE <small>espacio de bienestar</small></span>
    </RouterLink>
    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/evaluacion">Autoevaluación</RouterLink>
      <a href="#acerca" @click.prevent="$router.push('/#acerca')">Acerca de</a>
    </nav>
  </header>
</template>
