import { Product } from "./app/shared/models/Product";
import { Tag } from "./app/shared/models/Tag";

export const sample_products: Product[] = [
    {
        id: '1',
        name: 'Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
        id: '2',
        name: 'Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
        id: '3',
        name: 'Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
        id: '4',
        name: 'Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
        id: '5',
        name: 'Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
        id: '6',
        name: 'Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['FastFood', 'Pizza', 'Lunch']
    },{
        id: '7',
        name: 'Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['FastFood', 'Pizza', 'Lunch']
    }
]

// set imageUrl accordingly to assets/"image-name" once exact images are available

export const sample_tags: Tag[] = [
    { name: 'All', count: 6},
    { name: 'FastFood', count: 4},
    { name: 'Pizza', count: 2},
    { name: 'Lunch', count: 3},
    { name: 'SlowFood', count: 2},
    { name: 'Hamburger', count: 1},
    { name: 'Fry', count: 1},
    { name: 'Soup', count: 1},
]