import React, { useContext } from 'react'
import { AppContext } from '../context/context'

const Home = () => {
    const { number } = useContext(AppContext);
    return (
        <div>
            <h1>Home</h1>
            <h3>number from counter:{number}</h3>
        </div>
    )
}

export default Home
