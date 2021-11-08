<script>
	let firstName="Raptors";
	let lastName="Beak"
    let color='blue'
	let showText=false
	// reactive value
	$: name=firstName+' '+lastName
	// Involed in the onclick button
	const toggle=()=>{
		color=color==="blue"?'red':'blue'
		showText=!showText
		addUsers()
	}
	let users=[
		{id:'1',name:'John'},{id:'2',name:'Jacob'},{name:'Hans',id:3}
	]
	const addUsers=()=>{
        let randId=Math.floor(Math.random()*100)
		users=[...users,{id:randId,name:'Jane'}]
	}
</script>

<main>
	<h1 style="color: {color}"
	>Hello {name}!</h1>
	{#if showText}
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{:else}
		<p>Will add stuff on toggles</p>
	{/if}
	<!-- Events -->
	<!-- Inline -->
	<button on:click={()=>color="purple"}>Click Me</button>
	<!-- Named funcion -->
	<button on:click={toggle}>Toggle</button>

	<!-- Looping -->
	{#each users as user (user.id)}
		<h3>{user.id} : {user.name}</h3>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>