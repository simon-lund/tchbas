<script lang="ts">
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';
	import ScreenshotInstructions from '$lib/components/ScreenshotInstructions.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.message} | This Could've Been a Screenshot</title>
	<meta name="description" content={data.message} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="This Could've Been a Screenshot" />
	<meta property="og:description" content={data.message} />
	<meta property="og:image" content="{page.url.origin}/api/og?m={data.messageIndex}" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="This Could've Been a Screenshot" />
	<meta name="twitter:description" content={data.message} />
	<meta name="twitter:image" content="{page.url.origin}/api/og?m={data.messageIndex}" />
</svelte:head>

<main class="relative z-10 flex min-h-screen flex-col items-center px-6 pt-24 pb-32">
	<!-- Header -->
	<p class="text-xl font-medium tracking-tight text-muted-foreground">
		This Could've Been a Screenshot
	</p>

	<!-- Roast Message -->
	<div class="mt-4 flex min-h-[140px] items-center justify-center px-4 py-10 text-center">
		{#key data.message}
			<h1
				in:fade={{ duration: 300, delay: 100 }}
				class="max-w-4xl scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance italic lg:text-5xl"
			>
				"{data.message}"
			</h1>
		{/key}
	</div>

	<ScreenshotInstructions />
</main>
