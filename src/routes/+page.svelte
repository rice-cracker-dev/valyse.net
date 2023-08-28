<script lang="ts">
  import Icon from '@iconify/svelte';
  import FeatureCard from '$lib/components/FeatureCard.svelte';
  import Glow from '$lib/components/Glow.svelte';
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

<div id="home" class="relative flex items-center justify-center min-h-[100svh] mx-16">
  <div class="w-full md:max-w-7xl flex gap-8 items-center flex-1">
    <div class="flex-1 flex flex-col items-center lg:items-start">
      <p class="text-center lg:text-left text-3xl xl:text-5xl font-semibold tracking-wider max-w-lg xl:max-w-3xl">
        <span class="text-white">The Future Of ROBLOX Exploiting</span>
        Is Here
      </p>

      <p class="text-center lg:text-left text-sm lg:text-lg text-base-content/50 my-6 xl:my-12 max-w-sm xl:max-w-xl">
        Download the #1 Roblox exploit for free in 2023. Reliable, no key system and superior scripts execution power.
      </p>

      <div class="w-64 lg:w-auto lg:mt-auto flex flex-col items-stretch lg:flex-row mt-8 lg:items-center gap-4">
        <a
          href="/#get-started"
          class="btn btn-neutral border-0 !p-0 normal-case text-white shadow-white/5 duration-150 hover:bg-neutral group"
        >
          <div class="relative w-full">
            <div
              class="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center gap-4 scale-75 group-hover:scale-100"
            >
              <Icon
                icon="ph:star-fill"
                class="opacity-0 group-hover:opacity-100 group-hover:-translate-x-12 group-hover:-translate-y-8 text-[#c9ffbe] duration-100 drop-shadow-[0_0_8px_#c9ffbe]"
              />
              <Icon
                icon="ph:star-fill"
                class="opacity-0 group-hover:opacity-100 group-hover:-translate-x-12 group-hover:translate-y-10 text-[#ffefad] duration-150 drop-shadow-[0_0_8px_#ffefad]"
              />
              <Icon
                icon="ph:star-fill"
                class="opacity-0 group-hover:opacity-100 group-hover:-translate-x-4 group-hover:-translate-y-10 text-[#b4faff] duration-200 drop-shadow-[0_0_8px_#b4faff]"
              />
              <Icon
                icon="ph:star-fill"
                class="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-12 text-[#846edb] duration-250 drop-shadow-[0_0_8px_#846edb]"
              />
              <Icon
                icon="ph:star-fill"
                class="opacity-0 group-hover:opacity-100 group-hover:translate-x-8 group-hover:-translate-y-8 text-[#ffaee9] duration-150 drop-shadow-[0_0_8px_#ffaee9]"
              />
              <Icon
                icon="ph:star-fill"
                class="opacity-0 group-hover:opacity-100 group-hover:translate-x-10 group-hover:translate-y-12 text-[#ff7878] duration-200 drop-shadow-[0_0_8px_#ff7878]"
              />
            </div>

            <div
              class="absolute rounded-lg top-0 bottom-0 right-0 left-0 bg-gradient-to-r from-[#5277FF] via-[#FF7475] to-[#FFD055] blur-xl opacity-0 group-hover:opacity-25"
            />

            <div
              class="relative p-4 flex w-full justify-center items-center gap-4 rounded-lg shadow-inner shadow-white/5 duration-150"
            >
              <Icon icon="ph:paper-plane-right-bold" class="duration-150" />
              Let's get started
            </div>
          </div>
        </a>
        <button class="btn btn-neutral">Get help</button>
      </div>
    </div>
    <div class="relative justify-end select-none hidden lg:flex scale-75 xl:scale-100">
      <!-- glow -->
      <img src="/logo_accent.svg" alt="" class="absolute blur-xl opacity-25" />
      <img src="/logo_accent.svg" alt="" class="relative" />
    </div>
  </div>
</div>

<div id="features" class="relative">
  <Glow positionX="-16rem" positionY="10%" />
  <Glow positionX="-16rem" positionY="10%" alignmentX="right" alignmentY="bottom" />

  <div class="relative flex flex-col items-center gap-4 mx-8 z-10 py-64">
    <p class="text-3xl font-outfit text-accent">Features</p>
    <div class="relative my-12 max-w-5xl flex flex-col">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        <FeatureCard icon="ph:key-fill" header="No key system" isSpecial>we use ad system instead lmao</FeatureCard>
        <FeatureCard icon="ph:terminal-fill" header="Custom DLL">
          Valyse has a powerful custom DLL with limitless execution power for scripts.
        </FeatureCard>
        <FeatureCard icon="mdi:shield-check" header="Security">
          The security of our users is our utmost priority - there has never been a case of someone getting detected
          using our software.
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
    </div>
  </div>
</div>

<div id="features" class="relative">
  <div class="relative flex flex-col items-center gap-4 mx-8 z-10 py-64">
    <p class="text-3xl font-outfit text-accent">Theming</p>
    <div class="my-12 flex items-center flex-wrap justify-center gap-4 lg:gap-8">
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
    <img src={currentTheme.image} alt="" class="relative rounded-lg" />
  </div>
</div>

<div id="pricing" class="relative">
  <Glow positionY="50%" offsetY="-50%" positionX="-16rem" />

  <div class="relative flex flex-col items-center gap-4 mx-8 z-10 py-64">
    <p class="text-3xl font-outfit text-accent">Pricing</p>
    <div class="my-12 grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-3xl">
      <div class="border-[1px] border-base-content/20 bg-neutral/50 p-4 rounded-lg flex flex-col gap-4 font-outfit">
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
        class="border-[1px] border-accent shadow-2xl shadow-accent/25 bg-neutral/50 p-4 rounded-lg flex flex-col gap-4 font-outfit"
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
</div>

<div id="get-started" class="flex flex-col items-center my-64 gap-4 mx-8">
  <div class="w-full max-w-5xl flex flex-col lg:flex-row items-center gap-8 p-4 py-64">
    <div class="flex-1 flex flex-col gap-2 text-center lg:text-left">
      <p class="text-4xl font-semibold text-white">What are you waiting for?</p>
      <p class="text-base-content/50">The best exploit on the market at your fingertips.</p>
    </div>
    <div class="relative">
      <Glow positionX="50%" offsetX="-50%" positionY="50%" offsetY="-50%" opacity="10%" />
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        class="relative btn border-0 bg-white/5 hover:bg-white/10 shadow-inner shadow-white/10 gap-4 z-10"
      >
        <Icon icon="ph:paper-plane-right-bold" class="duration-150" />
        Get started
      </a>
    </div>
  </div>
</div>
