<script>
	import { DESIGNER_URL, PRODUCTS } from '$lib/consts';
	import ProductHeader from './ProductHeader.svelte';
	import residentialA from '$lib/assets/residential/reA.png';
	import residentialB from '$lib/assets/residential/reB.png';
	import residential1 from '$lib/assets/residential/re1.png';
	import residential2 from '$lib/assets/residential/re2.png';
	import Pointer from '../../icons/Pointer.svelte';

</script>

<i class="anchor" id={PRODUCTS[3].pageKey}></i>
<ProductHeader currentContent={PRODUCTS[3]} />

<section class="flex flex-wrap gap-6 container mx-auto sm:p-8 p-4 my-10">
	<div>
		<h3 class="text-lg font-semibold">What is a Metal {PRODUCTS[3].title} Building?</h3>
		<p>
			A Metal {PRODUCTS[3].title} building refers to a structure designed for use as a residential dwelling.
			Unlike traditional homes built with wood or other materials, metal residential buildings offer
			several advantages, including durability, energy efficiency, and design flexibility. This makes
			them the perfect choice for people looking to build a new farm home, mountain cabin, or modern
			neighborhood home at a low cost.
		</p>
	</div>

	<div>
		<h3 class="text-lg font-semibold">Why are Metal {PRODUCTS[3].title} Buildings so Popular?</h3>
		<p>Metal houses are popular for several reasons:</p>
	</div>

	<ul class="flex flex-wrap justify-center items-top mb-2">
		{#each PRODUCTS[3].examples as ex}
			<li class="md:w-6/12 lg:w-4/12 w-full">
				<div class=" bg-slate-100 rounded m-2">
					<div class="p-4">
						<h4 class="font-semibold text-ssdred">{ex.title}</h4>
						<p>
							{ex.desc}
						</p>
					</div>
				</div>
			</li>
		{/each}
	</ul>

	<div class="mb-4">
		<p>
			Overall, the popularity of metal houses stems from their durability, longevity, energy
			efficiency, design flexibility, quick construction, sustainability, and cost-effectiveness.
			These factors make metal houses an attractive option for homeowners seeking modern, reliable,
			and efficient housing solutions.
		</p>
	</div>

	<div>
		<h3 class="text-lg font-semibold">Why are Metal {PRODUCTS[3].title} Buildings so Popular?</h3>
		<p>Metal Residential Building Uses:</p>
	</div>

	<ul class="flex flex-wrap justify-center mb-2">
		{#each PRODUCTS[3].examples2 as ex}
			<li class="md:w-6/12 lg:w-4/12 w-full">
				<div class="flex flex-column bg-slate-100 rounded m-2 min-h-[200px]">
					<div class="pe-4 m-4 border-e-2 my-auto">{@html ex.icon}</div>
					<div class="p-4">
						<h4 class="font-semibold text-ssdred">{ex.title}</h4>
						<p>
							{ex.desc}
						</p>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</section>

<section class="bg-ssdblue-950">
	<div class="flex w-full flex-wrap content-center justify-center p-4 bg-slate-700">
		<div class="flex flex-wrap justify-center gap-4">
			<a
				href="https://design.stellarsteeldesigns.com/#ce9ff1fa1cd94ed12170294757544d46"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={residential1}
					alt="Residential shed building"
				/>
				<Pointer
					class="h-8 w-auto absolute rotate-12 left-3 bottom-7 group-hover:left-8 group-hover:-rotate-12 transition-all"
				/>
				<span class="float-end text-sm font-medium p-2 italic text-white"
					>Starting at <span class="text-lg">$29,508</span></span
				>
			</a>
			<a
				href="https://design.stellarsteeldesigns.com/#65d6f399108ddeb3d8595bd671dfe071"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={residentialA}
					alt="Residential shed building"
				/>
				<Pointer
					class="h-8 w-auto absolute rotate-12 left-3 bottom-7 group-hover:left-8 group-hover:-rotate-12 transition-all"
				/>
				<span class="float-end text-sm font-medium p-2 italic text-white"
					>Starting at <span class="text-lg">$47,089</span></span
				>
			</a>
			<a
				href="https://design.stellarsteeldesigns.com/#e60eda51b04890850639c08871916025"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={residentialB}
					alt="Residential shed building"
				/>
				<Pointer
					class="h-8 w-auto absolute -rotate-12 right-3 bottom-7 group-hover:right-8 group-hover:rotate-12 transition-all"
				/>
				<span class="float-start text-sm font-medium p-2 italic text-white"
					>Starting at <span class="text-lg">$29,830</span></span
				>
			</a>
			<a
				href="https://design.stellarsteeldesigns.com/#86b1a1a849d8315ab808a5baa1848ae0"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={residential2}
					alt="Residential shed building"
				/>

				<Pointer
				class="h-8 w-auto absolute -rotate-12 right-3 bottom-7 group-hover:right-8 group-hover:rotate-12 transition-all"
			/>
			<span class="float-start text-sm font-medium p-2 italic text-white"
				>Starting at <span class="text-lg">$34,675</span></span
			>
			</a>
		</div>
	</div>
</section>

<section class="flex flex-wrap gap-6 container mx-auto sm:p-8 p-4 my-10">
	<div class="w-full sm:w-8/12 m-auto p-12 bg-slate-700 text-white rounded">
		<p>
			Overall, metal residential buildings offer a wide range of uses and applications in
			residential construction, providing durable, efficient, and customizable solutions for
			homeowners, developers, and communities alike.
		</p>
		<div class="mt-6 text-center">
			<a
				href={DESIGNER_URL}
				target="_blank"
				class="inline-block text-white font-bold px-4 py-2 rounded mb-4 bg-ssdblue-800 hover:bg-ssdblue-700 active:bg-ssdblue-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
				>Design Your Structure</a
			>
		</div>
	</div>
</section>
