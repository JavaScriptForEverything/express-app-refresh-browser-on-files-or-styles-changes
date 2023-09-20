## Express App: Reload Browser on changing any file

#### Features
- Express App with templete engine `EJS`
- Express App with `Tailwind CSS`
- Refresh browser by changing any files or styles
- Create Component file for every component inside `/views/component/` 


#### Commands
```
$ yarn clone <url>
$ yarn install
$ yarn dev

```

#### Create `Re-usable` component for tailwind CSS by `EJS` include function
- We can create React-like Component in ejs template

##### /app.js
```
...
app.set('view engine', 'ejs') 

app.get('/', (_req, res) => {
	const users = [
		{ id: 1, name: 'riajul', email: 'riajul@gmail.com' },
		{ id: 2, name: 'rakib', email: 'rakib@yahoo.com' },
	]
	res.render('./pages/index', { users })
})
...
```



##### /views/pages/index.ejs 	=> `/index.html`
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>TailWind CSS</title>
	<link rel="stylesheet" href="./style.css">
</head>
<body>

	<br />
	<h2> Method-1: Loop-through Data instead of duplication. comes from Server and Loop throw it</h2>

	<% for(user of users) { %>
		<p class="border border-red-500 mb-2">User name: <%=user.name %></p>
	<% } %>

	<h2> Method-2: Create Component instead of duplication. </h2>
	<%-include('../components/input') %>

	<br />

	<main class="w-screen h-screen flex justify-center items-center bg-slate-100">
		<section class="w-3/4 h-1/2 bg-white border border-slate-500 
			grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6
		">
				<div class="bg-gray-200 flex justify-center items-center">one</div>
				<div class="bg-pink-200 flex justify-center items-center">two</div>
				<div class="bg-blue-200 flex justify-center items-center">three</div>
				<div class="bg-orange-200 flex justify-center items-center">four</div>
				<div class="bg-sky-200 flex justify-center items-center">five</div>
				<div class="bg-cyan-200 flex justify-center items-center">six</div>
		</section>
	</main>
	
</body>
</html>
```



##### /views/components/input.ejs 	=> `/index.html`
```
<div>
	<lable id="email" class="text-slate-600 font-medium 
			after:content-['*'] after:text-red-500 after:ml-0.5">Email</lable> 
	<input for="email" type="email" placeholder="your-email.com" class="peer w-full mt-1 px-3 py-2
		placeholder:italic placeholder:text-slate-400
		border border-slate-300 rounded-md
		focus:border-sky-500 outline-none
		invalid:border-pink-500 invalid:text-pink-700
		invalid:focus:border-pink-500 invalid:focus:ring-pink-500
		focus:ring-1 focus:ring-sky-500 
		disabled:text-slate-500 disabled:border-slate-300
	">
	<small class="text-red-600 mb-2 hidden peer-invalid:block">sorry email in-correct</small>
</div>
```