import React from 'react';

interface BreedFilterProps {
  selectedBreed: string;
  onBreedChange: (breed: string) => void;
}

const breeds = [
  { name: 'All Breeds', value: 'all', size: 'all', image: '🐕', description: 'All Dogs' },
  { name: 'Labrador', value: 'labrador', size: 'large', image: '🦮', description: 'Friendly & Active' },
  { name: 'Pug', value: 'pug', size: 'small', image: '🐶', description: 'Charming & Playful' },
  { name: 'Golden Retriever', value: 'golden-retriever', size: 'large', image: '🦮', description: 'Gentle & Smart' },
  { name: 'Bulldog', value: 'bulldog', size: 'medium', image: '🐕‍🦺', description: 'Calm & Courageous' },
  { name: 'Beagle', value: 'beagle', size: 'medium', image: '🐕', description: 'Curious & Friendly' },
  { name: 'Chihuahua', value: 'chihuahua', size: 'small', image: '🐶', description: 'Tiny & Brave' },
  { name: 'German Shepherd', value: 'german-shepherd', size: 'large', image: '🦮', description: 'Loyal & Intelligent' },
  { name: 'Poodle', value: 'poodle', size: 'medium', image: '🐩', description: 'Smart & Elegant' },
  { name: 'Rottweiler', value: 'rottweiler', size: 'large', image: '🦮', description: 'Strong & Loyal' },
  { name: 'Shih Tzu', value: 'shih-tzu', size: 'small', image: '🐶', description: 'Friendly & Outgoing' },
  { name: 'Dachshund', value: 'dachshund', size: 'small', image: '🌭', description: 'Playful & Devoted' },
];

const BreedFilter: React.FC<BreedFilterProps> = ({ selectedBreed, onBreedChange }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-gray-100">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
        <span className="text-2xl mr-2">🐕</span>
        Filter by Breed
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 gap-3">
        {breeds.map((breed) => (
          <button
            key={breed.value}
            onClick={() => onBreedChange(breed.value)}
            className={`p-3 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-md ${
              selectedBreed === breed.value
                ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg scale-105'
                : 'border-gray-200 hover:border-blue-300 hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50'
            }`}
          >
            <div className="text-2xl mb-1 transform transition-transform duration-200 hover:scale-110">
              {breed.image}
            </div>
            <div className="text-xs font-medium text-gray-700 mb-1">{breed.name}</div>
            <div className="text-xs text-gray-500 capitalize mb-1">{breed.size}</div>
            <div className="text-xs text-blue-600 font-medium">{breed.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BreedFilter;