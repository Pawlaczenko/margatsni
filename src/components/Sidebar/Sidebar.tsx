import {FC} from 'react'
import styled from 'styled-components'
import Navigation from './Navigation';

const Sidebar : FC = () => {
	return (
		<StyledSidebar>
			<Logo>Margatsni</Logo>
			<Navigation />
		</StyledSidebar>
	)
}

const StyledSidebar = styled.aside`
	background-color: white;
	border-right: 1px solid var(--color-grey-lightest);
	height: 100vh;
	padding: 6%;
`;

const Logo = styled.div`
	font-size: 3.6rem;
	font-family: 'Dancing Script', cursive;
	margin-bottom: 5rem;
`;

export default Sidebar