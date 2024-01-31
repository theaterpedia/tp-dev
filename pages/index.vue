<template>
  <!-- #TODO _7 ReEnable SfContent-Logic></!-->
  <!-- div v-for="(component, index) in content" :key="`${component.fields.component}-${index}`">
    <RenderContent :content="component.fields.content" />
  </!-->
  <!-- ContentDoc /-->
  <NuxtLayout>
  <h1 class="text-4xl font-mona">DEV && Admin-Page</h1>
    <p class="text-xl font-mona">
      here you find dev-content for testing-purpose and for managing the migration from the vsf-shop to the pruvious-driven setup
    </p>
    <p class="text-xl font-mona">
      premium
    </p>
    <p class="text-xl font-mono">
      premium
    </p>
    </NuxtLayout>
</template>

<script setup lang="ts">
// import { useSfContent } from '../composables/useSfContent';
// const { getContent, data: content } = useSfContent('home-page');

// getContent();
</script>
