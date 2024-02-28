<script lang="ts">
  import { getDrawerStore } from '@skeletonlabs/skeleton';
  import { page } from '$app/stores';
  import { links } from './navbar';
  import Icon from '@iconify/svelte';
  import NavbarItem from './NavbarItem.svelte';

  const drawerStore = getDrawerStore();

  let scrollY: number;
</script>

<svelte:window bind:scrollY />

<nav
  class="{$page.data.navbarFixed
    ? 'fixed'
    : 'sticky'} top-0 z-40 flex w-full items-center {scrollY > 10 &&
    'backdrop-blur-xl backdrop-brightness-75'}"
>
  <div class="container mx-auto flex items-center p-4">
    <a href="/">
      <img src="/valyse-logo.svg" alt="Home" class="h-10 lg:hidden" />
      <img src="/valyse-logo-long.svg" alt="Home" class="hidden h-10 lg:block" />
    </a>

    <div class="hidden flex-1 items-center justify-center gap-2 md:flex">
      {#each links as link}
        <NavbarItem {link} />
      {/each}
    </div>

    <div class="flex flex-1 flex-row-reverse items-center md:hidden">
      <button
        type="button"
        class="btn-icon hover:variant-soft-surface"
        on:click={() => drawerStore.open()}
      >
        <Icon icon="ph:list" />
      </button>
    </div>

    <div class="hidden flex-row-reverse items-center gap-2 md:flex">
      <NavbarItem
        class="variant-filled-primary"
        link={{ label: 'Sign up', icon: 'ph:user-plus', href: '/auth/signup' }}
      />
      <NavbarItem
        class="variant-outline-primary hover:variant-filled-primary"
        link={{ label: 'Sign in', icon: 'ph:sign-in', href: '/auth/signin' }}
      />
    </div>
  </div>
</nav>
