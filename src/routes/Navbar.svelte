<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo.png';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { DESIGNER_URL, PRODUCTS } from '$lib/consts';
	import Box from '../icons/Box.svelte';

	import { AccordionItem, Accordion } from 'flowbite-svelte';
	import Plus from '../icons/Plus.svelte';

	let mobileMenuVisible = false;

	function toggleMobile() {
		mobileMenuVisible = !mobileMenuVisible;
	}

	const MENU_ITEMS = [
		{ title: 'Home', path: '/' },
		{
			title: 'Products',
			path: '/products',
			children: PRODUCTS.map(function (p) {
				return { title: p.title, path: `/products/#${p.pageKey}` };
			})
		},
		{ title: 'About Us', path: '/about',
			children: [
				{ title: 'Who We Are', path: '/about/#who-we-are' },
				{ title: 'Our Mission', path: '/about/#our-mission' },
				{ title: 'What We Offer', path: '/about/#what-we-offer' },
				{ title: '1 Sale = 10 Trees', path: '/about/#one-sale-10-trees' },
			] 
		},
		{
			title: 'Info Hub',
			path: '/info-hub',
			children: [
				{ title: 'Order Process', path: '/info-hub/#order-process' },
				{ title: 'Components and Colors', path: '/info-hub/#styles' },
				{ title: 'Terminology', path: '/info-hub/#terminology' },
				{ title: 'Warranty and Certifications', path: '/info-hub/#warranty-and-certs' },
				{ title: 'Coverage Area', path: '/info-hub/#coverage-area' },
			]
		},
		{ title: 'FAQ', path: '/faq' },
		{ title: 'Contact', path: '/contact' }
	];
</script>

<nav class="bg-white p-4 shadow">
	<div class="flex items-center justify-between px-6">
		<div>
			<a href="/" class="text-gray flex items-center">
				<img src={logo} alt="Diaz Remodelling LLC Logo" class="h-16" />
				<span class="text-ssdblue-950 flex flex-col ml-3 leading-none font-extrabold text-xl"
					><span>Diaz</span><span>Remodelling</span><span>LLC</span></span
				>
			</a>
		</div>
		<div>
			<button class="text-gray lg:hidden" on:click={toggleMobile}>
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				</svg>
			</button>
		</div>
		<ul
			class="text-gray hidden lg:flex lg:justify-center lg:space-x-4 text-lg text-ssdblue-950 font-semibold gap-4"
		>
			{#each MENU_ITEMS as item, i}
				<li aria-current={$page.url.pathname === item.path ? 'page' : undefined} class="group">
					{#if item.children}
						<a href={item.path} class="inline-block peer hover:text-gray-400">{item.title} <Plus class="transition-all group-hover:rotate-45 mb-1 inline align-middle h-4 w-auto"  /></a>
						<ul
							class="hidden peer-hover:flex hover:flex absolute
                    flex-col bg-white drop-shadow-lg"
						>
							{#each item.children as child, j}
								<li>
									<a
										target="_self"
										href={child.path}
										class="inline-block px-4 py-2 hover:text-gray-400">{child.title}</a
									>
								</li>
							{/each}
						</ul>
					{:else}
						<a href={item.path} class="inline-block hover:text-gray-400">{item.title}</a>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
	{#if mobileMenuVisible}
		<div
			class="pt-2 mt-4 lg:hidden border-t border-gray-200"
			transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}
		>
			<ul class="text-lg text-ssdblue-950 font-semibold">
				{#each MENU_ITEMS as item, i}
					<li aria-current={$page.url.pathname === item.path ? 'page' : undefined}>
						{#if item.children}
							<Accordion flush>
								<AccordionItem
									><div slot="arrowup"></div>
									<span slot="arrowdown"></span>
									<span slot="header" class="text-ssdblue-950">{item.title}<Plus class="transition-all group-hover:rotate-45 inline align-middle mb-1 ms-2 h-4 w-auto"  /></span>
									{#each item.children as child, i}
										<a
											href={child.path}
											class="ms-4 block py-2 active:bg-gray-100 hover:text-gray-400"
											on:click={() => (mobileMenuVisible = false)}>{child.title}</a
										>
									{/each}
								</AccordionItem>
							</Accordion>
						{:else}
							<a
								href={item.path}
								class="block py-2 active:bg-gray-100 hover:text-gray-400"
								on:click={() => (mobileMenuVisible = false)}>{item.title}</a
							>
						{/if}
					</li>
				{/each}

				<li class="m-4 text-center">
					<a
						href={DESIGNER_URL}
						target="_blank"
						class="text-white font-bold px-5 py-4 rounded bg-ssdred active:bg-[#ff8b60] hover:bg-[#ff8b60] uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
						><Box class="h-5 w-auto inline me-2" />3D Customizer and Pricing</a
					>
				</li>
			</ul>
		</div>
	{/if}
</nav>
