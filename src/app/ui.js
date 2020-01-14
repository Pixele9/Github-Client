class UI {
	constructor() {
		this.user = document.getElementById("user-profile")
	}

	showUser(user) {
		// console.log(user)

		if(user.blog !== undefined) { 
			this.user.innerHTML = `
			<div class="card mt-4 animated bounceInLeft">
				<img src="${user.avatar_url}" class="card-img-top" />
				<div class="card-body text-center">
					<h2 class="card-title">${user.login}</h2>
					<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
					<span class="badge badge-info mt-2">Followers: ${user.followers}</span>
					<span class="badge badge-info mt-2">Following: ${user.following}</span>
					<span class="badge badge-info mt-2">Blog: ${user.blog}</span>
				</div>
			</div>
			`
		} else {
			this.user.innerHTML = `
			<div class="card mt-4 animated bounceInLeft">
				<img src="${user.avatar_url}" class="card-img-top" />
				<div class="card-body text-center">
					<h2 class="card-title">${user.login}</h2>
					<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
					<span class="badge badge-success mt-2">Followers: ${user.followers}</span>
					<span class="badge badge-primary mt-2">Following: ${user.following}</span>
				</div>
			</div>
			`
		}
		
		this.clearMessage()
	}

	showMessage(message, cssClass) {
		const div = document.createElement('div')
		div.className = cssClass
		div.appendChild(document.createTextNode(message))
		
		const content = document.querySelector(".row")
		const profile = document.querySelector('#user-profile')
		content.insertBefore(div, profile)

	}

	clearMessage() {
		const alert = document.querySelector(".alert")
		if(alert) {
			alert.remove()
		}
	}

	showRepos(repos) {
		console.log(repos)
		let template = ''
		repos.forEach(repo => {
			template += `
			<div class="card card-body mt-4 animated bounceInUp"> 
				<div class="row">
					<dvi class="col-md-6">
						<a href="${repo.html_url}" target="_blank">${repo.name}</a>
					</div>
					<div class="col-md-6">
						<span class="badge badge-primary">Language ${repo.language}</span>
						<span class="badge badge-success">Forks ${repo.forks_count}</span>
					</div>
				</div>
			</div>
			`
		})
		
		const reps = document.getElementById("repos").innerHTML = template

	}

}

module.exports = UI