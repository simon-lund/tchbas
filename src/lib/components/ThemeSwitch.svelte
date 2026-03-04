<script lang="ts">
	import { SunIcon, MoonIcon } from "@lucide/svelte"
	import { mode, toggleMode } from "mode-watcher";
	import { Toggle } from "$lib/components/ui/toggle/index.js";
</script>

<Toggle
	variant="outline"
	size="sm"
	pressed={mode?.current === "dark"}
	onPressedChange={toggleMode}
	aria-label="Toggle theme"
>
	<SunIcon
		class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 !transition-all dark:scale-0 dark:-rotate-90"
	/>
	<MoonIcon
		class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 !transition-all dark:scale-100 dark:rotate-0"
	/>
</Toggle>