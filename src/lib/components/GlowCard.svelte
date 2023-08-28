<script lang="ts">
  let isMouseHover = false;
  let element: HTMLDivElement;
  let glowOffsetX = 0;
  let glowOffsetY = 0;
  let className = '';

  export { className as class };
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
  class="overflow-hidden relative {className}"
>
  <div class="absolute duration-0 blur-[96px] rounded-[50%]" style="left: {glowOffsetX}px; top: {glowOffsetY}px">
    <div
      class="relative opacity-25 w-48 h-48 -translate-x-1/2 -translate-y-1/2 duration-500 {isMouseHover
        ? 'bg-white/30 scale-100'
        : 'bg-transparent scale-0'}"
    />
  </div>

  <div class="relative">
    <slot />
  </div>
</div>
