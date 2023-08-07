<script lang="ts">
  import Icon from '@iconify/svelte';
</script>

<div class="w-full flex justify-center">
  <div class="md:max-w-7xl w-full mx-4 my-16 bg-black/10 rounded-lg flex gap-8 text-[16px]">
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