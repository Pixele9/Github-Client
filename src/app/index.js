const UI = require('./ui')
const Github = require('./github')

const { client_id, client_secret } = require('./config.json')

const github = new Github(client_id, client_secret)
const ui = new UI()


const userForm = document.getElementById('search-form')

userForm.addEventListener('submit', (e) => {
	e.preventDefault()
	const textSearch = document.getElementById("user-search").value
	if (textSearch !== '') {
		github.fetchUser(textSearch).then(data => {
			if(data.user_data.message === "Not Found") {
				ui.showMessage("User not found", "alert alert-danger alert-dismissible fade show col-md-12 mt-2")
			} else {
				ui.showUser(data.user_data)
				ui.showRepos(data.repos)
			}
		})
	} else {
		alert("Enter a valid username")
	}
	console.log(textSearch)
})

