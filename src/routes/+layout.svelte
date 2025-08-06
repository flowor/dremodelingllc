<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
  import { navigating } from "$app/stores"
  import { expoOut } from "svelte/easing"
  import { slide } from "svelte/transition"

	import '../app.css';

  export let data : {year: string};
</script>
{#if $navigating}
  <!-- Loading animation for next page -->
  <div
    class="fixed w-full top-0 right-0 left-0 h-1 z-50 bg-ssdblue-100"
    in:slide={{ delay: 100, duration: 12000, axis: "x", easing: expoOut }}
  ></div>
{/if}

<div class="flex min-h-screen flex-col scroll-smooth">
  <Header />

  <main class="mb-auto">
    <slot />
  </main>

  <Footer currentYear={data.year} />
</div>
