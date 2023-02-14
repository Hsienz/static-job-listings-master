<script>
	import Jobs from "$lib/Jobs.svelte";
    import Filter from "$lib/Filter.svelte";
</script>

<div
	class="relative bg-Light_Grayish_Cyan_Background bg-contain bg-[url('$lib/images/bg-header-mobile.svg')] md:bg-[url('$lib/images/bg-header-desktop.svg')] bg-no-repeat pt-48 px-6 pb-16 min-h-screen min-w-[375px] md:px-16"
>
    <Filter />    
	<Jobs />
</div>
