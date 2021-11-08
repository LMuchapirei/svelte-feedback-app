Reactive values just define a value wthin the script tag and start using it anwhere in the main section of the app
prefix on defination with $:

example
```
<script>
	let firstName="Raptors";
	let lastName="Beak"
    let color='blue'
	let showText=false
	// reactive value
	$: name=firstName+' '+lastName
</script>

<main>
// Consume the reactive value and if either firstName or lastName changes then name will aslo change
{name}
</main>
```
Event binding on:

inline handler or pass reference to a function that will be called on the event 

on:eventType
```
<script>
    let color='red'
    const toggleColor=()=>{
        color=color==='red'?'blue':'red'
    }
</script>

<main>
    <button on:click={()=>{
        color=color==='red'?'blue':'red'
    }}>Inline</button>
    <button on:click="toggleColor">HandleFunc</button>
</main>

```
Conditionals
```
{#if condition}
  {:else}
{/if}

example
{#if showText}
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
{:else}
    <p>Will add stuff on toggles</p>
{/if}
```

Looping constructs
    ```an array usrs each with a name and an id note the key is the (user.id) construct
	<!-- Looping -->
	{#each users as user (user.id)}
		<h3>{user.id} : {user.name}</h3>
	{/each}
	```


All in all so far for the basics

```
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
        let randId=Math.random(12)
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
```


*Psst — looking for a more complete solution? Check out [SvelteKit](https://kit.svelte.dev), the official framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.*

*Looking for a shareable component template instead? You can [use SvelteKit for that as well](https://kit.svelte.dev/docs#packaging) or the older [sveltejs/component-template](https://github.com/sveltejs/component-template)*

---

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript

This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

If you want to use `baseUrl` or `path` aliases within your `tsconfig`, you need to set up `@rollup/plugin-alias` to tell Rollup to resolve the aliases. For more info, see [this StackOverflow question](https://stackoverflow.com/questions/63427935/setup-tsconfig-path-in-svelte).

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
