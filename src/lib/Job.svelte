<script lang="ts">
    import {getTags, type dataType} from '$lib/stores/store'
    import NewAttr from './NewAttr.svelte';
    import FeatureAttr from './FeatureAttr.svelte';
    import Tag from './Tag.svelte';
	import { onMount } from 'svelte';
    export let job: dataType
    const logo = new URL(`/src/lib/${job.logo.slice(2)}`, import.meta.url).href
    console.log(logo)
</script>

<div class="relative duration-300 border-l-[6px] box-content border-transparent hover:border-l-Desaturated_Dark_Cyan rounded-lg border-solid bg-white p-8 shadow-Desaturated_Dark_Cyan shadow-[0_10px_40px_-20px] flex flex-col gap-3">
    <img class="w-12 aspect-square absolute top-0 -translate-y-1/2" src={logo} alt="">
    <div class="flex gap-2">
        <p class="text-Desaturated_Dark_Cyan font-bold mr-4">{job.company}</p>
        {#if job.new}
            <NewAttr/>
        {/if}
        {#if job.featured}
            <FeatureAttr/>
        {/if}
    </div>
    <div>
        {job.position}
    </div>
    <div class="text-Dark_Grayish_Cyan flex items-center gap-2">
        {job.postedAt}
        <span class="aspect-square h-[3px] inline-block rounded-full bg-Dark_Grayish_Cyan"></span>
        {job.contract}
        <span class="aspect-square h-[3px] inline-block rounded-full bg-Dark_Grayish_Cyan"></span>
        {job.location}
    </div>
    <hr>
    <div class="flex flex-wrap gap-4">
        {#each getTags(job) as tag}
            <Tag content={tag}/>
        {/each}
    </div>
</div>