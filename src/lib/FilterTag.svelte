<script lang="ts">
	import {filters} from "$lib/stores/store"
	export let content: string;
</script>

<div
	class="justify-center items-center overflow-hidden rounded-lg text-Desaturated_Dark_Cyan bg-Light_Grayish_Cyan_Filter_Tablets flex h-8 font-bold"
>
	<p class="px-2">{content}</p>
	<button on:click={()=>filters.delete(content)} class="h-full aspect-square bg-Desaturated_Dark_Cyan hover:bg-Very_Dark_Grayish_Cyan duration-300">
		<img class="m-auto" src="./images/icon-remove.svg" alt="" />
	</button>
</div>
