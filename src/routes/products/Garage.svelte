<script>
	import { DESIGNER_URL, PRODUCTS } from '$lib/consts';
	import ProductHeader from './ProductHeader.svelte';
	import garageA from '$lib/assets/garage/gaA.png';
	import garageB from '$lib/assets/garage/gaB.png';
	import garage1 from '$lib/assets/garage/ga1.png';
	import garage2 from '$lib/assets/garage/ga2.png';
	import Pointer from '../../icons/Pointer.svelte';
</script>

<i class="anchor" id={PRODUCTS[1].pageKey}></i>
<ProductHeader currentContent={PRODUCTS[1]} />

<section class="flex flex-wrap gap-6 container mx-auto sm:p-8 p-4 my-10">
	<div>
		<h3 class="text-lg font-semibold">What is a {PRODUCTS[1].title} Metal Building?</h3>
		<p>
			A metal garage building refers to a structure specifically designed and constructed for
			housing vehicles, equipment, or other items. Whether you need a basic storage space or a fully
			customized workshop or living space, a metal garage can be tailored to meet your specific
			needs and preferences.
		</p>
	</div>

	<div>
		<h3 class="text-lg font-semibold">Why are Metal Garages so Popular?</h3>
		<p>
			Metal garages are popular for their durability, resistance to weather elements, and relatively
			low maintenance requirements compared to traditional wooden garages.
		</p>
		<p>
			Overall, metal garage buildings are a popular choice for homeowners, businesses, and
			organizations looking for a reliable, durable, and cost-effective solution for vehicle storage
			and other purposes.
		</p>
	</div>

	<div>
		<h3 class="text-lg font-semibold">{PRODUCTS[1].title} Uses</h3>
		<p>
			Metal garages are versatile structures that can serve various purposes. Some common uses of metal garages include:
		</p>
	</div>

	<ul class="flex flex-wrap justify-center mb-2">
		{#each PRODUCTS[1].examples as ex}
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
				href="https://design.stellarsteeldesigns.com/#c44db32a766b9acdb66ab3f5fe70c89c"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={garage1}
					alt="garage shed building"
				/>
				<Pointer
					class="h-8 w-auto absolute rotate-12 left-3 bottom-7 group-hover:left-8 group-hover:-rotate-12 transition-all"
				/>
				<span class="float-end text-sm font-medium p-2 italic text-white"
					>Starting at <span class="text-lg">$30,600</span></span
				>
			</a>
			<a
				href="https://design.stellarsteeldesigns.com/#92d151f8b70829bf1aac12423a1e21aa"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={garageA}
					alt="garage shed building"
				/>
				<Pointer
					class="h-8 w-auto absolute rotate-12 left-3 bottom-7 group-hover:left-8 group-hover:-rotate-12 transition-all"
				/>
				<span class="float-end text-sm font-medium p-2 italic text-white"
					>Starting at <span class="text-lg">$24,625</span></span
				>
			</a>
			<a
				href="https://design.stellarsteeldesigns.com/#cc1d4bf0d4fe714feb7b09effe7d8302"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={garageB}
					alt="garage shed building"
				/>
				<Pointer
					class="h-8 w-auto absolute -rotate-12 right-3 bottom-7 group-hover:right-8 group-hover:rotate-12 transition-all"
				/>
				<span class="float-start text-sm font-medium p-2 italic text-white"
					>Starting at <span class="text-lg">$12,329</span></span
				>
			</a>
			<a
				href="https://design.stellarsteeldesigns.com/#7e4434bee753d483ffbdfb93e59b9711"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={garage2}
					alt="garage shed building"
				/>

				<Pointer
				class="h-8 w-auto absolute -rotate-12 right-3 bottom-7 group-hover:right-8 group-hover:rotate-12 transition-all"
			/>
			<span class="float-start text-sm font-medium p-2 italic text-white"
				>Starting at <span class="text-lg">$19,725</span></span
			>
			</a>
		</div>
	</div>
</section>

<section class="flex flex-wrap gap-6 container mx-auto sm:p-8 p-4 my-10">

	<div class="w-full sm:w-8/12 m-auto p-12 bg-slate-700 text-white rounded">
		<h3 class="text-lg font-semibold">{PRODUCTS[1].title} Customization</h3>
		<p>
			Overall, the versatility and durability of metal garages make them suitable for a wide range of residential, commercial, and agricultural applications.
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
