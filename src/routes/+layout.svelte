<script lang="ts">
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
  import { initializeStores, storePopup } from '@skeletonlabs/skeleton';
  import '@fontsource-variable/inter';
  import '../app.scss';

  initializeStores();

  // popup
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  import Navbar from '$lib/components/Navbar.svelte';
  import NavbarDrawer from '$lib/components/NavbarDrawer.svelte';
</script>

<NavbarDrawer />

<main class="flex flex-col">
  <Navbar />
  <slot />
</main>
