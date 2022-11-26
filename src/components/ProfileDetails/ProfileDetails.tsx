import React, {FC, useEffect} from 'react'
import styled from 'styled-components'
import useGenerateRandomColor from '../../hooks/useGenerateRandomColor'
import ProfilePic, { sizes } from '../ProfilePic/ProfilePic'
import Button from '../Button/Button'

const ProfileDetails:FC = () => {
    const {color, generateColor} = useGenerateRandomColor();
    useEffect(()=>{
        generateColor();
    },[])
  return (
    <Header>
        <ProfilePic name={'Placeholder Placeholder'} color={color} size={sizes.large}  />
        <Details>
            <Line>
                <Username> /Username/ </Username>
                <Button isPrimary={false} handleClick={()=>{
                    console.log('test');
                }}> Edytuj Profil</Button>
            </Line>
            <Line>
                <div>
                    <span>
                        Posty:
                    </span>
                    <BoldSpan>
                        /n/
                    </BoldSpan>
                </div>   
                <div>
                    <span>
                        Albumy:
                    </span>
                    <BoldSpan>
                        /n/
                    </BoldSpan>
                </div>
                <div>
                    <span>  
                        Zdjęcia:
                    </span>
                    <BoldSpan>
                        /n/
                    </BoldSpan>
                </div>
            </Line>
            <Line>
                <Name> /FirstName/ /Surname/ </Name>
            </Line>
        </Details>
    </Header>
  )
}
const Header =  styled.div`
    width: 100%;
    margin: 7.5rem auto;
    display: flex;
    justify-content: space-evenly;


    
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    
`
const Username = styled.div`
    font-size: 3.6rem;
`
const Line = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    justify-content: space-between;

`
const BoldSpan = styled.span`
    font-weight: 700;
    &::before{
        content: " ";
    }
`
const Name = styled.span`
    font-weight: 700;
`

export default ProfileDetails