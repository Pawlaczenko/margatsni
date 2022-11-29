import React, {FC} from 'react'
import styled from 'styled-components';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import {RiDeleteBin5Line,RiEdit2Line} from 'react-icons/ri';

const FeedItem : FC = () => {
  return (
    <StyledWrapper>
        <StyledHeader>
            <ProfileHeader id={1} name="Babo Mamo" username='baqardo' />
            <StyledIcons>
                <RiEdit2Line />
                <RiDeleteBin5Line />
            </StyledIcons>
        </StyledHeader>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
    background: white;
    padding: 2.4rem 1.8rem;
    border-radius: 1.5rem;
    border: 2px solid var(--color-grey-lightest);

    width: min(60rem, 80%);
`;

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledIcons = styled.div`
    & > svg {
        width: 2.3rem;
        height: 2.3rem;
        fill: var(--color-grey);
        cursor: pointer;
        margin: 0 .5rem;

        &:hover {
            fill: var(--color-blue);
        }
    }
`

export default FeedItem