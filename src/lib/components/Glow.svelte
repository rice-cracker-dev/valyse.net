<script lang="ts">
  export let width = '32rem';
  export let height = '32rem';
  export let positionX = '0';
  export let positionY = '0';
  export let offsetX = '0';
  export let offsetY = '0';
  export let alignmentX: 'left' | 'right' = 'left';
  export let alignmentY: 'top' | 'bottom' = 'top';
  export let opacity = '15%';
</script>

<div
  class="absolute rounded-[50%] blur-[96px] bg-gradient-to-b from-[#5277FF] via-[#FF7475] to-[#FFD055] overflow-hidden"
  style="width: {width}; height: {height}; {alignmentX}: {positionX}; {alignmentY}: {positionY}; opacity: {opacity}; transform: translate({offsetX}, {offsetY});"
/>
