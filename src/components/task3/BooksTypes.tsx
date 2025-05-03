import {booksArray} from "../../arrays-2.ts";
import {BookType} from "./BookType.tsx";
import {BookModel} from "../../models/training/BookModel.ts";

export const BooksTypes = () => {
    return (
        <ul>
            {
                booksArray.map((book: BookModel, index: number) => {
                    return <BookType book={book} key={index}/>
                })
            }
        </ul>
    );
};
