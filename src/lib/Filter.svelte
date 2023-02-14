<script lang="ts">
	import { filters } from "$lib/stores/store";
	import FilterTag from "./FilterTag.svelte";
</script>

{#if $filters.size}
	<div class="bg-white rounded-xl p-4 flex relative bottom-16 shadow-Desaturated_Dark_Cyan shadow-[0_10px_40px_-20px]">

		<div class="flex flex-wrap gap-4">
			{#each [...$filters] as filter}
				<FilterTag content={filter} />
			{/each}
		</div>
		<button
			on:click={() => filters.clear()}
			class="ml-auto text-Dark_Grayish_Cyan font-bold my-auto duration-300 hover:text-Desaturated_Dark_Cyan border-b-[1px] border-solid border-transparent hover:border-b-Desaturated_Dark_Cyan"
		>
			Clear
		</button>
	</div>
{/if}
