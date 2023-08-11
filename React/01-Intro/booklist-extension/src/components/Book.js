import React from 'react';
import '../styles/Book.css';
export function Book(props) {
    return (
        <div className="book-card">
            <h3 className="card-title">{props.bookItem.title}</h3>
            <p className="card-body">Author: {props.bookItem.author}</p>
            <p className="card-footer">Year: {props.bookItem.year}</p>
        </div>
    );
}
