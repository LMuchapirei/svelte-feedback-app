import {writable} from 'svelte/store'


export const FeedbackStore=writable([
    {
        id:1,
        rating:10,
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Accusantium in dolor, alias cum enim expedita omnis nemo 
natus amet quam porro mollitia temporibus veritatis illum tempora sed, nulla, eum ut!`
    },
    {
        id:2,
        rating:9,
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Accusantium in dolor, alias cum enim expedita omnis nemo 
natus amet quam porro mollitia temporibus veritatis illum tempora sed, nulla, eum ut!`
    },
    {
        id:3,
        rating:8,
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Accusantium in dolor, alias cum enim expedita omnis nemo 
natus amet quam porro mollitia temporibus veritatis illum tempora sed, nulla, eum ut!`
    },
])