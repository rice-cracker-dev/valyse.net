<script lang="ts">
  import { onMount } from 'svelte';

  let isVisible = false;

  onMount(() => {
    const isCaptchaClosed = localStorage.getItem('isCaptchaClosed');

    if (Math.random() < 0.25) {
      isVisible = isCaptchaClosed === null;
    }
  });
</script>

{#if isVisible}
  <div class="fixed z-[99999] w-[100svw] h-[100svh] flex justify-center items-center bg-black/75">
    <div class="flex flex-col items-center gap-4">
      <p class="font-semibold text-xl">Please verify that you're human</p>
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        on:click={() => {
          localStorage.setItem('isCaptchaClosed', 'true');
          isVisible = false;
        }}
      >
        <img src="/captcha.png" alt="" class="w-[20rem]" />
      </a>
    </div>
  </div>
{/if}
