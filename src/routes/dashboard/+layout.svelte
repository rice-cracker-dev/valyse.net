<script lang="ts">
  import type { NavbarLink } from '$lib/components/navbar';
  import { page } from '$app/stores';
  import Icon from '@iconify/svelte';

  const links: NavbarLink[] = [
    { href: '/dashboard', icon: 'ph:user', label: 'Account' },
    { href: '/dashboard/billing', icon: 'ph:credit-card', label: 'Billing' },
    { href: '/dashboard/notification', icon: 'ph:bell', label: 'Notification' },
  ];

  $: currentLink = links.find((link) => link.href === $page.url.pathname);
</script>

<div
  class="flex w-full flex-col items-stretch gap-8 md:container md:mx-auto md:mt-24 md:flex-row md:items-start md:gap-32 md:px-4"
>
  <div class="bg-surface-200-700-token border-b border-surface-500 md:border-0 md:!bg-transparent">
    <div
      class="container mx-auto flex w-full flex-col gap-2 px-4 pb-4 pt-20 md:mx-0 md:!max-w-none md:gap-4 md:p-0"
    >
      <h4 class="h4 hidden font-medium md:block">Dashboard</h4>
      <div class="flex items-center gap-2 overflow-x-hidden md:flex-col md:items-stretch">
        {#each links as { href, icon, label }}
          <a
            {href}
            class="btn btn-sm flex-1 gap-2 md:btn-base md:justify-start"
            class:variant-filled-primary={$page.url.pathname === href}
            class:hover:variant-soft-surface={$page.url.pathname !== href}
          >
            <Icon {icon} />
            {label}
          </a>
        {/each}
      </div>
    </div>
  </div>

  <div class="container mx-auto w-full px-4 md:!max-w-none md:px-0">
    {#if currentLink}
      <h2 class="h2 mb-8 font-semibold">{currentLink.label}</h2>
    {/if}
    <slot />
  </div>
</div>
