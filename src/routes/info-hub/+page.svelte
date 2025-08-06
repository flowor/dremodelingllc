<script>
	// @ts-nocheck

	import { DESIGNER_URL, LEAD_TIMES } from '$lib/consts';
	import styles from '$lib/assets/styles.png';
	import galvalume from '$lib/assets/galvalume.png';
	import copper from '$lib/assets/copper.png';
	import Map from '../../Map.svelte';
	import Req from '../../icons/info-hub/Req.svelte';
	import Customize from '../../icons/info-hub/Customize.svelte';
	import Delivery from '../../icons/info-hub/Delivery.svelte';
	import Payment from '../../icons/info-hub/Payment.svelte';
	import Preparation from '../../icons/info-hub/Preparation.svelte';
	import Reviews from '../../icons/info-hub/Reviews.svelte';
	import Placing from '../../icons/info-hub/Placing.svelte';
	import AnimatedElement from '../AnimatedElement.svelte';
	import Components from './Components.svelte';
	import banner from '$lib/assets/banner.jpg';

	const STANDARD_COLOR_OPTIONS = [
		{ title: 'Hunter G', code: '#2b4528' }, // bg-[#2b4528]
		{ title: 'Barn Red', code: '#70171b' }, // bg-[#70171b]
		{ title: 'Burgundy', code: '#28131a' }, // bg-[#28131a]
		{ title: 'Ocean', code: '#2f5265' }, // bg-[#2f5265]
		{ title: 'Ivory', code: '#ecdba7' }, // bg-[#ecdba7]
		{ title: 'Sandstone', code: '#c4b89e' }, // bg-[#c4b89e]
		{ title: 'Tan', code: '#a87e54' }, // bg-[#a87e54]
		{ title: 'Black', code: '#040503' }, // bg-[#040503]
		{ title: 'White', code: '#ffffff' }, // bg-[#ffffff]
		{ title: 'Brown', code: '#392719' }, // bg-[#392719]
		{ title: 'Q Gray', code: '#5c584f' }, // bg-[#5c584f]
		{ title: 'P Gray', code: '#7c7c7c' }, // bg-[#7c7c7c]
		{ title: 'Galvalume', img: galvalume },
		{ title: 'Clay', code: '#8f8a6c' } // bg-[#8f8a6c]
	];

	const PREMIUM_COLOR_OPTIONS = [
		{ title: 'TOL Red', code: '#9f0d18' }, // bg-[#9f0d18]
		{ title: 'Colony', code: '#586843' }, // bg-[#586843]
		{ title: 'Gallery', code: '#09293e' }, // bg-[#09293e]
		{ title: 'Burnished Slate', code: '#312f23' }, // bg-[#312f23]
		{ title: 'Copper', img: copper }
	];
	let description =
		'Learn more about the order process, components & colors, terminology, warranty & certifications, and our coverage area (the states we serve).';
</script>

<svelte:head>
	<title>Diaz Remodelling LLC - Info Hub</title>
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={banner} />
</svelte:head>

<header class="slide-fade-in-animation p-4 bg-slate-100">
	<h1 class="block mt-6 text-4xl leading-tight font-medium text-center">Info Hub</h1>
</header>

<i class="anchor" id="order-process"></i>
<section class="bg-slate-100 py-6 flex flex-col justify-center sm:pb-16 slide-fade-in-animation">
	<div class="py-3 sm:max-w-6xl sm:mx-auto w-full px-2">
		<header class="text-center mb-16">
			<h2 class="capitalize block text-2xl font-medium sm:text-3xl mb-4">Order Process</h2>
			<p>
				Our straightforward yet comprehensive order process ensures that your dream building is
				constructed on time.
			</p>
		</header>

		<div class="relative text-gray-700 antialiased">
			<!-- Vertical bar running through middle -->
			<div
				class="hidden sm:block w-1 bg-ssdblue-800 absolute h-full left-1/2 transform -translate-x-1/2 rounded-lg"
			></div>

			<!-- Left section, set by justify-start and sm:pr-10 -->
			<div class="mt-6 sm:mt-0 mb-12">
				<div class="flex flex-col sm:flex-row items-center">
					<div class="flex justify-start w-full mx-auto items-center">
						<div class="w-full sm:w-1/2 sm:pr-10">
							<div class="p-4 bg-white rounded shadow">
								<h3 class="capitalize block text-ssdred font-semibold">
									1) Identify your requirements
								</h3>
								<p>
									Selecting your metal building entails a meticulous assessment of size, intended
									use, location, structural considerations, aesthetic preferences, and budget
									constraints. We encourage you to explore our products and choose whichever best
									suits your needs.
								</p>
							</div>
						</div>
					</div>
					<div
						class="rounded-full bg-ssdblue-800 border-slate-100 border-4 w-16 h-16 absolute left-1/2 -translate-y-10 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
					>
						<Req class="inline h-10 w-10 fill-white" />
					</div>
				</div>
			</div>

			<!-- Right section, set by justify-end and sm:pl-10 -->
			<div class="mt-6 sm:mt-0 mb-12">
				<div class="flex flex-col sm:flex-row items-center">
					<div class="flex justify-end w-full mx-auto items-center">
						<div class="w-full sm:w-1/2 sm:pl-10">
							<div class="p-4 bg-white rounded shadow">
								<h3 class="capitalize block text-ssdred font-semibold">
									2) Customize your building
								</h3>
								<p>
									Use our <a
										href={DESIGNER_URL}
										class="underline hover:text-ssdblue-950 text-ssdblue-700"
										>3D visualization tool</a
									> to tailor every aspect of the structure to your precise specifications. With this
									technology, you can virtually visualize your project from every angle, allowing for
									a detailed exploration of design elements, such as size, shape, color, windows, doors,
									and additional features.
								</p>
							</div>
						</div>
					</div>
					<div
						class="rounded-full bg-ssdblue-800 border-slate-100 border-4 w-16 h-16 absolute left-1/2 -translate-y-10 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
					>
						<Customize class="inline h-10 w-10 fill-white" />
					</div>
				</div>
			</div>

			<!-- Left section, set by justify-start and sm:pr-10 -->
			<div class="mt-6 sm:mt-0 mb-12">
				<div class="flex flex-col sm:flex-row items-center">
					<div class="flex justify-start w-full mx-auto items-center">
						<div class="w-full sm:w-1/2 sm:pr-10">
							<div class="p-4 bg-white rounded shadow">
								<h3 class="capitalize block text-ssdred font-semibold">3) Placing your order</h3>
								<p>
									Ordering the metal building you desire for your property is hassle-free with
									Diaz Remodelling LLC. To place an order, you can easily connect with us at any
									time through our <a
										href="../contact"
										class="underline hover:text-ssdblue-950 text-ssdblue-700">online contact form</a
									>, via email, or by simply giving us a call and speaking with one of our
									experienced representatives.
								</p>
							</div>
						</div>
					</div>
					<div
						class="rounded-full bg-ssdblue-800 border-slate-100 border-4 w-16 h-16 absolute left-1/2 -translate-y-10 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
					>
						<Placing class="inline h-10 w-10 fill-white" />
					</div>
				</div>
			</div>

			<!-- Right section, set by justify-end and sm:pl-10 -->
			<div class="mt-6 sm:mt-0 mb-12">
				<div class="flex flex-col sm:flex-row items-center">
					<div class="flex justify-end w-full mx-auto items-center">
						<div class="w-full sm:w-1/2 sm:pl-10">
							<div class="p-4 bg-white rounded shadow">
								<h3 class="capitalize block text-ssdred font-semibold">4) Payment</h3>
								<p>
									To confirm your order and commence construction on your building, we only need an
									initial down payment, the amount of which will vary based on the total purchase
									price of the building. The remaining balance will not be due until the
									installation of your building.
								</p>
							</div>
						</div>
					</div>
					<div
						class="rounded-full bg-ssdblue-800 border-slate-100 border-4 w-16 h-16 absolute left-1/2 -translate-y-10 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
					>
						<Payment class="inline h-10 w-10 fill-white" />
					</div>
				</div>
			</div>

			<!-- Left section, set by justify-start and sm:pr-10 -->
			<div class="mt-6 sm:mt-0 mb-12">
				<div class="flex flex-col sm:flex-row items-center">
					<div class="flex justify-start w-full mx-auto items-center">
						<div class="w-full sm:w-1/2 sm:pr-10">
							<div class="p-4 bg-white rounded shadow">
								<h3 class="capitalize block text-ssdred font-semibold">
									5) Preparation prior to installation
								</h3>
								<p>
									Preparation prior to installation is crucial to ensure the successful installation
									of your metal building. You will need to comply with your local department to
									obtain any necessary permits. In addition, you'll need to remove any obstacles
									such as trees, bushes, rocks, or debris that may hinder the construction process
									or interfere with the placement of the building.
								</p>
							</div>
						</div>
					</div>
					<div
						class="rounded-full bg-ssdblue-800 border-slate-100 border-4 w-16 h-16 absolute left-1/2 -translate-y-10 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
					>
						<Preparation class="inline h-10 w-10 fill-white" />
					</div>
				</div>
			</div>

			<!-- Right section, set by justify-end and sm:pl-10 -->
			<div class="mt-6 sm:mt-0 mb-12">
				<div class="flex flex-col sm:flex-row items-center">
					<div class="flex justify-end w-full mx-auto items-center">
						<div class="w-full sm:w-1/2 sm:pl-10">
							<div class="p-4 bg-white rounded shadow">
								<h3 class="capitalize block text-ssdred font-semibold">
									6) Delivery & Installation
								</h3>
								<p>
									Once your building is ready for delivery and installation, we will coordinate a
									suitable time for the delivery. If you have any more queries about installation,
									please contact us today. We are more than happy to answer any questions.
								</p>
							</div>
						</div>
					</div>
					<div
						class="rounded-full bg-ssdblue-800 border-slate-100 border-4 w-16 h-16 absolute left-1/2 -translate-y-10 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
					>
						<Delivery class="inline h-10 w-10 fill-white" />
					</div>
				</div>
			</div>

			<!-- Left section, set by justify-start and sm:pr-10 -->
			<div class="mt-6 sm:mt-0">
				<div class="flex flex-col sm:flex-row items-center">
					<div class="flex justify-start w-full mx-auto items-center">
						<div class="w-full sm:w-1/2 sm:pr-10">
							<div class="p-4 bg-white rounded shadow">
								<h3 class="capitalize block text-ssdred font-semibold">7) Reviews & Referrals</h3>
								<p>
									After the successful installation of their metal building, our delighted customers
									often become enthusiastic advocates, sharing their positive experiences with
									friends, family, and colleagues. We encourage our customers to provide referrals,
									endorsing our quality service and products to others seeking reliable metal
									building solutions.
								</p>
							</div>
						</div>
					</div>
					<div
						class="rounded-full bg-ssdblue-800 border-slate-100 border-4 w-16 h-16 absolute left-1/2 -translate-y-10 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
					>
						<Reviews class="inline h-10 w-10 fill-white" />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<i class="anchor" id="styles"></i>
<section class="slide-fade-in-animation relative bg-white sm:p-16 py-6">
	<div class="container mx-auto">
		<h2 class="block mb-16 text-2xl leading-tight font-medium sm:text-3xl text-center">
			Components and Colors
		</h2>
		<div class="flex flex-wrap p-4">
			<div class="w-full xl:w-6/12 px-0 lg:px-16 text-center">
				<h3
					class="capitalize block text-lg mb-4 font-bold sm:text-2xl text-center text-ssdblue-950"
				>
					Components
				</h3>
				<Components />
			</div>
			<div class="w-full xl:w-6/12 mt-16 xl:mt-0 px-0 lg:px-16">
				<h3
					class="capitalize block text-lg mb-4 font-bold sm:text-2xl text-center text-ssdblue-950"
				>
					Standard Colors
				</h3>
				<div class="flex flex-wrap gap-10 justify-center">
					{#each STANDARD_COLOR_OPTIONS as item, i}
						<div>
							{#if item.code}
								<div class="w-20 h-10 bg-[{item.code}] border m-auto"></div>
							{:else}
								<img src={item.img} class="w-20 h-10 border m-auto" alt="Pattern" />
							{/if}
							<p class="uppercase text-ssdred font-medium text-sm text-center">{item.title}</p>
						</div>
					{/each}
				</div>
				<h3
					class="capitalize block text-lg mb-4 font-bold sm:text-2xl text-center text-ssdblue-950 mt-10"
				>
					Premium Colors 15%
				</h3>
				<div class="flex flex-wrap gap-10 justify-center">
					{#each PREMIUM_COLOR_OPTIONS as item, i}
						<div>
							{#if item.code}
								<div class="w-20 h-10 bg-[{item.code}] border m-auto"></div>
							{:else}
								<img src={item.img} class="w-20 h-10 border m-auto" alt="Pattern" />
							{/if}
							<p class="uppercase text-ssdred font-medium text-sm text-center">{item.title}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<i class="anchor" id="terminology"></i>
<section class="slide-fade-in-animation relative bg-slate-100 sm:p-16 pb-16">
	<div class="container mx-auto">
		<h2
			class="capitalize block mb-16 text-2xl leading-tight font-medium sm:text-3xl px-16 sm:px-8 sm:pt-0 pt-8 text-center"
		>
			Terminology
		</h2>

		<div class="flex flex-wrap">
			<div class="w-full lg:w-6/12 px-2 sm:px-8">
				<ul>
					<li class="p-4">
						<span class="text-ssdred font-medium">Bow:</span> A bow is a structural component crafted
						from square tubing, bent to shape the form of the metal building.
					</li>
					<li class="p-4">
						<span class="text-ssdred font-medium">Legs:</span> The legs serve as vertical supports for
						the roof of the metal building, functioning similarly to structural columns. They determine
						the roof's height.
					</li>
					<li class="p-4">
						<span class="text-ssdred font-medium">Base Rails:</span> The base rails are the structural
						elements that function as the foundation of the building, connecting to the legs to outline
						the size of the metal building.
					</li>
					<li class="p-4">
						<span class="text-ssdred font-medium">Anchors:</span> Anchors are employed to firmly attach
						the base rails to the foundation of the metal building. Different categories of anchors are
						used depending on the terrain in which the metal building is being installed. Concrete anchors
						(for concrete foundation), rebar anchors (for gravel/soil), and mobile home anchors (for
						dirt/asphalt/soil) are used most frequently.
					</li>
					<li class="p-4">
						<span class="text-ssdred font-medium">Truss:</span> Trusses are triangular structures supporting
						the roof, distributing the load evenly and providing horizontal stability to the structure.
						They bear the weight of the roof, ensuring its stability even during severe weather conditions.
					</li>
					<li class="p-4">
						<span class="text-ssdred font-medium">Braces:</span> A brace is a component that connects
						from the legs to the bow, serving a structural purpose by increasing the rigidity of the
						metal building frame
					</li>
					<li class="p-4">
						<span class="text-ssdred font-medium">Roof:</span> There are three different styles of
						roofs,
						<ul class="ms-0 sm:ms-2">
							<li class="px-0 py-4 sm:p-4 text-center lg:text-start">
								<div class="font-medium">Platinum (Vertical)</div>
								The Vertical roof style stands out as the optimal choice for challenging weather conditions.
								With the Vertical roof style, vertical panels are featured, ensuring that they run seamlessly
								from the peak of the roof down to the eaves. Consequently, heavy snow, rain, and debris
								effortlessly slide off the roof, enhancing its resilience.
							</li>
							<li class="px-0 py-4 sm:p-4 text-center lg:text-start">
								<div class="font-medium">Luxury (A-Frame Horizontal)</div>
								The A-Frame Horizontal roof design imparts a residential aesthetic to your metal building,
								resembling a peaked roof style. This configuration entails horizontal sheeting, hence
								the name "A-Frame Horizontal." Consequently, the ridges on the panels run horizontally,
								extending from gable to gable. This is a lower cost option with a residential appearance.
							</li>
							<li class="px-0 py-4 sm:p-4 text-center lg:text-start">
								<div class="font-medium">Premium (Regular)</div>
								The Regular roof style boasts a straightforward design that complements most properties.
								It stands as our most budget-friendly option without compromising on the quality and
								strength of steel. While it may be our most affordable choice, it still upholds high
								standards. The depicted curved roof is dependable, offering longevity comparable to that
								of the A-Frame Horizontal style and Vertical style roof models.
							</li>
						</ul>
					</li>
					<li class="p-4">
						<span class="text-ssdred font-medium">Hat Channel:</span> Light gauge steel framing members
						that are utilized for supporting roofs and walls.
					</li>
					<li class="p-4">
						<span class="text-ssdred font-medium">Metal Sheet Panels:</span> These panels comprise the
						entire wall and roof areas of your metal building. Various sizes, thickness, and colors are
						offered to tailor your metal building according to your preferences.
					</li>
					<li class="p-4">
						<span class="text-ssdred font-medium">Ridge Cap Foam:</span> Foam closures are dense foam
						rubber strips utilized to assist in sealing the gap between the roof panels
					</li>
					<li class="p-4">
						<span class="text-ssdred font-medium">Ridge Cap:</span> The metal roofing ridge cap serves
						as the trim positioned along the roof's ridge, the highest point where two roof slopes meet.
					</li>
					<li class="p-4">
						<span class="text-ssdred font-medium">Eave Overhang:</span> The eave overhang refers to the
						edges of roofing that protrude beyond the exterior walls of the main building.
					</li>
					<li class="p-4">
						<span class="text-ssdred font-medium">Gable Ends:</span> A horizontal panel, mirroring the
						curve of the bows at both ends of the carport, extends from the top of the legs upward. Vertical
						installation of gable ends is available for an additional cost.
					</li>
				</ul>
			</div>
			<div class="w-full lg:w-6/12 px-2 sm:px-8">
				<ul>
					<li class="p-4">
						<span class="text-ssdred font-medium">Trim:</span> There are six different types of
						trim:
						<ul class="ms-0 sm:ms-2">
							<li class="px-0 py-4 sm:p-4 text-center lg:text-start">
								<div class="font-medium">L-Trim:</div>
								L-trim is utilized as decorative trim on the ends and corners of both A-Frame Horizontal
								style and Regular style metal buildings.
							</li>
							<li class="px-0 py-4 sm:p-4 text-center lg:text-start">
								<div class="font-medium">Box Trim:</div>
								These are installed below the roof of A-Frame Horizontal style roof.
							</li>
							<li class="px-0 py-4 sm:p-4 text-center lg:text-start">
								<div class="font-medium">Vertical Roof Trim:</div>
								This trim is installed to cover the area of the eave overhang, enhancing the aesthetic
								appeal of your metal building
							</li>
							<li class="px-0 py-4 sm:p-4 text-center lg:text-start">
								<div class="font-medium">Z-Trim:</div>
								This trim is used to cover the overlap of the concrete foundation, also serving to prevent
								water from entering your metal building.
							</li>
							<li class="px-0 py-4 sm:p-4 text-center lg:text-start">
								<div class="font-medium">J-Trim:</div>
								J-trim serves as decorative trim installed beneath additional paneling on the sides of
								carports, and around walk-in doors and windows.
							</li>
							<li class="px-0 py-4 sm:p-4 text-center lg:text-start">
								<div class="font-medium">Corner-Trim:</div>
								Trim used on the corners of the buildings with vertical siding.
							</li>
						</ul>
					</li>

					<li class="p-4">
						<span class="text-ssdred font-medium">Doors:</span> There are three different styles of
						doors for your metal building, solid doors, diamond doors, 9-lite doors. Please use our
						<a href={DESIGNER_URL} class="underline hover:text-ssdblue-950 text-ssdblue-700"
							>3D customizer</a
						>
						to choose your own.
					</li>
					<li class="p-4">
						<span class="text-ssdred font-medium">Garage Doors:</span> The corrugated steel sheet rolls
						up into a nest above the opening. This option is among the more economical choices and stands
						out for its exceptional durability.
					</li>
					<li class="p-4">
						<span class="text-ssdred font-medium">Windows:</span> There are various styles and sizes
						to choose from for your metal building. Please use our
						<a href={DESIGNER_URL} class="underline hover:text-ssdblue-950 text-ssdblue-700"
							>3D customizer</a
						> to choose your own.
					</li>
					<li class="p-4">
						<span class="text-ssdred font-medium">Insulation:</span> Insulation for metal buildings
						can come in various forms, including fiberglass, foam board, or spray foam, and is
						typically installed in the walls, roof, and sometimes the floor of the building. It
						helps to keep the interior of the building warmer in cold weather and cooler in hot
						weather by slowing down the transfer of heat through the metal surfaces. This can
						improve energy efficiency, reduce heating and cooling costs, and create a more
						comfortable indoor environment. We offer four different types of insulation to our
						customers:

						<ul class="ms-0 sm:ms-2">
							<li class="px-0 py-4 sm:p-4 text-center lg:text-start">
								<div class="font-medium">Single Bubble (R6):</div>
								Single bubble insulation is typically used in walls, roofs, and floors of buildings to
								help control temperature and improve energy efficiency. It is relatively inexpensive
								compared to other types of insulation and can be a good choice for certain applications
								where cost is a concern. However, it may not provide as much insulation as thicker, more
								expensive materials, so its suitability depends on the specific requirements of the building
								and the climate in which it is located.
							</li>
							<li class="px-0 py-4 sm:p-4 text-center lg:text-start">
								<div class="font-medium">Double Bubble (R9):</div>
								Double bubble insulation is more effective at insulating than single bubble insulation,
								but it is also typically more expensive. However, its increased insulation properties
								may make it a better choice for buildings in climates where more insulation is needed
								to maintain comfortable indoor temperatures and reduce heating and cooling costs.
							</li>
							<li class="px-0 py-4 sm:p-4 text-center lg:text-start">
								<div class="font-medium">Fiberglass (R10):</div>
								Fiberglass insulation is known for its fire resistance and sound absorption properties.
								It is relatively easy to install. Fiberglass insulation is also relatively inexpensive
								compared to other types of insulation, making it a popular choice for many building projects.
							</li>
							<li class="px-0 py-4 sm:p-4 text-center lg:text-start">
								<div class="font-medium">Prodex (R16):</div>
								Prodex is a type of insulation product that combines reflective foil with closed-cell
								polyethylene foam. It is designed to provide both insulation and a radiant barrier in
								a single product. Prodex insulation is commonly used in a variety of applications, including
								metal buildings, residential homes, and commercial buildings.
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<i class="anchor" id="warranty-and-certs"></i>
<section class="min-h-screen slide-fade-in-animation relative bg-white sm:p-16 py-6">
	<div class="container mx-auto">
		<h2 class="block mb-16 text-2xl leading-tight font-medium sm:text-3xl text-center">
			Warranty and Certifications
		</h2>
		<div class="flex flex-wrap gap-2 justify-start">
			<div class="p-3 bg-slate-100 rounded-e-full w-full border-ssdred border-s-4">
				<AnimatedElement delay="0">
					<p>
						Your building will be constructed with leg spacing standard at 4ft on center in your
						location, with a certified wind rating of 115mph and a certified snow load rating of
						55psf.
					</p>
				</AnimatedElement>
			</div>

			<div class="p-3 bg-slate-100 rounded-e-full w-11/12 border-ssdred border-s-4">
				<AnimatedElement delay="200">
					<p>
						We are offer a certified package standard at 5ft on center, with a certified wind rating
						of 140mph and a certified snow load rating of 35psf at an extra cost.
					</p>
				</AnimatedElement>
			</div>

			<div class="p-3 bg-slate-100 rounded-e-full w-10/12 border-ssdred border-s-4">
				<AnimatedElement delay="400">
					<p>A rust-free limited lifetime warranty of 10 years applies to all buildings.</p>
				</AnimatedElement>
			</div>

			<div class="p-3 bg-slate-100 rounded-e-full w-9/12 border-ssdred border-s-4">
				<AnimatedElement delay="600">
					<p>A 90 days workmanship warranty applies to all buildings.</p>
				</AnimatedElement>
			</div>
			<div class="p-3 bg-slate-100 rounded-e-full w-8/12 border-ssdred border-s-4">
				<AnimatedElement delay="800">
					<p>
						We offer this competitive warranty and certification to earn your business with the best
						pricing in mind.
					</p>
				</AnimatedElement>
			</div>
		</div>

		<h3 class="text-lg font-semibold mt-10 mb-5">
			Features on most residential buildings (non-commercial):
		</h3>
		<div class="flex flex-wrap gap-2 justify-start">
			<div class="p-3 bg-slate-100 rounded-e-full w-full border-ssdred border-s-4">
				<AnimatedElement delay="0">
					<p>
						Leg Spacing 5’ On Center Or Less, 14ga Galvanized Steel G90, Mobile Home Anchors For
						Ground, Gravel, Or Asphalt Installations, Concrete Anchors On Every Leg Post On Concrete
						Installations, All Corner And Peak Braces. 29ga Galvalume Steel Panels, Single Rafter Up
						To 14’ Wide, Double Rafters On 16’ - 18’ Wide, Ladder Style Rafter on 20’ - 24’ Wide.
					</p>
				</AnimatedElement>
			</div>

			<div class="p-3 bg-slate-100 rounded-e-full w-11/12 border-ssdred border-s-4">
				<AnimatedElement delay="500">
					<p>
						<i>Options: </i>12ga Frame With 20-year Limited Warranty, Units Up To 100’ Wide,
						Certifications Up To 155mph, Limited Lifetime Warranty Panels, Colored Screws & Colored
						Roll Up Doors.
					</p>
				</AnimatedElement>
			</div>
		</div>

		<h3 class="text-lg font-semibold mt-10 mb-5">Features on commercial buildings:</h3>
		<div class="flex flex-wrap gap-2 justify-start">
			<div class="p-3 bg-slate-100 rounded-e-full w-full border-ssdred border-s-4">
				<AnimatedElement delay="0">
					<p>
						We strive to provide you with the most up-to-date information about your building.
						Please contact us to learn more about the features of your commercial building
					</p>
				</AnimatedElement>
			</div>
		</div>
	</div>
</section>

<i class="anchor" id="coverage-area"></i>
<section class="sm:py-16 py-6 relative bg-gray-600">
	<div class="container mx-auto text-white">
		<h2 class="capitalize block text-2xl leading-tight font-medium sm:text-3xl text-center">
			Coverage Area
		</h2>

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
