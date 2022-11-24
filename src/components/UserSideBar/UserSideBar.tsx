import React, {FC} from 'react'
import styled from 'styled-components';
import ProfileBox from './ProfileBox';
import SuggestedUsers from './SuggestedUsers';

const UserSideBar : FC = () => {
  return (
    <StyledWrapper>
        <ProfileBox />
        <SuggestedUsers />
        <Copyright>© 2022 MARGATSNI</Copyright>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.aside`
    max-width: 25%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const Copyright = styled.p`
    text-transform: uppercase;
    color: var(--color-grey);
`;

export default UserSideBar