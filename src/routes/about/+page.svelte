<script>
	import workers from '$lib/assets/about.jpg';
	import usa from '$lib/assets/usa.jpg';
	import trees from '$lib/assets/trees.png';
	import CogPage from '../../icons/about/CogPage.svelte';
	import CostEffectiveness from '../../icons/about/CostEffectiveness.svelte';
	import DesignServices from '../../icons/about/DesignServices.svelte';
	import DurabilityStrength from '../../icons/about/DurabilityStrength.svelte';
	import Engineer from '../../icons/about/Engineer.svelte';
	import InstallationAssistance from '../../icons/about/InstallationAssistance.svelte';
	import MetalComponents from '../../icons/about/MetalComponents.svelte';
	import Savings from '../../icons/about/Savings.svelte';
	import Sustainability from '../../icons/about/Sustainability.svelte';
	import ValueAdded from '../../icons/about/ValueAdded.svelte';
	import VersatilityAdaptability from '../../icons/about/VersatilityAdaptability.svelte';
	import banner from '$lib/assets/banner.jpg';
	let description = "We are a team of dedicated professionals committed to providing high-quality metal building solutions to our valued clients. Learn more about who we are, our mission, and what we offer.";
</script>

<svelte:head>
	<title>Diaz Remodelling LLC - About Us</title>
	<meta name="description" content="{description}">
	<meta property="og:description" content="{description}"/>
	<meta property="og:image" content="{banner}"/>
</svelte:head>

<header class="slide-fade-in-animation p-4 bg-white">
	<h1 class="block mt-6 text-4xl leading-tight font-medium text-center">About Us</h1>
</header>

<i class="anchor" id="who-we-are"></i>

<section class="slide-fade-in-animation relative bg-white sm:p-16">
	<div class="container mx-auto">
		<div class="flex flex-wrap items-center">
			<div class="w-full lg:w-7/12 px-16 sm:px-8">
				<div class="flex flex-wrap gap-2">
					<h2 class="capitalize block mb-2 text-2xl leading-tight font-medium sm:text-3xl">
						Who we are
					</h2>
					<p>
						We are a team of dedicated professionals committed to providing high-quality metal
						building solutions to our valued clients. Through years of experience, we’ve earned a
						reputation as trusted experts, adept at offering a comprehensive and customizable range
						of metal building services to meet the unique needs of each client.
					</p>
					<p>
						Driven by innovation and a commitment to excellence, we take pride in our ability to
						deliver superior products and exceptional service to our clients. Our team is comprised
						of knowledgeable specialists who are dedicated to understanding our clients'
						requirements and providing them with the best possible solutions.
					</p>
					<p>
						As a customer-centric company, we prioritize transparency, integrity, and reliability in
						all aspects of our business. We strive to foster long-term relationships with our
						clients, suppliers, and community, built on mutual trust and respect.
					</p>
					<p>
						At Diaz Remodelling LLC, we are partners in our clients' success, dedicated to helping
						them achieve their goals through innovative, durable, and cost-effective metal building
						solutions
					</p>
				</div>
			</div>
			<div class="w-full lg:w-5/12 pt-8 sm:pt-0">
				<img src={workers} alt="workers in front of shed" class="m-auto" />
			</div>
		</div>
	</div>
</section>

<section class="slide-fade-in-animation relative bg-slate-100 sm:p-32 py-16">
	<div class="container mx-auto">
		<div class="flex flex-wrap">
			<div class="w-full px-16">
				<div class="flex flex-wrap gap-16 justify-center">
					<div class="text-center font-medium w-[300px]">
						<DurabilityStrength class="h-20 w-auto m-auto fill-ssdblue-800 mb-2" />
						<h3 class="text-ssdblue-950 text-lg font-medium">Durability and Strength</h3>
						<span class="text-ssdred">Buildings that withstand the test of time</span>
					</div>

					<div class="text-center font-medium w-[300px]">
						<CostEffectiveness class="h-20 w-auto m-auto fill-ssdblue-800 mb-2" />
						<h3 class="text-ssdblue-950 text-lg font-medium">Cost-Effectiveness</h3>
						<span class="text-ssdred">Getting more for your money</span>
					</div>

					<div class="text-center font-medium w-[300px]">
						<VersatilityAdaptability class="h-20 w-auto m-auto fill-ssdblue-800 mb-2" />
						<h3 class="text-ssdblue-950 text-lg font-medium">Versatility and Adaptability</h3>
						<span class="text-ssdred">Endless design possibilities</span>
					</div>

					<div class="text-center font-medium w-[300px]">
						<Sustainability class="h-20 w-auto m-auto fill-ssdblue-800 mb-2" />
						<h3 class="text-ssdblue-950 text-lg font-medium">
							Sustainability and Eco-Friendliness
						</h3>
						<span class="text-ssdred">Contributing to a greener future</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<i class="anchor" id="our-mission"></i>

<section class="slide-fade-in-animation relative bg-white sm:p-32 py-16">
	<div class="container mx-auto">
		<div class="flex flex-wrap items-center">
			<div class="w-full xl:w-6/12 xl:px-0 px-16 m-auto">
				<div class="flex flex-wrap gap-2 sm:text-justify text-start">
					<h2 class="capitalize block mb-2 text-2xl leading-tight font-medium sm:text-3xl m-auto">
						Our Mission
					</h2>
					<p>
						At Diaz Remodelling LLC, our mission is to provide metal buildings of exceptional
						quality, exceeding our clients’ expectations through customizable and innovative design.
						Through collaboration, integrity, and a dedication to excellence, we aim to be the
						preferred partner for those seeking durable, cost-effective, and sustainable metal
						building solutions. Our goal is to build lasting relationships with our customers,
						suppliers, and community, while continuously striving for growth, innovation, and
						operational excellence in the metal building industry.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<i class="anchor" id="what-we-offer"></i>

<section class="slide-fade-in-animation relative bg-ssdblue-900 sm:p-32 py-8 text-center">
	<div class="container mx-auto lg:px-0">
		<div class="mb-10 text-white px-16">
			<h2 class="capitalize block mb-2 text-2xl leading-tight font-medium sm:text-3xl">
				What we offer
			</h2>
			<p>
				As a dealer we offer a comprehensive range of metal building solutions tailored to meet the
				diverse needs of our clients. Our extensive product lineup includes:
			</p>
		</div>

		<div class="flex flex-wrap justify-center text-center px-4">
			<div class="w-full lg:w-6/12 xl:w-4/12">
				<div class="flex flex-wrap gap-2 bg-gray-100 rounded p-6 min-h-[250px] lg:m-4 mb-4">
					<h3 class="capitalize block leading-tight font-medium sm:text-lg m-auto text-ssdblue-800">
						<CogPage class="h-12 w-auto inline align-middle mx-2 fill-ssdblue-800" />Customizable
						Metal Buildings
					</h3>
					<p>
						We specialize in designing and fabricating customizable metal buildings to suit various
						applications, including commercial, industrial, agricultural, and residential projects.
					</p>
				</div>
			</div>

			<div class="w-full lg:w-6/12 xl:w-4/12">
				<div class="flex flex-wrap gap-2 bg-gray-100 rounded p-6 min-h-[250px] lg:m-4 mb-4">
					<h3 class="capitalize block leading-tight font-medium sm:text-lg m-auto text-ssdblue-800">
						<Savings class="h-12 w-auto inline align-middle mx-2 fill-ssdblue-800" />Great Savings
					</h3>
					<p>
						Experience the perfect blend of affordability and quality with Diaz Remodelling LLC'
						manufacturer-direct pricing. Rest assured, you'll secure the best price for your dream
						building when you choose us.
					</p>
				</div>
			</div>

			<div class="w-full lg:w-6/12 xl:w-4/12">
				<div class="flex flex-wrap gap-2 bg-gray-100 rounded p-6 min-h-[250px] lg:m-4 mb-4">
					<h3 class="capitalize block leading-tight font-medium sm:text-lg m-auto text-ssdblue-800">
						<Engineer class="h-12 w-auto inline align-middle mx-2 fill-ssdblue-800" />Pre-Engineered
						Metal Buildings
					</h3>
					<p>
						Our pre-engineered metal buildings offer cost-effective and efficient solutions for
						quick construction, providing durability, versatility, and long-lasting performance.
					</p>
				</div>
			</div>

			<div class="w-full lg:w-6/12 xl:w-4/12">
				<div class="flex flex-wrap gap-2 bg-gray-100 rounded p-6 min-h-[250px] lg:m-4 mb-4">
					<h3 class="capitalize block leading-tight font-medium sm:text-lg m-auto text-ssdblue-800">
						<MetalComponents class="h-12 w-auto inline align-middle mx-2 fill-ssdblue-800" />Metal
						Building Components
					</h3>
					<p>
						In addition to complete metal buildings, we also offer a wide range of metal building
						components, including panels, frames, doors, windows, and accessories, to support
						construction and customization needs. <a
							href="../info-hub/#styles"
							class="underline hover:text-ssdblue-950 text-ssdblue-700">Learn more...</a
						>
					</p>
				</div>
			</div>

			<div class="w-full lg:w-6/12 xl:w-4/12">
				<div class="flex flex-wrap gap-2 bg-gray-100 rounded p-6 min-h-[250px] lg:m-4 mb-4">
					<h3 class="capitalize block leading-tight font-medium sm:text-lg m-auto text-ssdblue-800">
						<DesignServices class="h-12 w-auto inline align-middle mx-2 fill-ssdblue-800" />Design
						Services
					</h3>
					<p>
						Our team of experienced professionals provides design services to ensure that each metal
						building meets structural requirements, local building codes, and customer
						specifications.
					</p>
				</div>
			</div>

			<div class="w-full lg:w-6/12 xl:w-4/12">
				<div class="flex flex-wrap gap-2 bg-gray-100 rounded p-6 min-h-[250px] lg:m-4 mb-4">
					<h3 class="capitalize block leading-tight font-medium sm:text-lg m-auto text-ssdblue-800">
						<InstallationAssistance
							class="h-12 w-auto inline align-middle mx-2 fill-ssdblue-800"
						/>Installation Assistance
					</h3>
					<p>
						Throughout the entire construction process, we provide expert installation guidance to
						ensure seamless and efficient assembly of our buildings.
					</p>
				</div>
			</div>

			<div class="w-full lg:w-6/12 xl:w-4/12">
				<div class="flex flex-wrap gap-2 bg-gray-100 rounded p-6 min-h-[250px] lg:m-4 mb-4">
					<h3 class="capitalize block leading-tight font-medium sm:text-lg m-auto text-ssdblue-800">
						<ValueAdded class="h-12 w-auto inline align-middle mx-2 fill-ssdblue-800" />Value-Added
						Services
					</h3>
					<p>
						Beyond our suite of product offerings, we also provide project management, site
						assessment, permitting assistance, and after-sales support to streamline the entire
						building process and enhance customer satisfaction.
					</p>
				</div>
			</div>
		</div>
		<div class="mt-10 flex flex-wrap gap-2 text-white px-16">
			<p>
				At Diaz Remodelling LLC, we take pride in being a leading provider of 100% American-made
				metal building solutions. Committed to supporting local industries and ensuring the highest
				quality standards, we offer metal buildings exclusively manufactured in the USA. This
				commitment not only reflects our dedication to supporting the American economy but also
				ensures that our clients receive superior products known for their durability,
				craftsmanship, and reliability.
			</p>
			<p>
				Furthermore, our strong relationships with installers and manufacturers set us apart in the
				industry. We have cultivated excellent partnerships with experienced installers who are
				trained to handle our products with precision and care, ensuring efficient and seamless
				installation for our clients. Lastly, we collaborate closely with our trusted manufacturers,
				enabling us to meet strict quality control measures while offering a diverse range of
				customizable options to meet the unique needs of our clients.
			</p>
		</div>
		<img src={usa} alt="workers in front of shed" class="m-auto mt-10 xl:w-6/12" />
	</div>
</section>


<i class="anchor" id="one-sale-10-trees"></i>

<section class="slide-fade-in-animation relative bg-white sm:p-16">
	<div class="container mx-auto">
		<div class="flex flex-wrap items-center justify-items-stretch">
			<div class="w-full lg:w-5/12 pt-8 sm:pt-0 ">
				<img src={trees} alt="workers in front of shed" class="m-auto h-auto max-w-[calc(70vh/2)]" />
			</div>
			<div class="w-full lg:w-7/12 px-16 sm:px-8">
				<h2 class="capitalize block text-2xl leading-tight font-medium sm:text-3xl text-start text-[#50a05c] mt-10 lg:mt-0">
					1 Sale = 10 Trees
				</h2>
				<div class="flex flex-wrap gap-6 lg:text-lg my-12">
					<p>
						At Diaz Remodelling LLC, we understand the importance of responsible stewardship of our environment. That's why, for every metal building sold, we pledge to plant 10 trees, helping to offset carbon emissions and contribute to reforestation efforts.
					</p>
					<p>
						Our commitment to sustainability extends to every aspect of our business. From using environmentally friendly materials in our buildings to implementing energy-efficient practices in our operations, we strive to minimize our impact on the planet while maximizing the benefits for future generations.
					</p>
					<p>
						We believe that by taking care of the Earth, we can create a better world for all. Join us in our mission to build not just structures, but a greener, more sustainable future for everyone.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>