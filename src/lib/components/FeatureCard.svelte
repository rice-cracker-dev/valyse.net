<script lang="ts">
  import Icon from '@iconify/svelte';

  export let icon: string;
  export let header: string;
  export let isSpecial = false;

  let isMouseHover = false;
  let element: HTMLDivElement;
  let glowOffsetX = 0;
  let glowOffsetY = 0;
</script>

<div
  on:pointerenter={() => (isMouseHover = true)}
  on:pointerleave={() => (isMouseHover = false)}
  on:pointermove={(o) => {
    if (isMouseHover) {
      const bounding = element.getBoundingClientRect();
      glowOffsetX = o.clientX - bounding.left;
      glowOffsetY = o.clientY - bounding.top;
    }
  }}
  bind:this={element}
  class="overflow-hidden relative border-[1px] bg-neutral/50 p-4 rounded-lg flex flex-col gap-4 shadow-2xl {isSpecial
    ? 'border-accent shadow-accent/10 bg-neutral'
    : 'border-base-content/20 shadow-transparent hover:bg-neutral hover:border-accent hover:shadow-accent/10'}"
>
  <div class="absolute duration-0 blur-3xl rounded-[50%]" style="left: {glowOffsetX}px; top: {glowOffsetY}px">
    <div
      class="relative w-16 h-16 -translate-x-1/2 -translate-y-1/2 duration-500 {isMouseHover
        ? 'bg-white/30 scale-100'
        : 'bg-transparent scale-0'}"
    />
  </div>
  <div class="flex items-center gap-4">
    <div class="p-2 border-[1px] border-base-content/20 bg-base-100 rounded-lg">
      <Icon {icon} class="text-2xl" />
    </div>
    <p class="font-semibold">{header}</p>
  </div>

  <div class="text-base-content/50">
    <slot />
  </div>
</div>
