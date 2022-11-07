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

const UserInfoDisplay: FunctionComponent<{}> = (): JSX.Element => {
	const { theme } = useThemeContext();

	return (
		<div className='profile-container'>
			<div className='profile-header-container'>
				<img src={defImg} alt='Github user photo' className='profile-img' />
				<div className='profile-user-container'>
					<div className='profile-name-container'>
						<h2 id='name' className={`${theme}-p-t`}>
							Octacat
						</h2>
						<p id='user'>@octacat</p>
					</div>
					<p id='date' className={`${theme}-p-p`}>
						Joined 25 Jan 2011
					</p>
				</div>
			</div>
			<p id='bio' className={`${theme}-p-p`}>
				This profile has no bio
			</p>
			<div className={`${theme}-s-c profile-stats-container`}>
				<div className='profile-stats'>
					<p className={`${theme}-p-p profile-stats-title`}>Repos</p>
					<p className={`${theme}-p-s profile-stats-value`}>8</p>
				</div>
				<div className='profile-stats'>
					<p className={`${theme}-p-p profile-stats-title`}>Followers</p>
					<p className={`${theme}-p-s profile-stats-value`}>7474</p>
				</div>
				<div className='profile-stats'>
					<p className={`${theme}-p-p profile-stats-title`}>Following</p>
					<p className={`${theme}-p-s profile-stats-value`}>9</p>
				</div>
			</div>
			<div className='profile-footer-container'>
				<div className={`${theme}-p-p footer-item`}>
					<div className='footer-item-icon'>
						<MdLocationPin />
					</div>
					<p>San Francisco</p>
				</div>
				<div className={`${theme}-p-p footer-item`}>
					<div className='footer-item-icon'>
						<BiLink />
					</div>
					<p>https://github.blog</p>
				</div>
				<div className={`${theme}-p-p footer-item`}>
					<div className='footer-item-icon'>
						<BsTwitter />
					</div>
					<p>Not available</p>
				</div>
				<div className={`${theme}-p-p footer-item`}>
					<div className='footer-item-icon'>
						<HiBuildingOffice2 />
					</div>
					<p>@github</p>
				</div>
			</div>
		</div>
	);
};

export { UserInfoDisplay };
