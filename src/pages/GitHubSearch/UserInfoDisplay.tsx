import React, { FunctionComponent } from 'react';
import './userInfoDisplay.css';
// img
import defImg from '../../assets/octacat.png';
// Icons
import { MdLocationPin } from 'react-icons/md';
import { BiLink } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { HiBuildingOffice2 } from 'react-icons/hi2';
// theme
import { useThemeContext } from '../../context/ThemeContext';
import { useGithubSearchContext } from '../../context/GithubSearchContext';
// Constants
import { GITHUBSEARCH } from '../../constants/constants';
// Utils
import { notAvailable, format, formatDate } from '../../utils';

const UserInfoDisplay: FunctionComponent<{}> = (): JSX.Element => {
	const { theme } = useThemeContext();
	const { userData } = useGithubSearchContext();

	const stats = [
		userData?.public_repos,
		userData?.followers,
		userData?.following,
	];

	const footer = [
		userData?.location,
		userData?.blog,
		userData.twitter_username,
		userData?.company,
	];

	return (
		<div className='profile-container'>
			{/* HEADER */}
			<div className='profile-header-container'>
				{/* PROFILE IMG */}
				<img
					src={userData?.avatar_url}
					alt='Github user photo'
					className='profile-img'
				/>
				{/* PROFILE IMG - END */}
				<div className='profile-user-container'>
					{/* USERNAME */}
					<div className='profile-name-container'>
						<h2 id='name' className={`${theme}-p-t`}>
							{userData?.name}
						</h2>
						<p id='user'>@{userData?.login}</p>
					</div>
					{/* USERNAME - END */}

					{/* JOINED DATE */}
					<p id='date' className={`${theme}-p-p`}>
						Joined {formatDate(userData?.created_at)}
					</p>
					{/* JOINED DATE - END */}
				</div>
			</div>
			{/* HEADER - END */}

			{/* BIO */}
			<p id='bio' className={`${theme}-p-p ${notAvailable(userData.bio)}`}>
				{userData?.bio !== null ? userData.bio : GITHUBSEARCH.bio}
			</p>
			{/* BIO - END */}

			{/* PROFILE STATS */}
			<div className={`${theme}-s-c profile-stats-container`}>
				{/* REPOS, FOLLOWERS, FOLLOWING */}
				{stats.map((stat, i) => {
					return (
						<div className='profile-stats'>
							<p className={`${theme}-p-p profile-stats-title`}>
								{GITHUBSEARCH.stats[i]}
							</p>
							<p className={`${theme}-p-s profile-stats-value`}>{stat}</p>
						</div>
					);
				})}
				{/* REPOS, FOLLOWERS, FOLLOWING - END */}
			</div>

			{/* FOOTER */}
			<div className='profile-footer-container'>
				{/* LOCATION, BLOG, TWITTER, COMPANY */}
				{footer.map((item) => {
					return (
						<div className={`${theme}-p-p ${notAvailable(item)} footer-item`}>
							<div className='footer-item-icon'>
								<MdLocationPin />
							</div>
							<p>{format(item)}</p>
						</div>
					);
				})}
				{/* LOCATION, BLOG, TWITTER, COMPANY - END */}
			</div>
			{/* FOOTER - END */}
		</div>
	);
};

export { UserInfoDisplay };
