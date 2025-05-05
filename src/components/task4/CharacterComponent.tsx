import {ICharacter} from "../../models/training/ICharacter.ts";
import {ReactNode} from "react";
import './CharacterComponent.css';
interface CharacterComponentProps {
    item: ICharacter,
    children: ReactNode,
}

export const CharacterComponent = ({item,children}: CharacterComponentProps) => {
    return (
        <div>
            <h3>{item.name} {item.surname}</h3>
            <img src={item.photo} alt={item.name}/>
            <p>{children}</p>
        </div>
    );
};
