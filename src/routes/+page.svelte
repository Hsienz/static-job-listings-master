<script>
	import Jobs from "$lib/Jobs.svelte";
    import Filter from "$lib/Filter.svelte";
</script>

<div
	class="relative bg-Light_Grayish_Cyan_Background bg-[url('$lib/images/bg-header-mobile.svg')] bg-no-repeat pt-48 px-6 pb-16 min-h-screen"
>
    <Filter />    
	<Jobs />
</div>
