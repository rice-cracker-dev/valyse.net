<script lang="ts">
  import type { NavbarLink } from './navbar';
  import Icon from '@iconify/svelte';

  export let link: NavbarLink;
  export let className = 'hover:variant-soft-surface';

  export { className as class };
</script>

<a href={link.href} class="btn-icon-content btn btn-sm lg:btn-base {className}">
  {#if link.icon}
    <Icon icon={link.icon} class="w-4" />
  {/if}

  <span class="text-left">{link.label}</span>
</a>
