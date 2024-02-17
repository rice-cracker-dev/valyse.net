<script lang="ts">
  import { onMount } from 'svelte';
  import { isUserAgentMobile } from '$lib/validation';
  import { desktop, mobile } from '$lib/components/particles/snow';
  import Particles from '$lib/components/Particles.svelte';
  import WhyCard from '$lib/components/WhyCard.svelte';

  let isMobile = false;

  onMount(() => {
    isMobile = isUserAgentMobile();
  });
</script>

{#key isMobile}
  <Particles class="-z-10" options={isMobile ? mobile : desktop} />
{/key}

<section class="relative flex items-center lg:min-h-svh">
  <div
    class="container relative mx-auto grid grid-cols-1 grid-rows-2 items-center justify-center gap-16 px-4 pt-16 md:pt-32 lg:grid-cols-2 lg:grid-rows-1 lg:items-center lg:pt-0"
  >
    <div class="flex flex-col items-center gap-2 lg:items-start">
      <h1 class="text-gradient-heading h1 font-bold">Valyse</h1>
      <h3 class="h2 text-center font-semibold lg:text-left">
        <span class="text-gradient-heading">The</span>
        <span class="text-primary-500-400-token">#1</span>
        <span class="text-gradient-heading">ROBLOX executor</span>
      </h3>
      <span class="text-surface-600-300-token hidden text-lg font-medium lg:block">
        Download the #1 Roblox exploit for free in 2023. Reliable, no key system and superior
        scripts execution power.
      </span>

      <button type="button" class="variant-filled-primary btn my-8">Get started</button>
    </div>

    <img src="/thumbsup.jpg" alt="" class="mx-auto h-96" />
  </div>
</section>

<section class="bg-surface-100-800-token relative mt-16">
  <div class="container relative mx-auto px-4 py-8">
    <div class="absolute bottom-1/2 right-0 hidden translate-y-1/2 lg:block">
      <div class="h-[20rem]">
        <img src="/heart.png" alt="" class="absolute h-full opacity-50 blur-xl" />
        <img src="/heart.png" alt="" class="z-10 h-full" />
      </div>
    </div>

    <div class="mx-auto py-4 text-center lg:mx-0 lg:max-w-[50%] lg:text-left">
      <h3 class="text-primary-500-400-token h3 font-medium">Completely FREE for everyone</h3>
      <p class="text-surface-600-300-token h4 mt-2">
        Even after Byfron we enjoy keeping Valyse available for everyone as we believe exploiting
        should remain fun.
      </p>
    </div>
  </div>
</section>

<section class="bg-surface-50-900-token">
  <div class="container mx-auto flex flex-col items-center gap-4 px-4 py-48">
    <h2 class="text-gradient-heading h2 text-center font-bold">Why Valyse?</h2>
    <p class="text-surface-600-300-token text-center text-xl md:max-w-[50%]">
      At Valyse, we're committed to constant improvement. Our updates bring new features, ensuring
      you have the best exploiting experience. Join us on this journey of innovation and elevated
      adventures.
    </p>

    <div
      class="mt-16 grid grid-cols-1 items-stretch justify-stretch gap-4 sm:grid-cols-2 xl:max-w-[60%]"
    >
      <WhyCard title="Discover the future" isSpecial>
        Elevate your gaming with Valyse. Our executor stands out, constantly evolving with daily
        feature updates. Experience the future of scripting and gaming innovation in one platform.
      </WhyCard>
      <WhyCard title="Fastest update time">
        Elevate your gaming experience with Valyse -setting the pace with the fastest update times.
        Stay ahead of the curve as we bring you cutting-edge features and enhancements quicker than
        ever.
      </WhyCard>
      <WhyCard title="Fastest update time">
        Experience top-tier support with Valyse. Our team is dedicated to providing prompt and
        friendly assistance whenever you need it. Choose us for a hassle-free journey with
        unparalleled support.
      </WhyCard>
      <WhyCard title="raxzy yappin">yes</WhyCard>
    </div>
  </div>
</section>
