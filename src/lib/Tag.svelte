<script lang="ts">
    import { filters } from "./stores/store"
    export let content:string
</script>

<div class="flex items-center">
    <button on:click={()=>filters.add(content)} class="p-2 font-bold rounded-lg bg-Light_Grayish_Cyan_Filter_Tablets text-Desaturated_Dark_Cyan hover:bg-Desaturated_Dark_Cyan hover:text-white duration-300">
        {content}
    </button>
</div>