export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  breed: string;
  size: string;
  description: string;
  inStock: boolean;
  category: 'food' | 'collars' | 'medications' | 'accessories';
  brand: string;
  rating: number;
  reviews: number;
  features: string[];
  ageGroup: string;
}

export const products: Product[] = [
  // Food Products - Indian Brands & Preferences
  {
    id: 1,
    name: 'Pedigree Adult Large Breed - Chicken & Rice',
    price: 1299,
    originalPrice: 1499,
    image: 'https://images.pexels.com/photos/19275022/pexels-photo-19275022.jpeg',
    breed: 'labrador',
    size: 'large',
    description: 'Complete nutrition for large breed dogs with real chicken and rice. Fortified with vitamins and minerals for healthy bones and joints.',
    inStock: true,
    category: 'food',
    brand: 'Pedigree',
    rating: 4.5,
    reviews: 1250,
    features: ['High Protein', 'Calcium Rich', 'Omega 3 & 6', 'No Artificial Colors'],
    ageGroup: 'adult'
  },
  {
    id: 2,
    name: 'Royal Canin Pug Adult - Breed Specific',
    price: 2199,
    originalPrice: 2399,
    image: 'https://images.pexels.com/photos/19275022/pexels-photo-19275022.jpeg',
    breed: 'pug',
    size: 'small',
    description: 'Specially designed kibble shape for Pugs flat face. Supports healthy skin and reduces digestive sensitivity.',
    inStock: true,
    category: 'food',
    brand: 'Royal Canin',
    rating: 4.8,
    reviews: 890,
    features: ['Flat Face Friendly', 'Skin Support', 'Easy Digestion', 'Weight Management'],
    ageGroup: 'adult'
  },
  {
    id: 3,
    name: 'Drools Focus Puppy - Chicken & Egg',
    price: 899,
    originalPrice: 1099,
    image: 'https://images.pexels.com/photos/19275022/pexels-photo-19275022.jpeg',
    breed: 'all',
    size: 'all',
    description: 'Indian premium puppy food with chicken and egg protein. Perfect for growing puppies of all breeds.',
    inStock: true,
    category: 'food',
    brand: 'Drools',
    rating: 4.3,
    reviews: 2100,
    features: ['DHA for Brain', 'High Protein', 'Calcium & Phosphorus', 'Made in India'],
    ageGroup: 'puppy'
  },
  {
    id: 4,
    name: 'Farmina N&D Quinoa - German Shepherd Formula',
    price: 3299,
    originalPrice: 3599,
    image: 'https://images.pexels.com/photos/19275022/pexels-photo-19275022.jpeg',
    breed: 'german-shepherd',
    size: 'large',
    description: 'Premium grain-free formula with quinoa, perfect for German Shepherds active lifestyle and joint health.',
    inStock: true,
    category: 'food',
    brand: 'Farmina',
    rating: 4.7,
    reviews: 650,
    features: ['Grain Free', 'Joint Support', 'High Energy', 'Natural Ingredients'],
    ageGroup: 'adult'
  },
  {
    id: 5,
    name: 'Chappi Chicken & Rice - Medium Breeds',
    price: 649,
    originalPrice: 749,
    image: 'https://images.pexels.com/photos/19275022/pexels-photo-19275022.jpeg',
    breed: 'beagle',
    size: 'medium',
    description: 'Affordable and nutritious food for medium breed dogs. Popular choice among Indian pet parents.',
    inStock: true,
    category: 'food',
    brand: 'Chappi',
    rating: 4.1,
    reviews: 3200,
    features: ['Affordable', 'Complete Nutrition', 'Chicken Flavor', 'Trusted Brand'],
    ageGroup: 'adult'
  },

  // Collar Products - Indian Styles
  {
    id: 11,
    name: 'Pawsome Heavy Duty Leather Collar - Large',
    price: 899,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg',
    breed: 'labrador',
    size: 'large',
    description: 'Handcrafted genuine leather collar with brass fittings. Perfect for strong large breeds.',
    inStock: true,
    category: 'collars',
    brand: 'Pawsome',
    rating: 4.6,
    reviews: 450,
    features: ['Genuine Leather', 'Brass Hardware', 'Adjustable', 'Handcrafted'],
    ageGroup: 'adult'
  },
  {
    id: 12,
    name: 'PetSafe Soft Padded Collar - Pug Special',
    price: 599,
    originalPrice: 799,
    image: 'https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg',
    breed: 'pug',
    size: 'small',
    description: 'Extra soft padded collar designed for flat-faced breeds. Prevents neck irritation.',
    inStock: true,
    category: 'collars',
    brand: 'PetSafe',
    rating: 4.4,
    reviews: 320,
    features: ['Soft Padding', 'Flat Face Friendly', 'Breathable', 'Anti-Chafe'],
    ageGroup: 'all'
  },
  {
    id: 13,
    name: 'Reflective Training Collar - German Shepherd',
    price: 1299,
    originalPrice: 1499,
    image: 'https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg',
    breed: 'german-shepherd',
    size: 'large',
    description: 'Professional training collar with reflective strips for night walks. Perfect for working breeds.',
    inStock: true,
    category: 'collars',
    brand: 'K9 Pro',
    rating: 4.8,
    reviews: 280,
    features: ['Reflective Strips', 'Training Aid', 'Durable Nylon', 'Night Safety'],
    ageGroup: 'adult'
  },
  {
    id: 14,
    name: 'Designer Ethnic Collar - Rajasthani Style',
    price: 1599,
    originalPrice: 1899,
    image: 'https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg',
    breed: 'all',
    size: 'medium',
    description: 'Beautiful handcrafted collar with traditional Indian mirror work and embroidery.',
    inStock: true,
    category: 'collars',
    brand: 'Desi Pets',
    rating: 4.5,
    reviews: 180,
    features: ['Mirror Work', 'Handcrafted', 'Traditional Design', 'Festival Special'],
    ageGroup: 'adult'
  },

  // Medication Products - Indian Climate Specific
  {
    id: 21,
    name: 'Himalaya Joint Support - Large Breeds',
    price: 1199,
    originalPrice: 1399,
    image: 'https://images.pexels.com/photos/6131684/pexels-photo-6131684.jpeg',
    breed: 'labrador',
    size: 'large',
    description: 'Ayurvedic joint support supplement from Himalaya. Perfect for large breed dogs prone to joint issues.',
    inStock: true,
    category: 'medications',
    brand: 'Himalaya',
    rating: 4.7,
    reviews: 890,
    features: ['Ayurvedic Formula', 'Joint Health', 'Natural Ingredients', 'Vet Recommended'],
    ageGroup: 'senior'
  },
  {
    id: 22,
    name: 'Breathing Aid Supplement - Flat Face Breeds',
    price: 899,
    originalPrice: 1099,
    image: 'https://images.pexels.com/photos/6131684/pexels-photo-6131684.jpeg',
    breed: 'pug',
    size: 'small',
    description: 'Herbal respiratory support for brachycephalic breeds. Helps with breathing difficulties in Indian heat.',
    inStock: true,
    category: 'medications',
    brand: 'VetCare',
    rating: 4.3,
    reviews: 560,
    features: ['Respiratory Support', 'Heat Relief', 'Herbal Formula', 'Flat Face Specific'],
    ageGroup: 'all'
  },
  {
    id: 23,
    name: 'Summer Coat Protection - Golden Retriever',
    price: 1499,
    originalPrice: 1699,
    image: 'https://images.pexels.com/photos/6131684/pexels-photo-6131684.jpeg',
    breed: 'golden-retriever',
    size: 'large',
    description: 'Special supplement for maintaining healthy coat during Indian summers. Prevents heat rashes.',
    inStock: true,
    category: 'medications',
    brand: 'PetHealth',
    rating: 4.6,
    reviews: 340,
    features: ['Summer Care', 'Coat Health', 'Heat Protection', 'Skin Soothing'],
    ageGroup: 'adult'
  },
  {
    id: 24,
    name: 'Tick & Flea Prevention - Monsoon Special',
    price: 799,
    originalPrice: 999,
    image: 'https://images.pexels.com/photos/6131684/pexels-photo-6131684.jpeg',
    breed: 'all',
    size: 'all',
    description: 'Essential protection during Indian monsoon season. Natural tick and flea repellent.',
    inStock: true,
    category: 'medications',
    brand: 'Monsoon Care',
    rating: 4.4,
    reviews: 1200,
    features: ['Monsoon Protection', 'Natural Repellent', 'All Breeds', 'Long Lasting'],
    ageGroup: 'all'
  },

  // Accessory Products - Indian Climate & Culture
  {
    id: 31,
    name: 'Cooling Vest - Summer Essential',
    price: 1899,
    originalPrice: 2199,
    image: 'https://images.pexels.com/photos/4587996/pexels-photo-4587996.jpeg',
    breed: 'labrador',
    size: 'large',
    description: 'Cooling vest for hot Indian summers. Keeps your dog comfortable during walks and outdoor activities.',
    inStock: true,
    category: 'accessories',
    brand: 'CoolPet',
    rating: 4.8,
    reviews: 670,
    features: ['Cooling Technology', 'Summer Essential', 'Breathable Fabric', 'Easy Wash'],
    ageGroup: 'adult'
  },
  {
    id: 32,
    name: 'Monsoon Raincoat - Waterproof',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.pexels.com/photos/4587996/pexels-photo-4587996.jpeg',
    breed: 'pug',
    size: 'small',
    description: 'Waterproof raincoat perfect for Indian monsoons. Keeps your pet dry and comfortable.',
    inStock: true,
    category: 'accessories',
    brand: 'RainShield',
    rating: 4.5,
    reviews: 450,
    features: ['Waterproof', 'Monsoon Ready', 'Reflective Strips', 'Easy Wear'],
    ageGroup: 'all'
  },
  {
    id: 33,
    name: 'Traditional Bandana - Festival Collection',
    price: 399,
    originalPrice: 599,
    image: 'https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg',
    breed: 'all',
    size: 'all',
    description: 'Beautiful traditional bandanas for Indian festivals. Available in various regional designs.',
    inStock: true,
    category: 'accessories',
    brand: 'Festival Pets',
    rating: 4.3,
    reviews: 890,
    features: ['Festival Special', 'Traditional Designs', 'Soft Cotton', 'Washable'],
    ageGroup: 'all'
  },
  {
    id: 34,
    name: 'Interactive Puzzle Feeder - Mental Stimulation',
    price: 1599,
    originalPrice: 1899,
    image: 'https://images.pexels.com/photos/4588019/pexels-photo-4588019.jpeg',
    breed: 'german-shepherd',
    size: 'large',
    description: 'Mental stimulation toy perfect for intelligent breeds. Slows down eating and provides entertainment.',
    inStock: true,
    category: 'accessories',
    brand: 'BrainToys',
    rating: 4.7,
    reviews: 320,
    features: ['Mental Stimulation', 'Slow Feeding', 'Durable Plastic', 'Easy Clean'],
    ageGroup: 'adult'
  },
  {
    id: 35,
    name: 'Orthopedic Bed - Senior Dogs',
    price: 3999,
    originalPrice: 4599,
    image: 'https://images.pexels.com/photos/4587992/pexels-photo-4587992.jpeg',
    breed: 'labrador',
    size: 'large',
    description: 'Memory foam bed for senior large breed dogs. Provides joint support and comfort.',
    inStock: true,
    category: 'accessories',
    brand: 'ComfortRest',
    rating: 4.9,
    reviews: 180,
    features: ['Memory Foam', 'Joint Support', 'Washable Cover', 'Senior Care'],
    ageGroup: 'senior'
  },
  {
    id: 36,
    name: 'Elevated Food Bowl - Ergonomic Design',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.pexels.com/photos/4587994/pexels-photo-4587994.jpeg',
    breed: 'german-shepherd',
    size: 'large',
    description: 'Elevated feeding station for large breeds. Promotes better digestion and reduces neck strain.',
    inStock: true,
    category: 'accessories',
    brand: 'ErgoFeed',
    rating: 4.6,
    reviews: 290,
    features: ['Elevated Design', 'Better Digestion', 'Stainless Steel', 'Non-Slip Base'],
    ageGroup: 'adult'
  },
  {
    id: 37,
    name: 'Chew Toy Set - Teething Puppies',
    price: 899,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/4588019/pexels-photo-4588019.jpeg',
    breed: 'all',
    size: 'all',
    description: 'Safe chew toy set for teething puppies. Made from natural rubber and rope.',
    inStock: true,
    category: 'accessories',
    brand: 'PuppyPlay',
    rating: 4.4,
    reviews: 1100,
    features: ['Teething Relief', 'Natural Materials', 'Safe Design', 'Multiple Textures'],
    ageGroup: 'puppy'
  },
  {
    id: 38,
    name: 'GPS Collar Tracker - Smart Technology',
    price: 8999,
    originalPrice: 9999,
    image: 'https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg',
    breed: 'all',
    size: 'medium',
    description: 'Smart GPS collar for tracking your pets location. Perfect for Indian urban environments.',
    inStock: true,
    category: 'accessories',
    brand: 'SmartPet',
    rating: 4.5,
    reviews: 150,
    features: ['GPS Tracking', 'Mobile App', 'Long Battery', 'Waterproof'],
    ageGroup: 'adult'
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductsByBreed = (breed: string, category?: string) => {
  let filtered = products;
  
  if (breed !== 'all') {
    filtered = filtered.filter(product => product.breed === breed || product.breed === 'all');
  }
  
  if (category) {
    filtered = filtered.filter(product => product.category === category);
  }
  
  return filtered;
};