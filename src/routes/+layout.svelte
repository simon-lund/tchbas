<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { onMount } from 'svelte';

	let { children } = $props();

	injectAnalytics();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>TCHBAS | This Could've Been a Screenshot</title>
</svelte:head>

<ModeWatcher />

<Tooltip.Provider>
	<div class="min-h-screen bg-background text-foreground selection:bg-white selection:text-black">
		<!-- Background Decor -->
		<div class="pointer-events-none fixed inset-0 overflow-hidden opacity-20">
			<div
				class="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-blue-500/10 blur-[120px]"
			></div>
			<div
				class="absolute right-[-10%] bottom-[-10%] h-[40%] w-[40%] rounded-full bg-white/5 blur-[120px]"
			></div>
		</div>

		<!-- Header -->
		<header
			class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm"
		>
			<div class="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
				<a
					href="/"
					class="text-sm font-bold tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
				>
					TCHBAS
				</a>
				<ThemeSwitch />
			</div>
		</header>

		{@render children()}

		<Footer />
	</div>
</Tooltip.Provider>
