import { sizes } from "./ProfilePic";

export const getInitialsFromName = (name : string) => {
    if(!name) return "";
    let splittedName = name.split(" ");
    return `${splittedName[0][0]}${splittedName[1][0]}`;
}

export const handleSize = (size : sizes) => {
    switch(size){
        case sizes.large:
            return "width: 16rem; height: 16rem; font-size: 7.4rem;";
        case sizes.medium:
            return "width: 6.5rem; height: 6.5rem; font-size: 2.4rem;";
        case sizes.small:
        default:
            return "width: 4.2rem; height: 4.2rem; font-size: 1.6rem;";
    }
}