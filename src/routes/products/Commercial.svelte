<script>
// @ts-nocheck

	import { DESIGNER_URL, PRODUCTS } from '$lib/consts';
	import ProductHeader from './ProductHeader.svelte';
	import commercialA from '$lib/assets/commercial/cmA.png';
	import commercialB from '$lib/assets/commercial/cmB.png';
	import commercial1 from '$lib/assets/commercial/cm1.png';
	import commercial2 from '$lib/assets/commercial/cm2.png';
	import Pointer from '../../icons/Pointer.svelte';
</script>

<i class="anchor" id={PRODUCTS[4].pageKey}></i>
<ProductHeader currentContent={PRODUCTS[4]} />

<section class="flex flex-wrap gap-6 container mx-auto sm:p-8 p-4 my-10">
	<div>
		<h3 class="text-lg font-semibold">What is a {PRODUCTS[4].title} Metal Building?</h3>
		<p>
			A commercial metal building is a structure typically used for business or industrial purposes.
			These buildings are known for their durability, cost-effectiveness, and versatility. They can
			range from small retail shops to large warehouses, office complexes, manufacturing facilities,
			and more. They offer benefits such as resistance to fire, pests, and harsh weather conditions,
			making them popular choices for various commercial and industrial applications.
		</p>
	</div>

	<div>
		<h3 class="text-lg font-semibold">Why are Metal {PRODUCTS[4].title} Buildings so Popular?</h3>
		<p>Metal commercial buildings are popular for several reasons:</p>
	</div>

	<ul class="flex flex-wrap justify-center items-center mb-2">
		{#each PRODUCTS[4].examples as ex}
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
			Overall, the combination of durability, cost-effectiveness, versatility, and sustainability
			makes metal commercial buildings an attractive option for many businesses and industries.
		</p>
	</div>

	<div>
		<h3 class="text-lg font-semibold">Metal Commercial Buildings Uses</h3>
		<p>
			Metal commercial buildings have a wide range of uses across various industries. Some common
			applications include:
		</p>
	</div>

	<ul class="flex flex-wrap justify-center mb-2">
		{#each PRODUCTS[4].examples2 as ex}
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
				href="https://design.stellarsteeldesigns.com/#fa31d266c7f184ae685555e8ea4100a6"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={commercial1}
					alt="Commercial shed building"
				/>
				<Pointer
					class="h-8 w-auto absolute rotate-12 left-3 bottom-7 group-hover:left-8 group-hover:-rotate-12 transition-all"
				/>
				<span class="float-end text-sm font-medium p-2 italic text-white"
					>Starting at <span class="text-lg">$58,470</span></span
				>
			</a>
			<a
				href="https://design.stellarsteeldesigns.com/#99daca4b4c3b52a3296a63c7dfbec6f4"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={commercialA}
					alt="Commercial shed building"
				/>
				<Pointer
					class="h-8 w-auto absolute rotate-12 left-3 bottom-7 group-hover:left-8 group-hover:-rotate-12 transition-all"
				/>
				<span class="float-end text-sm font-medium p-2 italic text-white"
					>Starting at <span class="text-lg">$90,836</span></span
				>
			</a>
			<a
				href="https://design.stellarsteeldesigns.com/#11abb3f691779b81c5ed1f367ec3ac14"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={commercialB}
					alt="Commercial shed building"
				/>
				<Pointer
					class="h-8 w-auto absolute -rotate-12 right-3 bottom-7 group-hover:right-8 group-hover:rotate-12 transition-all"
				/>
				<span class="float-start text-sm font-medium p-2 italic text-white"
					>Starting at <span class="text-lg">$84,413</span></span
				>
			</a>
			<a
				href="https://design.stellarsteeldesigns.com/#9c3cf3d275eaabf1340c5829d3e373fb"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={commercial2}
					alt="Commercial shed building"
				/>

				<Pointer
				class="h-8 w-auto absolute -rotate-12 right-3 bottom-7 group-hover:right-8 group-hover:rotate-12 transition-all"
			/>
			<span class="float-start text-sm font-medium p-2 italic text-white"
				>Starting at <span class="text-lg">$80,455</span></span
			>
			</a>
		</div>
	</div>
</section>


<section class="flex flex-wrap gap-6 container mx-auto sm:p-8 p-4 my-10">
	<div class="w-full sm:w-8/12 m-auto p-12 bg-slate-700 text-white rounded">
		<p>
			These are just a few examples of the many uses for metal commercial buildings. Their
			versatility, durability, and cost-effectiveness make them suitable for a wide range of
			applications in various industries.
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
