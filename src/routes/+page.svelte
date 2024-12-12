<script lang="ts">
  import { enhance } from "$app/forms";
  import { fly, slide } from "svelte/transition";

  const { data, form } = $props();

  let creating: boolean = $state(false);
  let deleting: Array<string> = $state([]);
</script>

<div class="centered">
  <h1>todos</h1>

  {#if form?.error}
    <p class="error">{form.error.message}</p>
  {/if}

  {#if creating}
    <span class="saving">saving...</span>
  {/if}

  <form
    method="POST"
    action="?/create"
    use:enhance={() => {
      creating = true;
      return async ({ update }) => {
        await update();
        creating = false;
      };
    }}
  >
    <label>
      add a todo:
      <input
        disabled={creating}
        name="text"
        autocomplete="off"
        required
        value={form?.text ?? ""}
      />
    </label>
    <button disabled={creating} type="submit">Add</button>
  </form>

  <ul class="todos">
    {#each data.todos as todo, i (todo)}
      <li in:fly={{ y: 20 }} out:slide>
        <form
          method="POST"
          action="?/delete"
          use:enhance={() => {
            deleting = [...deleting, todo];
            return async ({ update }) => {
              await update();
              deleting = deleting.filter((id) => id !== todo);
            };
          }}
        >
          <input type="hidden" name="i" value={i} />
          <span>{todo}</span>
          <button type="submit" aria-label="Mark as complete">x</button>
        </form>
      </li>
    {/each}
  </ul>
</div>

<style>
  .centered {
    max-width: 20em;
    margin: 0 auto;
  }

  label {
    width: 100%;
  }

  input {
    flex: 1;
  }

  span {
    flex: 1;
  }

  button {
    border: none;
    cursor: pointer;
    height: 100%;
    aspect-ratio: 1;
    opacity: 0.5;
    transition: opacity 0.2s;
  }

  button:hover {
    opacity: 1;
  }

  .saving {
    opacity: 0.5;
  }
</style>
