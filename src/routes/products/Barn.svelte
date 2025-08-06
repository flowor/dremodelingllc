<script>
	import { DESIGNER_URL, PRODUCTS } from '$lib/consts';
	import ProductHeader from './ProductHeader.svelte';
	import barnA from '$lib/assets/barn/baA.png';
	import barnB from '$lib/assets/barn/baB.png';
	import barn1 from '$lib/assets/barn/ba1.png';
	import barn2 from '$lib/assets/barn/ba2.png';
	import Pointer from '../../icons/Pointer.svelte';
</script>

<i class="anchor" id={PRODUCTS[2].pageKey}></i>
<ProductHeader currentContent={PRODUCTS[2]} />

<section class="flex flex-wrap gap-6 container mx-auto sm:p-8 p-4 my-10">
	<div>
		<h3 class="text-lg font-semibold">What is a Metal {PRODUCTS[2].title} Building?</h3>
		<p>
			Metal barn buildings provide shelter and protection for livestock, equipment, and
			agricultural supplies. However, they offer several advantages over their wooden counterparts,
			including durability, longevity, and low maintenance requirements.
		</p>
	</div>

	<div>
		<h3 class="text-lg font-semibold">Why are Metal {PRODUCTS[2].title} Buildings so Popular?</h3>
		<p>
			Overall, metal barns offer a reliable, durable, and versatile solution for housing livestock,
			storing equipment, and maintaining agricultural operations on farms and rural properties. They
			provide farmers with the infrastructure they need to efficiently manage their livestock and
			crops while ensuring the safety and productivity of their agricultural enterprise.
		</p>
	</div>

	<div>
		<h3 class="text-lg font-semibold">Metal {PRODUCTS[2].title} Building Uses</h3>
		<p>
			Metal barns serve a variety of purposes on farms and rural properties, offering versatile
			solutions for agricultural operations. Here are some common uses of metal barns:
		</p>
	</div>

	<ul class="flex flex-wrap justify-center mb-2">
		{#each PRODUCTS[2].examples as ex}
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
				href="https://design.stellarsteeldesigns.com/#b7a04aebdcb451b9f9ebc9feead51fc5"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={barn1}
					alt="Barn shed building"
				/>
				<Pointer
					class="h-8 w-auto absolute rotate-12 left-3 bottom-7 group-hover:left-8 group-hover:-rotate-12 transition-all"
				/>
				<span class="float-end text-sm font-medium p-2 italic text-white"
					>Starting at <span class="text-lg">$21,481</span></span
				>
			</a>
			<a
				href="https://design.stellarsteeldesigns.com/#5b0500275bca0c33ba9fb1d7138b7095"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={barnA}
					alt="Barn shed building"
				/>
				<Pointer
					class="h-8 w-auto absolute rotate-12 left-3 bottom-7 group-hover:left-8 group-hover:-rotate-12 transition-all"
				/>
				<span class="float-end text-sm font-medium p-2 italic text-white"
					>Starting at <span class="text-lg">$46,010</span></span
				>
			</a>
			<a
				href="https://design.stellarsteeldesigns.com/#966a72c887abca2222a4139240f9ce74"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={barnB}
					alt="Barn shed building"
				/>
				<Pointer
					class="h-8 w-auto absolute -rotate-12 right-3 bottom-7 group-hover:right-8 group-hover:rotate-12 transition-all"
				/>
				<span class="float-start text-sm font-medium p-2 italic text-white"
					>Starting at <span class="text-lg">$17,560</span></span
				>
			</a>
			<a
				href="https://design.stellarsteeldesigns.com/#9a2a6ed094208fcb2b39c1a813bbd376"
				target="_blank"
				rel="noopener noreferrer"
				title="Preview in 3D Customizer"
				class="group hover:scale-105 hover:border-2 transition-all w-80 2xl:w-56 bg-ssdblue-700 p-3 skew-x-2"
			>
				<img
					class="h-80 2xl:h-56 w-full object-cover -skew-x-2 rounded bg-white"
					src={barn2}
					alt="Barn shed building"
				/>

				<Pointer
				class="h-8 w-auto absolute -rotate-12 right-3 bottom-7 group-hover:right-8 group-hover:rotate-12 transition-all"
			/>
			<span class="float-start text-sm font-medium p-2 italic text-white"
				>Starting at <span class="text-lg">$30,943</span></span
			>
			</a>
		</div>
	</div>
</section>


	<section class="flex flex-wrap gap-6 container mx-auto sm:p-8 p-4 my-10">

	<div class="w-full sm:w-8/12 m-auto p-12 bg-slate-700 text-white rounded">
		<p>
			Overall, metal barns play a crucial role in modern agriculture, providing farmers with
			essential infrastructure for housing livestock, storing equipment and supplies, and managing
			their operations efficiently and effectively. Their versatility, durability, and practicality
			make them indispensable assets on farms and rural properties around the world.
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
