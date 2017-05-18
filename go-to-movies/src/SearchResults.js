import React, { Component } from 'react';
import './App.css';

function SearchResults(props) {
    return (
        <div>
            <ul className="movie-list">
                {props.movies.map((movie, i) => <li className="movie-instance" key={i}>
                    <img src={movie.Poster} />
                    <br/>
                    {movie.Title}
                    <br/>
                    {movie.Year}
                </li>)}
            </ul>
        </div>
    )
}


export default SearchResults;