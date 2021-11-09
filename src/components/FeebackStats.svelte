<script>

import {FeedbackStore} from "../stores"

    $:count=$FeedbackStore.length
	$:ratingTotal=$FeedbackStore.reduce((currTotal,item)=>{
		return currTotal+item.rating
	},0)
	$:average=ratingTotal/count
</script>



<div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Ratings Average: {average}</h4>
</div>



<style>
    .feedback-stats{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>