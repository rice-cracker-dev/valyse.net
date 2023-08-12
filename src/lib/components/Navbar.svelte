<script lang="ts">
  import { fade, slide } from 'svelte/transition';
  import Icon from '@iconify/svelte';

  let scrollY = 0;
  let isMobileNavbarOpened = false;
</script>

<svelte:window bind:scrollY />

<div class="relative">
  <div
    class="absolute -top-12 left-32 right-32 h-32 bg-gradient-to-r from-[#3F64E9]/20 via-[#E93F3F]/40 to-[#FFB800]/20 rounded-[50%] z-0 blur-3xl"
  />
  <div
    class="absolute -top-12 left-32 right-32 bg-grid h-32 rounded-[50%]"
    style="-webkit-mask-image: radial-gradient(#000, transparent)"
  />
</div>

<div class="fixed top-8 lg:top-16 left-0 right-0 flex items-stretch justify-center z-[9999]">
  <div
    class="flex items-center max-w-7xl p-4 w-full bg-transparent border-[1px] mx-8 rounded-lg {scrollY > 0
      ? 'border-base-content/20 backdrop-blur-xl backdrop-brightness-50'
      : 'border-transparent'}"
  >
    <div class="flex items-center gap-2">
      <img src="/logo.svg" alt="" class="w-8" />
    </div>
    <div class="flex-1 justify-start lg:justify-center items-center gap-4 lg:gap-16 hidden md:flex">
      <a href="/#home" class="btn btn-ghost">Home</a>
      <a href="/faq" class="btn btn-ghost">FAQ</a>
      <a href="/#features" class="btn btn-ghost">Features</a>
      <a href="/#pricing" class="btn btn-ghost">Pricing</a>
    </div>
    <div class="sm:flex items-center gap-2 hidden ml-auto">
      <button class="btn btn-ghost text-xl">
        <Icon icon="fa6-brands:discord" />
      </button>
      <button class="btn btn-ghost text-xl">
        <Icon icon="fa6-brands:github" />
      </button>
      <button class="btn btn-ghost text-xl">
        <Icon icon="ph:sun" />
      </button>
      <button class="btn btn-ghost text-xl">
        <Icon icon="ph:user-fill" />
      </button>
    </div>
    <button
      on:click={() => (isMobileNavbarOpened = !isMobileNavbarOpened)}
      class="btn btn-ghost text-xl ml-auto sm:ml-0 md:hidden"
    >
      <Icon icon="ph:list" />
    </button>
  </div>
</div>

{#if isMobileNavbarOpened}
  <div
    transition:fade
    class="md:hidden fixed top-0 bottom-0 right-0 left-0 bg-black/50 z-[10000] flex flex-col items-stretch"
  >
    <button on:click={() => (isMobileNavbarOpened = false)} class="flex-1 bg-transparent cursor-default" />
    <div
      transition:slide
      class="flex flex-col items-stretch bg-neutral border-base-content/10 border-t-[1px] rounded-t-xl p-4"
    >
      <a href="/#home" class="btn btn-ghost justify-start">
        <Icon icon="ph:house-fill" />
        Home
      </a>
      <a href="/faq" class="btn btn-ghost justify-start">
        <Icon icon="ph:question-fill" />
        FAQ
      </a>
      <a href="/#features" class="btn btn-ghost justify-start">
        <Icon icon="ph:desktop-fill" />
        Features
      </a>
      <a href="/#pricing" class="btn btn-ghost justify-start">
        <Icon icon="ph:currency-circle-dollar-fill" />
        Pricing
      </a>

      <div class="divider" />

      <a href="/" class="btn btn-ghost justify-start">
        <Icon icon="fa6-brands:discord" />
        Discord
      </a>
      <a href="/" class="btn btn-ghost justify-start">
        <Icon icon="fa6-brands:github" />
        Github
      </a>
      <a href="/" class="btn btn-ghost justify-start">
        <Icon icon="ph:user-fill" />
        Dashboard
      </a>
      <a href="/" class="btn btn-ghost justify-start">
        <Icon icon="ph:sun" />
        Theme: Dark mode
      </a>
    </div>
  </div>
{/if}
