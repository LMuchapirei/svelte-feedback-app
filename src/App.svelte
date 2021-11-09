<script>
	import FeedbackList from './components/FeedbackList.svelte'
	import FeedbackStats from './components/FeebackStats.svelte'
	import FeedbackForm from './components/FeedbackForm.svelte'
	let feedback=[]
	$:count=feedback.length
	$:ratingTotal=feedback.reduce((currTotal,item)=>{
		return currTotal+item.rating
	},0)
	$:average=ratingTotal/count
	// const deleteFeedback=(e)=>{
	// 	const itemId=e.detail
	// 	feedback=feedback.filter((item)=>item.id!=itemId)
	// }
	const addFeedback=(e)=>{
		const newFeedback=e.detail
		feedback=[...feedback,newFeedback]
	}
</script>

<main class="container">
<FeedbackForm on:add-feedback={addFeedback}/>
<FeedbackStats {count} {average} />
<FeedbackList  
on:delete-feedback={deleteFeedback}/>
</main>

<style>

</style>