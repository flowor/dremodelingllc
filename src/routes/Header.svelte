<script>
	import {
		DESIGNER_URL,
		EMAIL,
		PHONENUMBER_DISPLAY,
		PHONENUMBER_HREF,
		SOCIAL_MEDIA_HANDLES
	} from '$lib/consts';
	import Box from '../icons/Box.svelte';
	import Facebook from '../icons/Facebook.svelte';
	import Mail from '../icons/Mail.svelte';
	import Phone from '../icons/Phone.svelte';
	import Navbar from './Navbar.svelte';
</script>

<header class="sticky top-0 z-40">
	<section
		class="flex items-center justify-center bg-ssdblue-950 text-sm sm:text-base sm:p-5 p-5 text-white"
	>
		<div class="flex w-full items-center sm:justify-center flex-wrap gap-1 sm:gap-4">
			<a href={PHONENUMBER_HREF} class="inline-block hover:underline hover:text-ssdblue-200">
				<Phone class="h-4 w-auto inline align-sub mx-2 fill-white" />{PHONENUMBER_DISPLAY}
			</a>
			<a href="mailto:{EMAIL}" class="hover:underline hover:text-ssdblue-200"
				><Mail class="h-4 w-auto inline align-sub mx-2 fill-white" />{EMAIL}</a
			>
			<a href={SOCIAL_MEDIA_HANDLES.facebook.href} class="hover:underline hover:text-ssdblue-200"
				><Facebook class="h-4 w-auto inline align-sub mx-2 fill-white" />@stellarsteeldesigns</a
			>
			<div class="absolute right-3">
				<a
					href={DESIGNER_URL}
					target="_blank"
					class="xl:block hidden text-white font-bold px-4 py-2 rounded bg-ssdred active:bg-[#ff8b60] hover:bg-[#ff8b60] uppercase shadow hover:shadow-lg ease-linear transition-all duration-150"
					><Box class="h-5 w-auto inline me-2" />3D Customizer and Pricing</a
				>
			</div>

			<!-- <a
			href={DESIGNER_URL}
			target="_blank"
			class="text-xs lg:text-sm lg:absolute lg:right-0 lg:me-3 lg:inline-block text-white font-bold px-4 py-2 rounded bg-ssdred active:bg-[#ff8b60]  hover:bg-[#ff8b60] uppercase shadow hover:shadow-lg ease-linear transition-all duration-150"
			><Box class="h-5 w-auto inline me-2" />3D Customizer and Pricing</a> -->
		</div>

		<div class="text-end">
			<a
				href={DESIGNER_URL}
				target="_blank"
				class="inline-block xl:hidden text-white font-bold px-4 py-2 rounded bg-ssdred active:bg-[#ff8b60] hover:bg-[#ff8b60] uppercase shadow hover:shadow-lg ease-linear transition-all duration-150"
				><Box class="h-5 w-auto inline" /></a
			>
		</div>
	</section>

	<Navbar />
</header>
