<script lang="ts">
	import homeshed from '$lib/assets/blackshed.jpg';
	import transitionshed from '$lib/assets/transition.jpg';
	import insideshed from '$lib/assets/inside.png';
	import freeStanding from '$lib/assets/freeStanding.jpg';
	import residential from '$lib/assets/residential.jpg';
	import barn from '$lib/assets/barn.jpg';
	import commercial from '$lib/assets/commercial.jpg';
	import garage from '$lib/assets/garage.png';
	import banner from '$lib/assets/banner.jpg';

	import Map from '../Map.svelte';

	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { DESIGNER_URL } from '$lib/consts';

	import { LEAD_TIMES } from '$lib/consts';
	import Tree from '../icons/Tree.svelte';

	let chatBubbleVisible = false;

	onMount(() =>
		setTimeout(() => {
			chatBubbleVisible = true;
		}, 6000)
	);

	let y = 0;
	let h = 0;
	let isHover = false;
	let description =
		'We bring together great customer service, experience, precision, and creativity to shape the future of metal buildings.';
</script>

<svelte:head>
	<title>Diaz Remodelling LLC</title>
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={banner} />
</svelte:head>
<svelte:window bind:scrollY={y} />

<section class="header relative items-start min-h-[calc(100vh-11rem)] flex bg-white">
	<div class="container mx-auto mt-32 items-center flex flex-wrap">
		<div class="w-full lg:w-6/12 px-4 sm:px-10 sm:text-left text-center slide-fade-in-animation">
			<h1 class="font-bold text-3xl md:text-6xl sm:text-4xl text-slate-800">
				Designing Your Future Steel Structure with Stellar Service
			</h1>
			<p class="mt-4 md:text-lg leading-relaxed text-slate-800">
				We bring together great customer service, experience, precision, and creativity to shape the
				future of metal buildings!
			</p>

			<div class="mt-6 text-center lg:text-left">
				<a
					href={DESIGNER_URL}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block text-white font-bold px-6 py-4 rounded mb-4 bg-ssdblue-950 active:bg-ssdblue-800 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
					>Design Your Structure</a
				>
			</div>
		</div>
		<span
			bind:clientHeight={h}
			class="my-4 lg:p-0 lg:w-6/12 slide-fade-in-animation anim-duration-2"
		>
			<img
				style="opacity: {isHover ? 1 : (2 * y) / h}; transition:opacity 0.2s linear;"
				src={transitionshed}
				class="sm:rounded-lg"
				alt="Shed Model"
			/>
			<img
				on:mouseenter={() => {
					isHover = true;
				}}
				on:mouseleave={() => {
					isHover = false;
				}}
				style="opacity: {isHover ? 0 : (h - 2 * y) / h}; transition:opacity 0.2s linear;"
				src={homeshed}
				class="sm:rounded-lg absolute top-0"
				alt="Shed"
			/>
		</span>
	</div>
</section>

<section class="relative bg-gray-100">
	<div
		class="justify-center text-start lg:text-justify flex flex-wrap xl:flex-nowrap items-center pt-20 px-4 gap-8 w-11/12 sm:w-10/12 lg:w-8/12 mx-auto"
	>
		<div>
			<div class="bg-white rounded-full p-4 border-[#b1d8b7] border-4 border-dotted shadow-md me-4">
				<Tree class="w-auto fill-[#b1d8b7] h-24 relative" />
			</div>
		</div>
		<div class="flex flex-wrap gap-3">
			<span class="text-2xl relative text-gray-700 font-semibold"
				><span class="font-bold">Growing Together</span>: Ten Trees with Every Sale</span
			>
			<p>
				At Diaz Remodelling LLC, we understand the importance of responsible stewardship of our
				environment. That's why, for every metal building sold, we pledge to plant 10 trees, helping
				to offset carbon emissions and contribute to reforestation efforts.
			</p>
			<p>
				Our commitment to sustainability extends to every aspect of our business. From using
				environmentally friendly materials in our buildings to implementing energy-efficient
				practices in our operations, we strive to minimize our impact on the planet while maximizing
				the benefits for future generations.
			</p>
			<p>
				We believe that by taking care of the Earth, we can create a better world for all. That's
				why we're proud to announce that we will work with a non-profit organization, such as
				<a
					class="underline hover:text-ssdblue-950 text-ssdblue-700"
					href="https://plantwithpurpose.org/"
					target="_blank"
					rel="noopener noreferrer">Plant with Purpose</a
				>
				and
				<a
					class="underline hover:text-ssdblue-950 text-ssdblue-700"
					href="https://onetreeplanted.org/"
					target="_blank"
					rel="noopener noreferrer">One Tree Planted</a
				>, to ensure that our tree-planting efforts are effective and meaningful.
			</p>
			<p>
				Join us in our mission to build not just structures, but a greener, more sustainable future
				for everyone.
			</p>
			<a
				class="underline hover:text-ssdblue-950 text-[#50a05c] font-bold"
				href="/about#one-sale-10-trees" target="_self">Learn More...</a
			>
		</div>
	</div>

	<div class="flex flex-wrap items-center mt-16"></div>
</section>

<section class="pb-60 relative bg-slate-300">
	<div class="justify-center text-center flex flex-wrap pt-20">
		<div class="w-full md:w-6/12 px-12 md:px-4">
			<h2 class="font-semibold text-4xl">Products</h2>
		</div>
	</div>

	<div class="flex flex-wrap items-center mt-16">
		<div class="w-full xl:w-10/12 px-4 mr-auto ml-auto">
			<div class="justify-center flex flex-wrap relative gap-8">
				<div
					class="relative flex flex-col break-words mb-6 shadow-lg rounded-lg w-full md:w-[400px] bg-ssdblue-950"
				>
					<img alt="..." src={freeStanding} class="w-full align-middle rounded-t-lg" />
					<blockquote class="relative p-8 mb-4">
						<h4 class="text-xl font-bold text-white">Free Standing Lean-To</h4>
						<p class="mt-2 text-white">
							These resilient steel structures are tailor-made to suit your preferences, whether
							you’re looking to host an event or simply enjoying a smaller outdoor gathering.
						</p>
						<div class="flex gap-3">
							<a
								href="/products#free-standing"
								class="mt-4 inline-block text-ssdblue-950 font-bold px-4 py-2 rounded mb-4 bg-slate-200 active:bg-white hover:bg-white uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
								>Learn More</a
							>
							<a
								href={DESIGNER_URL}
								target="_blank"
								rel="noopener noreferrer"
								class="mt-4 inline-block text-white font-bold px-4 py-2 rounded mb-4 bg-ssdblue-800 active:bg-ssdblue-900 hover:bg-ssdblue-900 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
								>Design Your Own</a
							>
						</div>
					</blockquote>
				</div>
				<div
					class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg md:w-[400px] bg-ssdblue-950"
				>
					<img alt="..." src={commercial} class="w-full align-middle rounded-t-lg" />
					<blockquote class="relative p-8 mb-4">
						<h4 class="text-xl font-bold text-white">Commercial</h4>
						<p class="mt-2 text-white">
							Our sturdy commercial steel structures are perfect for setting up shops, offices, and
							factories, elevating your business with long-lasting quality and visually pleasing
							design.
						</p>
						<div class="flex gap-3">
							<a
								href="/products#commercial"
								class="mt-4 inline-block text-ssdblue-950 font-bold px-4 py-2 rounded mb-4 bg-slate-200 active:bg-white hover:bg-white uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
								>Learn More</a
							>
							<a
								href={DESIGNER_URL}
								target="_blank"
								rel="noopener noreferrer"
								class="mt-4 inline-block text-white font-bold px-4 py-2 rounded mb-4 bg-ssdblue-800 active:bg-ssdblue-900 hover:bg-ssdblue-900 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
								>Design Your Own</a
							>
						</div>
					</blockquote>
				</div>
				<div
					class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg md:w-[400px] bg-ssdblue-950"
				>
					<img alt="..." src={residential} class="w-full align-middle rounded-t-lg" />
					<blockquote class="relative p-8 mb-4">
						<h4 class="text-xl font-bold text-white">Residential</h4>
						<p class="mt-2 text-white">
							Have you ever imagined living in a sturdy, long-term home that requires minimal
							upkeep? Our steel homes offer precisely that—great for family or vacation homes, we
							can ensure safety and comfort with ease.
						</p>
						<div class="flex gap-3">
							<a
								href="/products#residential"
								class="mt-4 inline-block text-ssdblue-950 font-bold px-4 py-2 rounded mb-4 bg-slate-200 active:bg-white hover:bg-white uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
								>Learn More</a
							>
							<a
								href={DESIGNER_URL}
								target="_blank"
								rel="noopener noreferrer"
								class="mt-4 inline-block text-white font-bold px-4 py-2 rounded mb-4 bg-ssdblue-800 active:bg-ssdblue-900 hover:bg-ssdblue-900 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
								>Design Your Own</a
							>
						</div>
					</blockquote>
				</div>
				<div
					class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg md:w-[400px] bg-ssdblue-950"
				>
					<img alt="..." src={garage} class="w-full align-middle rounded-t-lg" />
					<blockquote class="relative p-8 mb-4">
						<h4 class="text-xl font-bold text-white">Garage</h4>
						<p class="mt-2 text-white">
							Keep your wheels secure in one of our weatherproof steel garages. With a spacious
							design, perfect for storing vehicles, tools, or a personal workshop, you’ll never have
							to worry about your property being stolen or destroyed.
						</p>
						<div class="flex gap-3">
							<a
								href="/products#garage"
								class="mt-4 inline-block text-ssdblue-950 font-bold px-4 py-2 rounded mb-4 bg-slate-200 active:bg-white hover:bg-white uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
								>Learn More</a
							>
							<a
								href={DESIGNER_URL}
								target="_blank"
								rel="noopener noreferrer"
								class="mt-4 inline-block text-white font-bold px-4 py-2 rounded mb-4 bg-ssdblue-800 active:bg-ssdblue-900 hover:bg-ssdblue-900 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
								>Design Your Own</a
							>
						</div>
					</blockquote>
				</div>
				<div
					class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg md:w-[400px] bg-ssdblue-950"
				>
					<img alt="..." src={barn} class="w-full align-middle rounded-t-lg" />
					<blockquote class="relative p-8 mb-4">
						<h4 class="text-xl font-bold text-white">Barn</h4>
						<p class="mt-2 text-white">
							Been looking for a sturdy building to protect your livestock and equipment? Look no
							further than our steel barns, which are built tough and weather-resistant while
							maintaining the classic rustic farm look.
						</p>

						<div class="flex gap-3">
							<a
								href="/products#barn"
								class="mt-4 inline-block text-ssdblue-950 font-bold px-4 py-2 rounded mb-4 bg-slate-200 active:bg-white hover:bg-white uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
								>Learn More</a
							>
							<a
								href={DESIGNER_URL}
								target="_blank"
								rel="noopener noreferrer"
								class="mt-4 inline-block text-white font-bold px-4 py-2 rounded mb-4 bg-ssdblue-800 active:bg-ssdblue-900 hover:bg-ssdblue-900 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
								>Design Your Own</a
							>
						</div>
					</blockquote>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="pb-40 relative bg-slate-100">
	<div
		class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
		style="transform: translateZ(0px);"
	>
		<svg
			class="absolute bottom-0 overflow-hidden"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="none"
			version="1.1"
			viewBox="0 0 2560 98"
			x="0"
			y="0"
			><polygon class="text-slate-100 fill-current" points="2560 0 2560 100 0 100"></polygon></svg
		>
	</div>
	<div class="container mx-auto">
		<div class="flex flex-wrap items-center">
			<div class="w-12/12 sm:w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto md:-mt-20">
				<div
					class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-800"
				>
					<img alt="..." src={insideshed} class="w-full align-middle rounded-t-lg" />
					<blockquote class="relative p-8 mb-4">
						<h4 class="text-xl font-bold text-white">About Us</h4>
						<p class="text-md mt-2 text-white">
							At Diaz Remodelling LLC, our mission is to provide metal buildings of exceptional
							quality, exceeding our clients’ expectations through customizable and innovative
							design. Through collaboration, integrity, and a dedication to excellence, we aim to be
							the preferred partner for those seeking durable, cost-effective, and sustainable metal
							building solutions. Our goal is to build lasting relationships with our customers,
							suppliers, and community, while continuously striving for growth, innovation, and
							operational excellence in the metal building industry.
						</p>
					</blockquote>
				</div>
			</div>

			<div class="w-full md:w-6/12 px-4 mt-20">
				<div class="flex flex-wrap">
					<div class="w-full md:w-6/12 px-4">
						<div class="relative flex flex-col mt-4">
							<div class="px-4 py-5 flex-auto">
								<h6 class="text-xl mb-1 font-semibold">Durability and Strength</h6>
								<p class="mb-4 text-blueGray-500">
									Steel structures from Diaz Remodelling LLC offer unparalleled durability and
									strength, providing long-term peace of mind for your investment, ensuring your
									building withstands the test of time and adverse weather conditions.
								</p>
							</div>
						</div>
						<div class="relative flex flex-col min-w-0">
							<div class="px-4 py-5 flex-auto">
								<h6 class="text-xl mb-1 font-semibold">Versatility and Adaptability</h6>
								<p class="mb-4 text-blueGray-500">
									With endless design possibilities, our steel structures seamlessly adapt to
									various architectural styles and purposes, from commercial warehouses and
									industrial facilities to residential complexes and garages, making them a perfect
									choice for any project.
								</p>
							</div>
						</div>
					</div>
					<div class="w-full md:w-6/12 px-4">
						<div class="relative flex flex-col min-w-0 mt-4">
							<div class="px-4 py-5 flex-auto">
								<h6 class="text-xl mb-1 font-semibold">Cost-Effectiveness</h6>
								<p class="mb-4 text-blueGray-500">
									Choosing a steel structure means opting for a cost-effective solution with minimal
									maintenance requirements, lower insurance premiums, and faster construction times,
									maximizing your budget and minimizing long-term expenses.
								</p>
							</div>
						</div>
						<div class="relative flex flex-col min-w-0">
							<div class="px-4 py-5 flex-auto">
								<h6 class="text-xl mb-1 font-semibold">Sustainability and Eco-Friendliness</h6>
								<p class="mb-4 text-blueGray-500">
									Diaz Remodelling LLC prioritizes sustainability by utilizing recyclable materials
									and reducing construction waste, ensuring your steel structure not only meets
									environmental standards but also contributes to a greener future.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="pb-40 relative bg-gray-600">
	<div class="container mx-auto text-white">
		<div class="text-center pt-10">
			<h2 class="font-semibold text-4xl">Coverage Area</h2>
		</div>

		<div class="flex flex-wrap items-center mt-10">
			<div class="w-full">
				<div class="flex flex-wrap">
					<Map />
				</div>
				<p class="text-center py-2 font-semibold">Hover over a state to view its lead time</p>
				<ul
					class="font-medium grid grid-rows-12 md:grid-rows-11 lg:grid-rows-8 xl:grid-rows-6 justify-items-center grid-flow-col mt-10"
				>
					{#each Object.entries(LEAD_TIMES)
						.map((t) => t[1].state)
						.sort() as state}
						<li class="p-2">{state}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

{#if chatBubbleVisible}
	<div class="opacity-85 fixed bottom-0 right-0 m-4 flex justify-center items-center">
		<a
			transition:fly={{ duration: 600, x: 100, y: 500, opacity: 0.5, easing: quintOut }}
			href="/contact"
			class="z-40 flex justify-center items-center sm:w-20 sm:h-20 w-16 h-16 hover:bg-ssdblue-700 bg-ssdblue-800 rounded-full shadow-md hover:shadow-lg group"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="sm:w-[34px] sm:h-[34px] w-[28px] h-[28px] group-hover:scale-125 transition-all"
				viewBox="0 0 24 24"
				fill="none"
				><path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M2 2H18V7H22V22.618L16.7639 20H6V15.618L2 17.618V2ZM6 13.382V7H16V4H4V14.382L6 13.382ZM8 9V18H17.2361L20 19.382V9H8Z"
					fill="white"
				/></svg
			>
		</a>
		<div
			transition:slide={{ delay: 250, duration: 1000, easing: quintOut, axis: 'x' }}
			class="absolute md:-top-10 right-14 p-2 md:w-[200px] md:p-4 text-nowrap md:text-wrap rounded-l-lg md:rounded-lg pr-4 text-white font-semibold bg-gray-700 shadow-md text-sm"
		>
			Contact us today for a free quote!
		</div>
	</div>
{/if}
