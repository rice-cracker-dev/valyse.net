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

  let currentThemeIndex = 0;
  $: currentTheme = themes[currentThemeIndex]; // this variable will change when currentThemeIndex changes

  onMount(() => {
    setInterval(() => {
      if (currentThemeIndex >= themes.length - 1) {
        currentThemeIndex = 0;
      } else {
        currentThemeIndex += 1;
      }
    }, 5000);
  });
</script>

<div class="flex flex-col items-center my-32">
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
        <button class="btn btn-neutral text-white shadow-inner shadow-white/5 gap-4">
          <Icon icon="ph:paper-plane-right-bold" />
          Let's get started
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

<div class="flex flex-col items-center mt-32 gap-4">
  <p class="font-semibold text-4xl">Features</p>
  <div class="my-12 max-w-5xl flex flex-col gap-16">
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
            on:click={() => (currentThemeIndex = index)}
            class="btn btn-ghost"
            class:btn-active={currentThemeIndex === index}
          >
            {theme.name}
          </button>
        {/each}
      </div>
      <img src={currentTheme.image} alt="" class="w-full rounded-lg" />
    </div>
  </div>
</div>
