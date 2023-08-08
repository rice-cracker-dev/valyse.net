<script lang="ts">
  import Icon from '@iconify/svelte';

  let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<div class="relative w-full flex justify-center">
  <div class="absolute grid items-center -top-16 grid-cols-1 grid-rows-1 overflow-visible select-none">
    <div
      class="absolute top-0 left-0 right-0 h-64 bg-grid"
      style="-webkit-mask-image: radial-gradient(#000, transparent, transparent);"
    />
    <div class="relative bg-[#3F64E9]/30 w-[64rem] h-16 rounded-[50%] blur-[96px] col-start-1 row-start-1 mr-64" />
    <div class="relative bg-[#E93F3F]/30 w-[64rem] h-32 rounded-[50%] blur-[96px] col-start-1 row-start-1 mx-32" />
    <div class="relative bg-[#FFB800]/30 w-[64rem] h-16 rounded-[50%] blur-[96px] col-start-1 row-start-1 ml-64" />
  </div>

  <div
    class="md:max-w-7xl fixed top-0 w-full mx-4 my-16 rounded-lg flex gap-8 text-[16px] z-[9999] border-[1px] px-4 py-2 {scrollY >
    0
      ? 'border-base-content/20 backdrop-blur-xl bg-black/10'
      : 'border-transparent bg-transparent'}"
  >
    <div class="flex items-center gap-2">
      <img src="/logo.svg" alt="" class="w-8" />
    </div>
    <div class="flex-1 flex justify-center items-center gap-16">
      <a href="/" class="btn btn-ghost">Home</a>
      <a href="/" class="btn btn-ghost">FAQ</a>
      <a href="/" class="btn btn-ghost">Features</a>
      <a href="/" class="btn btn-ghost">Pricing</a>
    </div>
    <div class="flex items-center gap-2">
      <button class="btn btn-ghost text-xl">
        <Icon icon="fa6-brands:discord" />
      </button>
      <button class="btn btn-ghost text-xl">
        <Icon icon="fa6-brands:github" />
      </button>
      <button class="btn btn-ghost text-xl">
        <Icon icon="ph:sun" />
      </button>
      <div class="divider divider-vertical" />
      <button class="btn btn-ghost text-xl">
        <Icon icon="ph:user-fill" />
      </button>
    </div>
  </div>
</div>
