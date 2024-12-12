<script>
  import { navigating, page, updated } from "$app/stores";
  const { data, children } = $props();
</script>

<nav>
  <a href="/">home</a>
  <a href="/roll">roll</a>
  <a href="/blog">blog</a>
</nav>

{#if $navigating?.to}
  navigating to {$navigating.to.url.pathname}
{/if}

{#if $updated}
  <div class="toast">
    <p>
      A new version of the app is available

      <button onclick={() => location.reload()}> reload the page </button>
    </p>
  </div>
{/if}

{@render children()}
