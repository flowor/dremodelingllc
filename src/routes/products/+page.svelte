<script>
	// @ts-nocheck

	import FreeStanding from './FreeStanding.svelte';
	import Residential from './Residential.svelte';
	import Barn from './Barn.svelte';
	import Commercial from './Commercial.svelte';
	import Garage from './Garage.svelte';
	import banner from '$lib/assets/banner.jpg';

	let description = "Learn more about the products we offer: Free Standing Lean-To buildings, Residential structures, Barns, Commercial Buildings, and Garages.";
</script>

<svelte:head>
	<title>Diaz Remodelling LLC - Products</title>
	<meta name="description" content="{description}">
	<meta property="og:description" content="{description}"/>
	<meta property="og:image" content="{banner}"/>
</svelte:head>

<FreeStanding />
<Garage />
<Barn />
<Residential />
<Commercial />