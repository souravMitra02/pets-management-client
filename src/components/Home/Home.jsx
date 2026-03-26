import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const loadData = useLoaderData();
    console.log(loadData);
    return (
        <div>
            
        </div>
    );
};

export default Home;