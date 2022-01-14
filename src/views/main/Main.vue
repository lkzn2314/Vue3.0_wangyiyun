<template>
  <WebHeader />
  <router-view />
  <WebFooter />
  <WebPlayer />
</template>

<script lang="ts">
import WebHeader from '@/components/web-header/WebHeader.vue';
import WebFooter from '@/components/web-footer/WebFooter.vue';
import WebPlayer from '../player/PlayerBar.vue';

export default {
  name: 'Main',
  components: {
    WebHeader,
    WebFooter,
    WebPlayer,
  },
};
</script>

<style scoped></style>
