<script lang="ts">
    export let currentContent: {imgsrc: String, coverCaption: String, title: String};
</script>

<header>
	<div
		class="w-full bg-cover bg-center slide-fade-in-animation md:h-[42rem] sm:h-[32rem] h-[22rem] border-y-2 shadow border-slate-300"
		style="background-image: url({currentContent?.imgsrc});"
	>
		<div class="flex justify-center items-center h-full w-full bg-white bg-opacity-70 relative p-4">
			{#if currentContent?.coverCaption}
				<div
					class="absolute bottom-0 end-0 bg-white px-4 py-2 rounded-tl-lg sm:text-base text-sm italic bg-opacity-30"
				>
					<p class="whitespace-pre-line">{currentContent?.coverCaption}</p>
				</div>
			{/if}
			<div class="text-center">
				<h1 class="text-ssdblue-950 text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
					{currentContent?.title}
				</h1>
			</div>
		</div>
	</div>
</header>
