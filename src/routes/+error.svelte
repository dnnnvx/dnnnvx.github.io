<script>
  import { page } from "$app/stores";
</script>

<h1>{$page.status}</h1>
<p>{$page.error?.message || "ops!"}</p>
<p>error code: {$page.error?.code || "500"}</p>
<span style="font-size: 10em">
  {">_<"}
</span>
