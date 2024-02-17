<script lang="ts">
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
  import { initializeStores, storePopup } from '@skeletonlabs/skeleton';
  import { particlesInit } from '@tsparticles/svelte';
  import { loadSlim } from '@tsparticles/slim';
  import Navbar from '$lib/components/Navbar.svelte';
  import NavbarDrawer from '$lib/components/NavbarDrawer.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '@fontsource-variable/inter';
  import '../app.scss';

  initializeStores();

  // popup
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  void particlesInit(async (engine) => {
    loadSlim(engine);
  });
</script>

<NavbarDrawer />

<main class="flex flex-col">
  <Navbar />
  <div class="min-h-svh">
    <slot />
  </div>
  <Footer />
</main>
