<script lang="ts">
  import { scale } from 'svelte/transition';

  export let componentClass = 'relative card overflow-hidden';
  export let glowClass = 'rounded-[50%] bg-white/50 blur-3xl';
  export let glowWidth = '4rem';
  export let glowHeight = '4rem';
  export let glowOffsetX = '-50%';
  export let glowOffsetY = '-50%';
  export let duration = 300;

  let element: HTMLDivElement;
  let isHovering = false;
  let glowX = 0;
  let glowY = 0;
</script>

<div
  bind:this={element}
  class={componentClass}
  on:pointerenter={() => (isHovering = true)}
  on:pointerleave={() => (isHovering = false)}
  on:pointermove={(o) => {
    const rect = element.getBoundingClientRect();
    glowX = o.clientX - rect.left;
    glowY = o.clientY - rect.top;
  }}
>
  {#if isHovering}
    <div
      transition:scale={{ duration }}
      class="{glowClass} pointer-events-none absolute duration-0"
      style="
        min-width: {glowWidth}; min-height: {glowHeight};
        left: {glowX}px; top: {glowY}px;
        transform: translate({glowOffsetX}, {glowOffsetY});"
    />
  {/if}

  <div class="relative z-10 h-full"><slot /></div>
</div>
