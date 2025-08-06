<script lang="ts">
	import { EMAIL, PHONENUMBER_DISPLAY, PHONENUMBER_HREF } from '$lib/consts';
	import Mail from '../icons/Mail.svelte';
	import Phone from '../icons/Phone.svelte';

	export let currentYear: string;
</script>

<footer class="py-6 bg-gray-700 text-white text-center  text-xs sm:text-sm z-10">
	<p>Copyright © {currentYear} Diaz Remodelling LLC. All Rights Reserved | <a href="privacy-policy" class="underline hover:text-ssdblue-200">Privacy Policy</a></p>
	<section
		class="flex items-center sm:p-2 p-3 gap-2 sm:gap-4 sm:justify-center justify-around text-white flex-wrap"
	>
		<a href={PHONENUMBER_HREF} class="inline-block hover:underline hover:text-ssdblue-200">
			<Phone class="h-4 w-auto inline align-sub mx-2 fill-white" />{PHONENUMBER_DISPLAY}
		</a>
		<a href="mailto:{EMAIL}" class="hover:underline hover:text-ssdblue-200"
			><Mail class="h-4 w-auto inline align-sub mx-2 fill-white" />{EMAIL}</a
		>
	</section>
</footer>
