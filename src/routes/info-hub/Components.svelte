<script>
	import base from '$lib/assets/components/default.png';
	import roof from '$lib/assets/components/roof_panels.png';
	import ridge from '$lib/assets/components/ridge_cap.png';
	import bow from '$lib/assets/components/bow.png';
	import legs from '$lib/assets/components/legs.png';
	import braces from '$lib/assets/components/braces.png';
	import trim from '$lib/assets/components/trim.png';
	import baserail from '$lib/assets/components/base_rail.png';
	import hat from '$lib/assets/components/hat_channel.png';

    let currentImg = base;

</script>

<img src={currentImg} alt="Component visualizer">

<div class="flex flex-wrap gap-3  justify-center ">
    <button class="p-2 w-[300px] bg-slate-100 hover:text-ssdred" on:mouseenter={() => currentImg = roof} on:focusin={() => currentImg = roof} on:mouseleave={() => currentImg = base}  on:focusout={() => currentImg = base}>Roof Panels</button>
    <button class="p-2 w-[300px] bg-slate-100 hover:text-ssdred" on:mouseenter={() => currentImg = ridge} on:focusin={() => currentImg = ridge} on:mouseleave={() => currentImg = base}  on:focusout={() => currentImg = base}>Ridge Cap</button>
    <button class="p-2 w-[300px] bg-slate-100 hover:text-ssdred" on:mouseenter={() => currentImg = bow} on:focusin={() => currentImg = bow} on:mouseleave={() => currentImg = base}  on:focusout={() => currentImg = base}>Bow</button>
    <button class="p-2 w-[300px] bg-slate-100 hover:text-ssdred" on:mouseenter={() => currentImg = legs} on:focusin={() => currentImg = legs} on:mouseleave={() => currentImg = base}  on:focusout={() => currentImg = base}>Legs</button>
    <button class="p-2 w-[300px] bg-slate-100 hover:text-ssdred" on:mouseenter={() => currentImg = braces} on:focusin={() => currentImg = braces} on:mouseleave={() => currentImg = base}  on:focusout={() => currentImg = base}>Braces</button>
    <button class="p-2 w-[300px] bg-slate-100 hover:text-ssdred" on:mouseenter={() => currentImg = trim} on:focusin={() => currentImg = trim} on:mouseleave={() => currentImg = base}  on:focusout={() => currentImg = base}>Trim</button>
    <button class="p-2 w-[300px] bg-slate-100 hover:text-ssdred" on:mouseenter={() => currentImg = baserail} on:focusin={() => currentImg = baserail} on:mouseleave={() => currentImg = base}  on:focusout={() => currentImg = base}>Base Rail</button>
    <button class="p-2 w-[300px] bg-slate-100 hover:text-ssdred" on:mouseenter={() => currentImg = hat} on:focusin={() => currentImg = hat} on:mouseleave={() => currentImg = base}  on:focusout={() => currentImg = base}>Hat Channel</button>
</div>
<p class="mt-3">Select a component above to <span class="font-semibold text-ssdred">identify</span> it</p>