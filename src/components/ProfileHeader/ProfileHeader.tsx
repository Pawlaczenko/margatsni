import React, { FC, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IUserInfo } from '../../interfaces/UserInterfaces'
import ProfilePic, { sizes } from '../ProfilePic/ProfilePic';
import useGenerateRandomColor from '../../hooks/useGenerateRandomColor';

const ProfileHeader : FC<IUserInfo> = ({username, name, id}) => {
    const {color, generateColor} = useGenerateRandomColor();
    useEffect(() => {
        generateColor();
    }, []);
    return (
        <Wrapper>
            <ProfilePic name={name} size={sizes.small} color={color} />
            <StyledUserName to={`/profile/${id}`}>{username}</StyledUserName>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
`;

const StyledUserName = styled(NavLink)`
    &:hover{color:var(--color-blue);}
`;

export default ProfileHeader