import React, {FC, useEffect, useState} from 'react'
import {getUserInfo} from '../../services/userService';
import { IUserInfo } from '../../interfaces/UserInterfaces';
import styled from 'styled-components';
import ProfilePic, { sizes } from '../ProfilePic/ProfilePic';
import { Link, NavLink } from 'react-router-dom';

const ProfileBox : FC = () => {
	const [profileInfo, setProfileInfo] = useState<IUserInfo | null>(null);

    useEffect(()=> {
		getUserInfo(1).then((res : IUserInfo) => res && setProfileInfo(res));
    },[]);

	return (
		profileInfo &&
		<Wrapper>
			<ProfilePic name={profileInfo.name} color="#faf" size={sizes.medium} />
			<StyledNames>
				<Link to={`/profile/${profileInfo.id}`}>{profileInfo.username}</Link>
				<span>{profileInfo.name}</span>
			</StyledNames>
			<LogOutButton to="profile/logout">Wyloguj</LogOutButton>
		</Wrapper> 
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
`;

const StyledNames = styled.div`
	display: flex;
	flex-direction: column;

	& > a {
		font-size: 1.6rem;
		font-weight: 700;
	}

	& > span {font-size: 1.5rem}
`;

const LogOutButton = styled(NavLink)`
	margin-left: auto;
	font-size: 1.4rem;
	font-weight: 700;
	color: var(--color-blue);
`;

export default ProfileBox