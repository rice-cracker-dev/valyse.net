<script lang="ts">
  import { fade, slide } from 'svelte/transition';
  import Icon from '@iconify/svelte';

  let scrollY = 0;
  let isMobileNavbarOpened = false;
</script>

<svelte:window bind:scrollY />

<div class="relative w-full flex justify-center">
  <div class="absolute grid items-center -top-16 grid-cols-1 grid-rows-1 overflow-visible select-none -z-20">
    <div
      class="absolute top-0 left-0 right-0 h-64 bg-grid"
      style="-webkit-mask-image: radial-gradient(#000, transparent, transparent);"
    />
    <div class="relative bg-[#3F64E9]/30 w-[64rem] h-24 rounded-[50%] blur-[96px] col-start-1 row-start-1 mr-64" />
    <div
      class="relative bg-[#E93F3F]/30 w-[64rem] h-32 rounded-[50%] blur-[96px] col-start-1 row-start-1 mx-32 -z-10"
    />
    <div class="relative bg-[#FFB800]/30 w-[64rem] h-24 rounded-[50%] blur-[96px] col-start-1 row-start-1 ml-64" />
  </div>

  <div
    class="mx-8 max-w-3xl lg:max-w-5xl xl:max-w-7xl fixed top-0 w-full md:m-8 lg:m-16 rounded-lg flex gap-8 text-[16px] z-[9999] border-[1px] p-8 lg:px-4 lg:py-2 bg-transparent {scrollY >
    0
      ? 'border-base-content/20 backdrop-blur-xl backdrop-brightness-50'
      : 'border-transparent'}"
  >
    <div class="flex items-center gap-2">
      <img src="/logo.svg" alt="" class="w-8" />
    </div>
    <div class="flex-1 justify-start lg:justify-center items-center gap-4 lg:gap-16 hidden md:flex">
      <a href="/" class="btn btn-ghost">Home</a>
      <a href="/" class="btn btn-ghost">FAQ</a>
      <a href="/" class="btn btn-ghost">Features</a>
      <a href="/" class="btn btn-ghost">Pricing</a>
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
      <a href="/" class="btn btn-ghost justify-start">
        <Icon icon="ph:house-fill" />
        Home
      </a>
      <a href="/" class="btn btn-ghost justify-start">
        <Icon icon="ph:question-fill" />
        FAQ
      </a>
      <a href="/" class="btn btn-ghost justify-start">
        <Icon icon="ph:desktop-fill" />
        Features
      </a>
      <a href="/" class="btn btn-ghost justify-start">
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
