import { IUserInfo } from "../interfaces/UserInterfaces";

export const getUserInfo = async (id? : number) => {
    const user : IUserInfo = {
        id: 1,
        username: "minecraftGuy123",
        name: "Arthur Clarke",
    } 
    
    return user;
}

export const GetUsers = async (count : number) => {
    const usersArray = [
        {
            id: 2,
            username: "randomguy123",
            name: "Arthur Barke",
        },
        {
            id: 3,
            username: "gogoggaga",
            name: "Mathew Barke",
        },
        {
            id: 4,
            username: "AdamDriverOfficial",
            name: "Adam Driver",
        },
        {
            id: 5,
            username: "zaq1@WSX",
            name: "Madane Driver",
        },
        {
            id: 6,
            username: "mama_tata_papa",
            name: "Ben Tennyson",
        },
    ];

    return usersArray;
}