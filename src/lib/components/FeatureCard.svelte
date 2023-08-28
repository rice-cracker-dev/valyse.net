<script lang="ts">
  import Icon from '@iconify/svelte';
  import GlowCard from './GlowCard.svelte';

  export let icon: string;
  export let header: string;
  export let isSpecial = false;
</script>

<GlowCard
  class="bg-neutral/50 border-[1px] p-6 rounded-lg shadow-2xl {isSpecial
    ? 'border-accent shadow-accent/25 bg-neutral'
    : 'border-base-content/20 shadow-transparent hover:bg-neutral hover:border-accent hover:shadow-accent/10'}"
>
  <div class="flex flex-col gap-4">
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
</GlowCard>
