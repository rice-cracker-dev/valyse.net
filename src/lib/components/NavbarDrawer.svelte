<script lang="ts">
  import { Drawer } from '@skeletonlabs/skeleton';
  import { links } from './navbar';
  import NavbarItem from './NavbarItem.svelte';
</script>

<Drawer
  position="bottom"
  padding="p-4"
  regionDrawer="flex flex-col items-stretch gap-1 p-2"
  bgBackdrop="backdrop-blur-lg"
  rounded="rounded-lg"
  height="auto"
  zIndex="z-50"
>
  {#each links as link}
    <NavbarItem {link} />
  {/each}

  <NavbarItem
    class="variant-filled-primary"
    link={{ label: 'Sign up', icon: 'ph:user-plus', href: '/auth/signup' }}
  />
  <NavbarItem
    class="variant-outline-primary hover:variant-filled-primary"
    link={{ label: 'Sign in', icon: 'ph:sign-in', href: '/auth/signin' }}
  />

  <span class="bg-surface-300-600-token mx-auto mt-2 h-1 w-12" />
</Drawer>
