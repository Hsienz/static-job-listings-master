<script lang="ts">
	import iconRemove from "$lib/images/icon-remove.svg";
	import {filters} from "$lib/stores/store"
	export let content: string;
</script>

<div
	class="justify-center items-center overflow-hidden rounded-lg text-Desaturated_Dark_Cyan bg-Light_Grayish_Cyan_Filter_Tablets flex h-8 font-bold"
>
	<p class="px-2">{content}</p>
	<button on:click={()=>filters.delete(content)} class="h-full aspect-square bg-Desaturated_Dark_Cyan">
		<img class="m-auto" src={iconRemove} alt="" />
	</button>
</div>
