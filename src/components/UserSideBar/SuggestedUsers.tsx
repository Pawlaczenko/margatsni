import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IUserInfo } from '../../interfaces/UserInterfaces';
import { GetUsers } from '../../services/userService';
import ProfileHeader from '../ProfileHeader/ProfileHeader';

const SuggestedUsers : FC = () => {
    const [suggestedUsers, setSuggestedUsers] = useState<Array<IUserInfo> | null>(null);
    useEffect(() => {
        GetUsers(5).then((res) => res && setSuggestedUsers(res));
    },[]);

    return (
        <Wrapper>
            <StyledHeader>
                Propocyzje dla Ciebie
                <Link to={"/users"}>Zobacz wszystkich</Link>
            </StyledHeader>
            {suggestedUsers && 
                suggestedUsers.map(user => 
                    <StyledSuggestedUser>
                        <ProfileHeader key={user.id} id={user.id} name={user.name} username={user.username} />
                        <StyledGoToProfile to={`/profile/${user.id}`}>profile</StyledGoToProfile>
                    </StyledSuggestedUser>
                )
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
`

const StyledHeader = styled.div`
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--color-grey);
    display: flex;

    & > a {
        font-size: 1.2rem;
        font-weight: 400;
        color: black;
        margin-left: auto;
    }
`;

const StyledSuggestedUser = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledGoToProfile = styled(Link)`
    font-size: 1.4rem;
    color: var(--color-blue);
`;

export default SuggestedUsers