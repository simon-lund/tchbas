<script lang="ts">
	import MessageConfigurator from '$lib/components/MessageConfigurator.svelte';
</script>

<main class="relative z-10 flex min-h-screen flex-col items-center px-6 pb-32 pt-24">
	<!-- Title -->
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance lg:text-5xl">
		This Could've Been a Screenshot
	</h1>

	<!-- Explainer -->
	<p class="text-muted-foreground text-xl leading-7 [&:not(:first-child)]:mt-6 max-w-lg text-center">
		Stop the screen-photo pandemic. Use the configurator below to send a polite (or not-so-polite) reminder.
	</p>

	<MessageConfigurator />
</main>
