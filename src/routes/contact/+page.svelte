<script lang="ts">
	import { PHONENUMBER_DISPLAY, PHONENUMBER_HREF, EMAIL, SOCIAL_MEDIA_HANDLES } from '$lib/consts';
	import Facebook from '../../icons/Facebook.svelte';
	import Instagram from '../../icons/Instagram.svelte';
	import Mail from '../../icons/Mail.svelte';
	import Phone from '../../icons/Phone.svelte';
	import banner from '$lib/assets/banner.jpg';

	let contactData = {
		name: null,
		phone: null,
		email: null,
		message: null
	};

	export let form;
	let description = "Have any questions? Let us know your needs and we'll get back to you right away! Follow us on social media for the latest news and projects.";
</script>

<svelte:head>
	<title>Diaz Remodelling LLC - Contact</title>
	<meta name="description" content="{description}">
	<meta property="og:description" content="{description}"/>
	<meta property="og:image" content="{banner}"/>
</svelte:head>

<!-- {#if form?.result}
<h1 class="text-2xl text-center my-4">Your message has been received!</h1>
{/if} -->

<div class="max-w-screen-lg mx-auto p-5 py-16">
	<div class="grid grid-cols-1 md:grid-cols-12">
		<div
			class="bg-ssdblue-950 md:col-span-4 p-10 h-fit text-white rounded-sm slide-fade-in-animation"
		>
			<h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">Let's Chat</h3>
			<p class="my-4 leading-7 text-gray-200">
				Have any questions? Let us know your needs and we'll get back to you right away! Follow us
				on social media for the latest news and projects.
			</p>

			<div class="flex gap-2 flex-wrap text-sm">
				<a href={PHONENUMBER_HREF} class="inline-block hover:underline hover:text-ssdblue-200">
					<Phone class="h-4 w-auto inline align-sub mx-2 fill-white" />{PHONENUMBER_DISPLAY}
				</a>
				<a href="mailto:{EMAIL}" class="hover:underline hover:text-ssdblue-200"
					><Mail class="h-4 w-auto inline align-sub mx-2 fill-white" />{EMAIL}</a
				>
				<a href={SOCIAL_MEDIA_HANDLES.facebook.href} class="hover:underline hover:text-ssdblue-200"
					><Facebook class="h-4 w-auto inline align-sub mx-2 fill-white" />{SOCIAL_MEDIA_HANDLES
						.facebook.display}</a
				>
				<a href={SOCIAL_MEDIA_HANDLES.instagram.href} class="hover:underline hover:text-ssdblue-200"
					><Instagram class="h-4 w-auto inline align-sub mx-2 fill-white" />{SOCIAL_MEDIA_HANDLES
						.instagram.display}</a
				>
			</div>
		</div>
		<form method="POST" class="md:col-span-8 p-10">
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-name"
					>
						Name
					</label>
					<input
						bind:value={contactData.name}
						required
						class:border-red-500={contactData.name === ''}
						class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						name="name"
						id="grid-name"
						type="text"
						placeholder="Jane Doe"
					/>
					{#if contactData.name === ''}
						<p class="text-red-500 text-xs italic">Please fill out this field.</p>
					{/if}
				</div>
				<div class="w-full md:w-1/2 px-3">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-phone"
					>
						Phone #
					</label>
					<input
						bind:value={contactData.phone}
						name="phone"
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-phone"
						type="tel"
						placeholder="123-456-7890"
					/>
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full px-3">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-password"
					>
						Email Address
					</label>
					<input
						bind:value={contactData.email}
						required
						name="email"
						class:border-red-500={contactData.email === ''}
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-email"
						type="email"
						placeholder="********@*****.***"
					/>
					{#if contactData.email === ''}
						<p class="text-red-500 text-xs italic">Please fill out this field.</p>
					{/if}
				</div>
			</div>

			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full px-3">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-password"
					>
						Your Message
					</label>
					<textarea
						bind:value={contactData.message}
						name="message"
						rows="10"
						required
						class:border-red-500={contactData.message === ''}
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					></textarea>
					{#if contactData.message === ''}
						<p class="text-red-500 text-xs italic">Please fill out this field.</p>
					{/if}
				</div>
				<div class="w-full px-3">
					<button
						class="shadow bg-gray-700 hover:bg-ssdblue-900 focus:shadow-outline text-white font-bold py-2 px-6 rounded float-end"
						type="submit"
					>
						Send Message
					</button>
				</div>
			</div>
		</form>
	</div>
</div>

<!-- {#if form?.result}
<p class="text-white text-xs">{form.result}</p>
{/if} -->
