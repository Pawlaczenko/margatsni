import React, {FC} from 'react';
import styled from 'styled-components';

interface IWindowProps{
    children: React.ReactNode;
}
const Window:FC<IWindowProps> = ({children}) => {
    
  return (
    <WindowBackground>
        <WindowExit>X</WindowExit>
        <WindowDisplay>{children}</WindowDisplay>
    </WindowBackground>
  )
}
const WindowBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-black-background);
    position: absolute;
    height: 100vh;
    width: 100vw;
`;
const WindowExit = styled.div`
    position: absolute;
    right: 1rem;
    top: 1rem;
`;
const WindowDisplay = styled.div`
    min-height: 40rem;
    min-width: 40rem;
    background: white;
    border-radius: 1.3rem;

`;
export default Window