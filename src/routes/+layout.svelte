<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import '@fontsource-variable/inter';
  import '@fontsource-variable/outfit';
  import '../app.css';
</script>

<Navbar />

<slot />

<Footer />
