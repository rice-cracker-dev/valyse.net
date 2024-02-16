<script lang="ts">
  import { default as Particles, particlesInit } from '@tsparticles/svelte';
  import { loadFull } from 'tsparticles';
  import { onMount } from 'svelte';

  let component: typeof Particles;
  let className = '';

  export let options: object;
  export { className as class };

  onMount(async () => {
    component = await import('@tsparticles/svelte').then((o) => o.default);
  });

  void particlesInit(async (engine) => {
    loadFull(engine);
  });
</script>

{#if component}
  <svelte:component this={component} class={className} {options} />
{/if}
