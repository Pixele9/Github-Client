class GitHub {

	constructor(clientId, clientSecret) {
		this.client_id = clientId
		this.client_secret = clientSecret
		this.max_repos = 7
		this.sort_repo = "created: asc"
	}

	async fetchUser(user) {
		const user_res = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
		const repos_req = await fetch(`http://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.max_repos}&sort=${this.sort_repo}`)
		
		const user_data = await user_res.json()
		const repos = await repos_req.json()
		return {
			user_data,
			repos
		}
	}

}

module.exports = GitHub