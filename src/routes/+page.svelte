<script lang="ts">
  import Particles from '$lib/components/Particles.svelte';
  import options from '$lib/components/particles/snow';
</script>

<Particles class="-z-10" {options} />

<section class="relative flex items-center lg:min-h-svh">
  <div
    class="container relative mx-auto grid grid-cols-1 grid-rows-2 items-center justify-center gap-16 px-4 pt-64 lg:grid-cols-2 lg:grid-rows-1 lg:items-center lg:pt-0"
  >
    <div class="flex flex-col items-center gap-2 lg:items-start">
      <h1 class="text-primary-500-400-token h1 font-bold">
        <span class="absolute opacity-50 blur-xl">Valyse</span>
        <span>Valyse</span>
      </h1>
      <h3 class="text-surface-800-100-token h2 text-center font-medium lg:text-left">
        The <span class="text-primary-500-400-token">#1</span> ROBLOX executor
      </h3>
      <span class="text-surface-500-400-token hidden text-lg lg:block">
        Download the #1 Roblox exploit for free in 2023. Reliable, no key system and superior
        scripts execution power.
      </span>

      <button type="button" class="variant-filled-primary btn my-4">Get started</button>
    </div>

    <img src="/thumbsup.jpg" alt="" class="mx-auto h-96" />
  </div>
</section>

<section class="bg-surface-100-800-token relative mt-16">
  <div class="container relative mx-auto py-8">
    <div class="absolute bottom-1/2 right-0 hidden translate-y-1/2 lg:block">
      <div class="h-[20rem]">
        <img src="/heart.png" alt="" class="absolute h-full opacity-50 blur-xl" />
        <img src="/heart.png" alt="" class="z-10 h-full" />
      </div>
    </div>

    <div class="mx-auto py-4 text-center lg:mx-0 lg:max-w-[50%] lg:text-left">
      <h3 class="text-primary-500-400-token h3 font-medium">Completely FREE for everyone</h3>
      <p class="text-surface-500-400-token h3 mt-2">
        Even after Byfron we enjoy keeping Valyse available for everyone as we believe exploiting
        should remain fun.
      </p>
    </div>
  </div>
</section>

<section class="bg-surface-50-900-token h-32"></section>
