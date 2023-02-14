<script lang="ts">
	import { filters } from "$lib/stores/store";
	import FilterTag from "./FilterTag.svelte";
</script>

{#if $filters.size}
	<div class="bg-white rounded-xl p-4 flex relative bottom-16">

		<div class="flex flex-wrap gap-4">
			{#each [...$filters] as filter}
				<FilterTag content={filter} />
			{/each}
		</div>
		<button
			on:click={() => filters.clear()}
			class="ml-auto text-Dark_Grayish_Cyan font-bold my-auto"
		>
			Clear
		</button>
	</div>
{/if}
