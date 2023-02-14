<script>
    import {filteredJobs,jobs} from '$lib/stores/store'
    import Job from './Job.svelte';
</script>

<div class="grid gap-10">
    {#each $filteredJobs as job}
        <Job job={job}/>
    {/each}
</div>