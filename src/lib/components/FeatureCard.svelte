<script lang="ts">
  import Icon from '@iconify/svelte';

  export let icon: string;
  export let header: string;
  export let isSpecial = false;
</script>

<div
  class="border-[1px] bg-neutral p-4 rounded-lg flex flex-col gap-4 {isSpecial
    ? 'border-accent shadow-accent/10 shadow-2xl'
    : 'border-base-content/20'}"
>
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
