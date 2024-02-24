<script lang="ts">
  import FancyCard from './FancyCard.svelte';
  import Icon from '@iconify/svelte';

  export let isSpecial = false;
  export let features: { icon: string; label: string; special?: boolean }[] = [];
</script>

<FancyCard
  componentClass="card font-heading-token relative overflow-hidden p-4 {isSpecial
    ? 'variant-outline-primary shadow-2xl shadow-primary-400/25'
    : 'variant-outline-surface'}"
>
  <div class="flex h-full flex-col items-start gap-2">
    <div class="text-surface-600-300-token text-xs uppercase tracking-[0.25rem]">
      <slot name="productName" />
    </div>
    <div class="my-2 text-2xl">
      <slot name="price" />
    </div>
    <p class="text-surface-600-300-token">Everything you need to start:</p>

    <div class="text-surface-600-300-token flex flex-col gap-1">
      {#each features as feature}
        <p class="inline-flex items-center gap-2 text-sm" class:font-semibold={feature.special}>
          <Icon icon={feature.icon} />
          {feature.label}
        </p>
      {/each}
      <slot name="features" />
    </div>

    <div class="mt-auto w-full">
      <slot />
    </div>
  </div>
</FancyCard>
