import './BookType.css';
import { BookModel } from "../../models/training/BookModel.ts";
import {FC} from "react";


type PropsType = {
    book: BookModel
}

export const BookType: FC<PropsType> = ({book}) => {
    return (
        <li>
            <h2>{book.title} </h2>
            <p>{book.author} </p>
            <p>{book.year}</p>
        </li>
    );
};