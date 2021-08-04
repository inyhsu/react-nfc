import React, { useState, useEffect } from 'react';
import axios from './axios';

const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    console.log(movies)

    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default Row
