<script lang="ts">
  import Icon from '@iconify/svelte';
  import FancyCard from './FancyCard.svelte';

  export let title: string;
  export let icon = 'ph:question';
  export let isSpecial = false;
</script>

<FancyCard
  componentClass="card relative overflow-hidden p-4 {isSpecial
    ? 'variant-outline-primary'
    : 'variant-outline-surface'}"
>
  <div class="flex items-center gap-2">
    <div class="card variant-filled-surface p-2">
      <Icon {icon} height={24} />
    </div>

    <h4 class="h4 font-semibold" class:text-gradient-heading={isSpecial}>{title}</h4>
  </div>

  <div class="text-surface-600-300-token mt-2">
    <slot />
  </div>
</FancyCard>
