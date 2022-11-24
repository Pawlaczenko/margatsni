import React, { FC } from 'react'
import styled from 'styled-components';
import { flexCenter } from '../../styles/mixins';
import { getInitialsFromName, handleSize } from './ProfilePic.utils';

export enum sizes {
    small,
    medium,
    large
}

interface IProfilePicProps {
    name: string;
    color: string;
    size: sizes;
}

interface IStyledProfilePicProps {
    size: sizes;
    color: string;
}

const ProfilePic : FC<IProfilePicProps> = ({name,color, size}) => {
  return (
    <StyledProfilePic size={size} color={color}>{getInitialsFromName(name)}</StyledProfilePic>
  )
}

const StyledProfilePic = styled.div<IStyledProfilePicProps>`
    ${flexCenter};
    ${({size}) => handleSize(size)};
    
    border-radius: 50%;

	color: white;
	background-color: ${({color}) => color ? `${color}` : `var(--color-blue)`};
	text-transform: uppercase;
    font-weight: 700;
    flex-shrink: 0;
`;

export default ProfilePic