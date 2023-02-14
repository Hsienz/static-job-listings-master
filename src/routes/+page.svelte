<script>
	import Jobs from "$lib/Jobs.svelte";
    import Filter from "$lib/Filter.svelte";
</script>

<div
	class="relative bg-Light_Grayish_Cyan_Background  pt-48 px-6 pb-16 min-h-screen min-w-[375px] md:px-16"
>
	<div class="absolute top-0 left-0 w-full h-[180px] bg-Desaturated_Dark_Cyan bg-cover bg-[url('/images/bg-header-mobile.svg')] md:bg-[url('/images/bg-header-desktop.svg')] bg-no-repeat"></div>
    <Filter />    
	<Jobs />
</div>
