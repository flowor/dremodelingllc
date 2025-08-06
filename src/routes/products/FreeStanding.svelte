<script>
	import { DESIGNER_URL, PRODUCTS } from '$lib/consts';
	import ProductHeader from './ProductHeader.svelte';
	import freestandingA from '$lib/assets/freestanding/fsA.png';
	import freestandingB from '$lib/assets/freestanding/fsB.png';
	import freestandingD from '$lib/assets/freestanding/fsD.png';
	import freestandingRl1 from '$lib/assets/freestanding/fsrl1.jpg';
	import freestandingRl2 from '$lib/assets/freestanding/fsrl2.jpg';
	import Pointer from '../../icons/Pointer.svelte';
</script>

<i class="anchor" id={PRODUCTS[0].pageKey}></i>
<ProductHeader currentContent={PRODUCTS[0]} />

<section class="flex flex-wrap gap-6 container mx-auto sm:p-8 p-4 my-10">
	<div>
		<h3 class="text-lg font-semibold">What is a {PRODUCTS[0].title} Building?</h3>
		<p>
			A {PRODUCTS[0].title} metal building is a structure that typically consists of a sloping roof either
			on its own or attached to an existing structure . It's called a "lean-to" because it leans against
			the main building, sharing one of its walls. These buildings are often used as additional storage
			space, workshops, or covered areas for various purposes.
		</p>
	</div>

	<div>
		<h3 class="text-lg font-semibold">Why are {PRODUCTS[0].title} Buildings so Popular?</h3>
		<p>
			This type of structure is popular because it's relatively easy and cost-effective to build
			compared to standalone buildings because it utilizes the existing structure for support. It's
			commonly seen in agricultural settings, industrial facilities, and residential properties
			where additional space is needed.
		</p>
	</div>

	<div>
		<h3 class="text-lg font-semibold">{PRODUCTS[0].title} Building Uses</h3>
		<p>
			{PRODUCTS[0].title} buildings are versatile structures that can serve various purposes depending
			on the needs of the owner and the design of the building. Some common uses of lean-to buildings
			include:
		</p>
	</div>

	<ul class="flex flex-wrap justify-center mb-2">
		{#each PRODUCTS[0].examples as ex}
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

	<div class="mb-4">
		<p>
			Overall, lean-to buildings offer a flexible and cost-effective option for adding covered space
			to a property, fulfilling various functional needs while adapting to different environments
			and purposes.
		</p>
	</div>
</section>
<section class="bg-ssdblue-950">
	<div class="flex w-full flex-wrap content-center justify-center p-4 bg-slate-700">
		<div class="flex flex-wrap justify-center gap-4">
			<a
				href="https://design.stellarsteeldesigns.com/#fae38a6a59b408685ced3f3211f8fab8"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={freestandingRl1}
					alt="freestanding shed building"
				/>
				<Pointer
					class="h-8 w-auto absolute rotate-12 left-3 bottom-7 group-hover:left-8 group-hover:-rotate-12 transition-all"
				/>
				<span class="float-end text-sm font-medium p-2 italic text-white"
					>Starting at <span class="text-lg">$6,035</span></span
				>
			</a>
			<a
				href="https://design.stellarsteeldesigns.com/#54dfecf5562b1c1adc5b71b3327968e2"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={freestandingA}
					alt="freestanding shed building"
				/>
				<Pointer
					class="h-8 w-auto absolute rotate-12 left-3 bottom-7 group-hover:left-8 group-hover:-rotate-12 transition-all"
				/>
				<span class="float-end text-sm font-medium p-2 italic text-white"
					>Starting at <span class="text-lg">$12,849</span></span
				>
			</a>
			<a
				href="https://design.stellarsteeldesigns.com/#1e5c6364dabf26b6fbaf789b6c6b8d20"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={freestandingB}
					alt="freestanding shed building"
				/>
				<Pointer
					class="h-10 w-auto absolute rotate-12 left-3 bottom-7 group-hover:left-8 group-hover:-rotate-12 transition-all"
				/>
				<span class="float-end text-sm font-medium p-2 italic text-white"
					>Starting at <span class="text-lg">$6,574</span></span
				>
			</a>
			<a
				href="https://design.stellarsteeldesigns.com/#25a78b5e305e7def3842181e499a504c"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={freestandingD}
					alt="freestanding shed building"
				/>
				<Pointer
					class="h-8 w-auto absolute -rotate-12 right-3 bottom-7 group-hover:right-8 group-hover:rotate-12 transition-all"
				/>
				<span class="float-start text-sm font-medium p-2 italic text-white"
					>Starting at <span class="text-lg">$24,191</span></span
				>
			</a>
			<a
				href="https://design.stellarsteeldesigns.com/#b71eb4884384894d56272a192bfdc654"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={freestandingRl2}
					alt="freestanding shed building"
				/>

				<Pointer
				class="h-8 w-auto absolute -rotate-12 right-3 bottom-7 group-hover:right-8 group-hover:rotate-12 transition-all"
			/>
			<span class="float-start text-sm font-medium p-2 italic text-white"
				>Starting at <span class="text-lg">$23,711</span></span
			>
			</a>
		</div>
	</div>
</section>

<section class="flex flex-wrap gap-6 container mx-auto sm:p-8 p-4 my-10">
	<div class="w-full sm:w-8/12 m-auto p-12 bg-slate-700 text-white rounded">
		<h3 class="text-lg font-semibold">{PRODUCTS[0].title} Customization</h3>
		<p>
			Customizing your own lean-to structure allows you to tailor the design to perfectly fit your
			needs, whether it's for storage, workspace, sheltering livestock, or creating a unique outdoor
			space. With options for materials, dimensions, and features, you can create a personalized
			solution that maximizes functionality and enhances your property.
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
