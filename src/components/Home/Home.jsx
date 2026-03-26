import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import PetsCard from '../PetsCard/PetsCard';

const Home = () => {
    const loadedPets = useLoaderData();
    const [pets, setPets] = useState(loadedPets)
    console.log(pets);
 const handleRemove = (id) => {
    const remainingPets = pets.filter(pet => pet._id !== id);
    setPets(remainingPets)
}


    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
    {/* Section Header (Optional) */}
    <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Meet Our Furry Friends
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
            Browse through our lovable pets waiting for their forever homes. 
            Find your perfect companion today!
        </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {
            pets.map(pet => (
                <PetsCard key={pet._id} handleRemove={handleRemove} pet={pet} />
            ))
        }
    </div>
    {pets.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400 text-lg italic">No pets found at the moment. Check back later!</p>
        </div>
    )}
</div>
    );
};

export default Home;