<script setup lang="ts"></script>

<template>
  <article class="card">
    <header class="card__header">
      <slot name="header"></slot>
    </header>

    <div class="card__body">
      <slot></slot>
    </div>
  </article>
</template>

<style scoped>
.card {
  padding: 20px 32px;
  background-color: var(--primary-bg-color);
  border-radius: 16px;
}

.card__header {
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
}

.card__body {
  padding: 20px 0;
}
</style>
