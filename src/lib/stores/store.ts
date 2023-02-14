import { derived, writable } from "svelte/store"
import data from "$lib/data/data.json"

export type dataType = typeof data[0]

const createFilters = () => {
    const {subscribe, update} = writable(new Set<string>())
    return {
        subscribe,
        add: (filter:string) => update(state=>state.add(filter)),
        delete: (filter:string) => update(state=>{
            state.delete(filter)
            return state
        }),
        clear: () => update(state=>{
            state.clear()
            return state
        })
    }
}

export const filters = createFilters()

const createJobs = () => {
    const {subscribe} = writable(data)
    return {
        subscribe
    }
}

export const jobs = createJobs()

export const getTags = (job:dataType) => {
    return [job.role, job.level, ...job.languages, ...job.tools]
}

export const filteredJobs = derived([jobs,filters], ([$jobs,$filters])=> $jobs.filter(x=>{
    let tags = new Set( getTags(x) )
    return [...$filters].every(y=>tags.has(y))
}))
