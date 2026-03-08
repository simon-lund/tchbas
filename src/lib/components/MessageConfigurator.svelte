<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { ROAST_MESSAGES } from '$lib/constants';
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import * as Card from '$lib/components/ui/card';
	import RefreshCw from '@lucide/svelte/icons/refresh-cw';
	import Link from '@lucide/svelte/icons/link';
	import Check from '@lucide/svelte/icons/check';

	let messageIndex = $state(Math.floor(Math.random() * ROAST_MESSAGES.length));
	let copied = $state(false);

	function rotateMessage() {
		messageIndex = (messageIndex + 1) % ROAST_MESSAGES.length;
	}

	async function copyLink() {
		const baseUrl = window.location.origin;
		const url = `${baseUrl}/?m=${messageIndex}`;
		await navigator.clipboard.writeText(url);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 1500);
	}
</script>

<div class="mt-16 w-full max-w-2xl">
	<div class="mb-4 flex items-center justify-between">
		<h2 class="text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">Configurator</h2>
	</div>

	<!-- Configurator Card -->
	<Card.Root class="overflow-hidden border-none bg-neutral-100 p-1">
		<Card.Content
			class="flex flex-col items-center gap-10 overflow-hidden rounded-[calc(var(--radius)-1px)] bg-neutral-100 p-12 text-neutral-900"
		>
			<!-- Message Display with Transition - using grid to prevent layout shift -->
			<div class="grid min-h-[100px] w-full text-center">
				{#key messageIndex}
					<blockquote
						in:fly={{ y: 20, duration: 400, delay: 100 }}
						out:fade={{ duration: 200 }}
						class="col-start-1 row-start-1 m-0 flex items-center justify-center text-center text-2xl leading-relaxed font-medium text-balance italic md:text-3xl"
					>
						"{ROAST_MESSAGES[messageIndex]}"
					</blockquote>
				{/key}
			</div>

			<!-- Controls -->
			<div class="flex items-center gap-4">
				<Tooltip.Root>
					<Tooltip.Trigger>
						<Button
							variant="default"
							size="icon"
							onclick={rotateMessage}
							class="group h-14 w-14 bg-black text-white shadow-lg hover:bg-black/90 active:scale-95"
						>
							<RefreshCw
								class="h-6 w-6 transition-transform duration-500 group-active:rotate-180"
							/>
						</Button>
					</Tooltip.Trigger>
					<Tooltip.Content>
						<p>Try another one</p>
					</Tooltip.Content>
				</Tooltip.Root>

				<Button
					onclick={copyLink}
					disabled={copied}
					variant="default"
					class="h-14 bg-black px-10 text-lg font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-black/90 active:scale-95 disabled:bg-neutral-400 disabled:text-neutral-100"
				>
					{#if copied}
						<Check class="mr-3 h-6 w-6" />
						Copied Link
					{:else}
						<Link class="mr-3 h-6 w-6" />
						Copy Link
					{/if}
				</Button>
			</div>
		</Card.Content>
	</Card.Root>
</div>
