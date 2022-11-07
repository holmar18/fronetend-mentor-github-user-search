export interface IGitUser {
	login: string | null;
	id: number | null;
	node_id: string | null;
	avatar_url: string | null;
	gravatar_id: string | null;
	bio: string | null;
	blog: string | null;
	company: string | null;
	created_at: string | null;
	email: string | null;
	events_url: string | null;
	followers: number | null;
	followers_url: string | null;
	following: number | null;
	following_url: string | null;
	gists_url: string | null;
	hireable: string | null;
	html_url: string | null;
	location: string | null;
	name: string | null;
	organizations_url: string | null;
	public_gists: number | null;
	public_repos: number | null;
	received_events_url: string | null;
	repos_url: string | null;
	site_admin: boolean | null;
	starred_url: string | null;
	subscriptions_url: string | null;
	twitter_username: string | null;
	type: string | null;
	updated_at: string | null;
	url: string | null;
}

// extension for Not found profile
export interface IGitUserProfile extends IGitUser {
	documentation_url: string;
	message: string;
}
