<script lang="ts">
  import Icon from '@iconify/svelte';
  import FancyCard from '$lib/components/FancyCard.svelte';
  import PricingCard from '$lib/components/PricingCard.svelte';
</script>

<div
  class="container mx-auto mt-32 flex w-full flex-col items-center justify-center gap-4 px-4 text-center sm:mt-0 sm:min-h-svh"
>
  <h1 class="text-gradient-heading h1 font-bold">Valyse Android</h1>
  <p class="text-surface-600-300-token sm:max-w-[75%] md:max-w-[50%]">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusantium aliquid beatae culpa
    deleniti dignissimos excepturi facilis fuga illum, in iusto laboriosam maiores mollitia nesciunt
    non quae quisquam veniam voluptatum
  </p>

  <div class="mt-8 grid w-full grid-cols-1 items-center gap-4 sm:w-auto sm:grid-cols-2 sm:gap-8">
    <a href="/" class="variant-filled-primary btn gap-4">
      <Icon icon="fa6-brands:android" />
      Download
    </a>
    <a href="#pricing" class="variant-outline-primary btn gap-4">
      <Icon icon="ph:arrow-down" />
      Pricing
    </a>
  </div>
</div>

<div
  id="pricing"
  class="container mx-auto mt-32 flex w-full flex-col items-center justify-center gap-4 px-4 text-center sm:mt-0 sm:min-h-svh"
>
  <h1 class="text-gradient-heading h4 font-bold">Pricing</h1>
  <p class="text-surface-600-300-token sm:max-w-[75%] md:max-w-[50%]">Lorem ipsum dolor sit amet</p>

  <div
    class="mt-8 grid w-full grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-8 lg:max-w-[75%] 2xl:max-w-[50%]"
  >
    <PricingCard
      features={[
        { icon: 'ph:check-circle', label: 'Powerful execution engine' },
        { icon: 'ph:check-circle', label: 'Full UNC support' },
        { icon: 'ph:check-circle', label: 'A large script hub' },
        { icon: 'ph:x-circle', label: 'A parental figure', special: true },
      ]}
    >
      <p slot="productName">valyse android</p>
      <p slot="price">Free</p>
      <a href="/" class="variant-filled-surface btn mt-4 w-full">Download now</a>
    </PricingCard>
    <PricingCard
      isSpecial
      features={[
        { icon: 'ph:check-circle', label: 'Everything from the free tier' },
        { icon: 'ph:check-circle', label: 'Animated avatar' },
        { icon: 'ph:check-circle', label: 'See Valyse users in-game' },
        { icon: 'ph:check-circle', label: 'A parental figure', special: true },
      ]}
    >
      <p slot="productName">valyse android premium</p>
      <p slot="price">Unavailable</p>
      <button href="/" class="variant-filled-primary btn mt-4 w-full">Unavailable</button>
    </PricingCard>
  </div>
</div>
