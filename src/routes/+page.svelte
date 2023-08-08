<script lang="ts">
  import Icon from '@iconify/svelte';
  import FeatureCard from '$lib/components/FeatureCard.svelte';
  import { onMount } from 'svelte';

  interface ValyseThemeInfo {
    name: string;
    image: string;
  }

  const themes: ValyseThemeInfo[] = [
    { name: 'Valyse Dark', image: '/themes/ValyseDark.png' },
    { name: 'One Dark', image: '/themes/OneDark.png' },
    { name: 'Tokyo Night', image: '/themes/TokyoNight.png' },
    { name: 'Dracula', image: '/themes/Dracula.png' },
  ];

  let interval: number | null = null;
  let currentThemeIndex = 0;
  $: currentTheme = themes[currentThemeIndex]; // this variable will change when currentThemeIndex changes

  const startThemeInterval = (initialThemeIndex = 0) => {
    if (interval !== null) {
      clearInterval(interval);
    }

    currentThemeIndex = initialThemeIndex;

    interval = setInterval(() => {
      if (currentThemeIndex >= themes.length - 1) {
        currentThemeIndex = 0;
      } else {
        currentThemeIndex += 1;
      }
    }, 5000);
  };

  onMount(() => startThemeInterval());
</script>

<svelte:head>
  <title>Valyse V2 website</title>
</svelte:head>

<div class="relative flex items-center justify-center min-h-[100svh]">
  <div class="w-full md:max-w-7xl flex gap-8 items-center">
    <div class="flex-1 flex flex-col">
      <p class="text-5xl font-semibold tracking-wider">
        <span class="text-white">The future of ROBLOX exploiting</span>
        is here
      </p>

      <p class="text-lg text-base-content/50 my-12">
        Download the #1 Roblox exploit for free in 2023. Reliable, no key system and superior scripts execution power.
      </p>

      <div class="mt-auto flex items-center gap-4">
        <button id="btn-get-started">
          <div class="p-4 flex items-center gap-4 rounded-lg shadow-inner shadow-white/5 duration-150">
            <Icon icon="ph:paper-plane-right-bold" class="duration-150" />
            Let's get started
          </div>
        </button>
        <button class="btn btn-neutral"> Get help </button>
      </div>
    </div>
    <div class="flex-1 relative flex justify-end select-none">
      <!-- glow -->
      <img src="/logo_accent.svg" alt="" class="absolute blur-xl opacity-25" />
      <img src="/logo_accent.svg" alt="" class="relative" />
    </div>
  </div>
</div>

<div class="relative flex flex-col items-center gap-4">
  <p class="font-semibold text-4xl">Features</p>
  <div class="relative my-12 max-w-5xl flex flex-col gap-16">
    <div class="absolute grid items-center left-0 top-0 -translate-x-1/2 select-none -z-10">
      <div
        class="relative bg-gradient-to-b from-[#E93F3F]/10 via-[#FF7475]/10 to-[#FFD055]/10 h-[32rem] w-[32rem] rounded-[50%] blur-[96px] col-start-1 row-start-1 mx-32"
      />
    </div>
    <div class="absolute grid items-center right-0 bottom-0 translate-x-1/2 select-none -z-10">
      <div
        class="relative bg-gradient-to-b from-[#E93F3F]/10 via-[#FF7475]/10 to-[#FFD055]/10 h-[32rem] w-[32rem] rounded-[50%] blur-[96px] col-start-1 row-start-1 mx-32"
      />
    </div>

    <div class="grid grid-cols-3 gap-8 w-full">
      <FeatureCard icon="ph:key-fill" header="No key system" isSpecial>we use ad system instead lmao</FeatureCard>
      <FeatureCard icon="ph:terminal-fill" header="Custom DLL">
        Valyse has a powerful custom DLL with limitless execution power for scripts.
      </FeatureCard>
      <FeatureCard icon="mdi:shield-check" header="Security">
        The security of our users is our utmost priority - there has never been a case of someone getting detected using
        our software.
      </FeatureCard>
      <FeatureCard icon="ph:terminal-fill" header="Support">
        Valyse has a powerful custom DLL with limitless execution power for scripts.
      </FeatureCard>
      <FeatureCard icon="ph:lock-simple-fill" header="Privacy">
        Your privacy is safe with us. Nothing will ever be logged and nobody can access the data.
      </FeatureCard>
      <FeatureCard icon="ph:globe-hemisphere-east-fill" header="Languages">
        速度与激情9 早上好中国 现在我有冰激淋 我很喜欢冰激淋 但是《速度与激情9》比冰激淋
      </FeatureCard>
    </div>

    <div class="w-full max-w-5xl flex flex-col items-center">
      <p class="font-semibold text-2xl">Theming</p>
      <div class="my-12 flex items-center gap-8">
        {#each themes as theme, index}
          <button
            on:click={() => startThemeInterval(index)}
            class="btn btn-ghost"
            class:btn-active={currentThemeIndex === index}
          >
            {theme.name}
          </button>
        {/each}
      </div>
      <div class="relative w-full">
        <img src={currentTheme.image} alt="" class="absolute rounded-lg blur-xl top-8 select-none" />
        <img src={currentTheme.image} alt="" class="relative rounded-lg" />
      </div>
    </div>
  </div>
</div>

<div class="relative flex flex-col items-center mt-32 gap-4">
  <div class="absolute grid items-center left-0 bottom-0 select-none -z-10">
    <div
      class="relative bg-gradient-to-b from-[#E93F3F]/10 via-[#FF7475]/10 to-[#FFD055]/10 h-[32rem] w-[32rem] translate-x-1/3 rounded-[50%] blur-[96px] col-start-1 row-start-1 mx-32"
    />
  </div>

  <p class="font-semibold text-4xl">Pricing</p>
  <div class="my-12 grid grid-cols-2 gap-16 w-full max-w-3xl">
    <div class="border-[1px] border-base-content/20 bg-neutral/50 p-4 rounded-lg flex flex-col gap-4 font-product-name">
      <p class="text-xs tracking-[0.25rem]">VALYSE</p>
      <p class="text-2xl text-white">Free</p>

      <div class="my-2 text-sm">
        <p class="mb-2">Everything you need to start:</p>
        <p class="flex items-center gap-2"><Icon icon="ph:check-circle" /> Custom DLL</p>
        <p class="flex items-center gap-2"><Icon icon="ph:check-circle" /> Friends and Chat System</p>
        <p class="flex items-center gap-2"><Icon icon="ph:check-circle" /> Script Hub</p>
        <p class="flex items-center gap-2"><Icon icon="ph:x-circle" /> A parental figure</p>
      </div>

      <button class="btn btn-neutral">Download now</button>
    </div>

    <div
      class="border-[1px] border-accent shadow-2xl shadow-accent/25 bg-neutral/50 p-4 rounded-lg flex flex-col gap-4 font-product-name"
    >
      <p class="text-xs tracking-[0.25rem]">VALYSE <span class="text-accent">PREMIUM</span></p>
      <p class="text-2xl text-white">69.96 USD</p>

      <div class="my-2 text-sm">
        <p class="mb-2">Everything you need to start:</p>
        <p class="flex items-center gap-2"><Icon icon="ph:check-circle" /> Everything from the Starter Plan</p>
        <p class="flex items-center gap-2"><Icon icon="ph:check-circle" /> No ads</p>
        <p class="flex items-center gap-2"><Icon icon="ph:check-circle" /> Animated avatar</p>
        <p class="flex items-center gap-2"><Icon icon="ph:check-circle" /> See who's using Valyse in your game</p>
      </div>

      <button class="btn btn-accent">Give us your money NOW</button>
    </div>
  </div>
</div>

<div class="flex flex-col items-center my-64 gap-4">
  <div class="w-full max-w-5xl flex items-center gap-8">
    <div class="flex-1 flex flex-col gap-2">
      <p class="text-4xl font-semibold text-white">What are you waiting for?</p>
      <p class="text-base-content/50">The best exploit on the market at your fingertips.</p>
    </div>
    <div class="relative m-8">
      <div class="absolute grid items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none -z-10">
        <div
          class="relative bg-gradient-to-b from-[#E93F3F]/10 via-[#FF7475]/10 to-[#FFD055]/10 h-[32rem] w-[32rem] rounded-[50%] blur-[96px] col-start-1 row-start-1 mx-32"
        />
      </div>
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        class="btn border-0 bg-white/5 hover:bg-white/10 shadow-inner shadow-white/10 gap-4"
      >
        <Icon icon="ph:paper-plane-right-bold" class="duration-150" />
        Get started
      </a>
    </div>
  </div>
</div>

<style lang="postcss">
  #btn-get-started {
    @apply btn btn-neutral border-0 !p-0 normal-case text-white shadow-white/5 duration-150 hover:bg-neutral;
  }

  #btn-get-started:hover {
    box-shadow:
      -8px 0 32px #5277ff40,
      0 0 32px #ff747540,
      8px 0 32px #ffd05540;
  }
</style>
