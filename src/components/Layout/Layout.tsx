import {FC} from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from "../Sidebar/Sidebar";

const Layout : FC = () => {
  return (
	<StyledWrapper>
	  <Sidebar />
	  <Outlet />
	</StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  background-color: var(--color-grey-background);
  display: grid;
  grid-template-columns: min(27.2rem, 30vw) 1fr;
`;

export default Layout