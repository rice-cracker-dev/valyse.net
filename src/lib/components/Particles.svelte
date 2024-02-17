<script lang="ts">
  import type { IOptions, RecursivePartial } from '@tsparticles/engine';
  import { default as Particles } from '@tsparticles/svelte';
  import { onMount } from 'svelte';

  let component: typeof Particles;
  let className = '';

  export let options: RecursivePartial<IOptions>;
  export { className as class };

  onMount(async () => {
    component = await import('@tsparticles/svelte').then((o) => o.default);
  });
</script>

{#if component}
  <svelte:component this={component} class={className} {options} />
{/if}
