import React from 'react';
import { Book } from './Book';
export function BookList() {
    const books = [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2018 },
        { title: 'Book 3', author: 'Author 3', year: 2022 },
        { title: 'Book 4', author: 'Author 4', year: 2023 },
        { title: 'Book 5', author: 'Author 5', year: 2016 },
        { title: 'Book 6', author: 'Author 6', year: 2027 },
        { title: 'Book 7', author: 'Author 7', year: 2017 },
        { title: 'Book 8', author: 'Author 8', year: 2019 },
        { title: 'Book 9', author: 'Author 9', year: 2021 },
    ];
    const allBooks = books.map((item, index) => {
        return <Book bookItem={item} key={index} />;
    });
    return <ul>{allBooks}</ul>;
}
