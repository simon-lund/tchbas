<script lang="ts">
	import { OS_INSTRUCTIONS } from '$lib/constants';
	import * as Tabs from '$lib/components/ui/tabs';
	import { page } from '$app/state';
	import { AppleIcon, TerminalIcon, MonitorIcon, GlobeIcon, type Icon } from '@lucide/svelte';

	let defaultOS = $state(page.data.os || 'windows');

	const icons: Record<string, typeof Icon> = {
		windows: MonitorIcon,
		macos: AppleIcon,
		linux: TerminalIcon,
		browser: GlobeIcon
	};
</script>

<div class="mt-16 w-full max-w-xl">
	<h2
		class="flex scroll-m-20 items-center gap-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
	>
		How to take a real screenshot?
	</h2>

	<div class="mt-6">
		<Tabs.Root value={defaultOS}>
			<Tabs.List class="grid h-auto w-full grid-cols-4 border-border bg-muted p-1">
				{#each OS_INSTRUCTIONS as os (os)}
					{@const Icon = icons[os.id]}
					<Tabs.Trigger value={os.id} class="flex h-auto flex-col gap-1 py-3">
						<Icon class="h-4 w-4" />
						<span class="text-[10px] sm:text-xs">{os.name}</span>
					</Tabs.Trigger>
				{/each}
			</Tabs.List>

			{#each OS_INSTRUCTIONS as os (os)}
				<Tabs.Content value={os.id}>
					<div class="mt-4 space-y-3">
						{#each os.steps as step (step)}
							<div
								class="flex items-center justify-between rounded-lg border border-border/50 bg-secondary/30 p-4 transition-all hover:border-border"
							>
								<p class="text-sm leading-7 text-foreground">{step.description}</p>
								<div class="flex items-center gap-1.5">
									{#each step.keys as key, i (i)}
										{#if i > 0}
											<span class="text-xs font-bold text-muted-foreground">+</span>
										{/if}
										<kbd
											class="rounded border border-border bg-muted px-2 py-1 font-mono text-sm leading-none font-semibold text-foreground shadow-sm"
										>
											{key}
										</kbd>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				</Tabs.Content>
			{/each}
		</Tabs.Root>
	</div>
</div>
