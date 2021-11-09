<script>
    // import {onMount,onDestroy} from 'svelte'
    import {FeedbackStore} from '../stores'
    import {fade ,scale} from 'svelte/transition'
    import FeedbackItem from "./FeedbackItem.svelte";
    // export let feedback=[]


    // const unsubscribe=FeedbackStore.subscribe((data)=>feedback=data)

    // onMount(()=>{
    //     console.log('Mounted')
    // })
    // onDestroy(()=>{
    //     unsubscribe()
    // })
</script>


<main>
    <h1>Feedback List</h1>
    {#each $FeedbackStore as feedbackItem (feedbackItem.id) }
      <div in:scale out:fade="{{duration:500}}"> <FeedbackItem item={feedbackItem} on:delete-feedback/></div>
    {/each}

</main>