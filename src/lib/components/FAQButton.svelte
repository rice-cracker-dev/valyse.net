<script lang="ts">
  import { slide } from 'svelte/transition';
  import Icon from '@iconify/svelte';

  export let header = '';

  let isExpanded = false;
</script>

<div id="faq" class="flex flex-col items-stretch border-base-content/20 border-b-[1px] py-4">
  <button on:click={() => (isExpanded = !isExpanded)} class="flex items-center">
    <div class="flex items-center text-lg w-full">
      <p class="text-white font-outfit">{header}</p>
      <Icon icon="ph:caret-up" class="ml-auto {isExpanded && 'rotate-180'}" />
    </div>
  </button>

  {#if isExpanded}
    <div transition:slide={{ duration: 150 }} class="text-left text-sm mt-4">
      <slot />
    </div>
  {/if}
</div>
