<script lang="ts">
	import { getTags, type dataType } from "$lib/stores/store";
	import NewAttr from "./NewAttr.svelte";
	import FeatureAttr from "./FeatureAttr.svelte";
	import Tag from "./Tag.svelte";
	export let job: dataType;
	const logo = new URL(job.logo,import.meta.url).href
</script>

<div
	class="relative duration-300 border-l-[6px] box-content border-transparent hover:border-l-Desaturated_Dark_Cyan rounded-lg border-solid bg-white p-8 shadow-Desaturated_Dark_Cyan shadow-[0_10px_40px_-20px] flex flex-col md:flex-row gap-3 md:gap-x-8"
>
	<img
		class="w-12 aspect-square absolute top-0 -translate-y-1/2 md:relative md:translate-y-0 md:w-auto md:h-24"
		src={logo}
		alt=""
	/>
	<div class="flex flex-col gap-[inherit]">
		<div class="flex gap-2">
			<p class="text-Desaturated_Dark_Cyan font-bold mr-4">
				{job.company}
			</p>
			{#if job.new}
				<NewAttr />
			{/if}
			{#if job.featured}
				<FeatureAttr />
			{/if}
		</div>
		<div>
			<a
				href={"#"}
				class="hover:text-Desaturated_Dark_Cyan duration-300 font-bold"
				>{job.position}</a
			>
		</div>
		<div class="text-Dark_Grayish_Cyan flex items-center gap-2 md:gap-4">
			{job.postedAt}
			<span
				class="aspect-square h-[3px] inline-block rounded-full bg-Dark_Grayish_Cyan"
			/>
			{job.contract}
			<span
				class="aspect-square h-[3px] inline-block rounded-full bg-Dark_Grayish_Cyan"
			/>
			{job.location}
		</div>
	</div>
	<hr class="md:hidden border-Dark_Grayish_Cyan" />
	<div class="flex flex-wrap gap-4 md:ml-auto">
		{#each getTags(job) as tag}
			<Tag content={tag} />
		{/each}
	</div>
</div>
