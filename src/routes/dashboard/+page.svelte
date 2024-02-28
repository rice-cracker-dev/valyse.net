<form class="flex flex-col gap-4 md:items-start">
  <label class="label">
    <span>Username</span>
    <input type="text" class="input" />
  </label>
  <label class="label">
    <span>Password</span>
    <input type="text" class="input" />
  </label>

  <!-- you can use form actions -->
  <!-- https://kit.svelte.dev/docs/form-actions -->
  <button type="submit" formaction="?/changeUserInfo" class="variant-filled-primary btn">
    Submit
  </button>
</form>
