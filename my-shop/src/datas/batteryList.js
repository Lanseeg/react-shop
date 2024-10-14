import lithium from '../assets/images/lithium.jpg'
import polymer from '../assets/images/polymer.jpg'
import cr from '../assets/images/cr.jpg'
import cadmium from '../assets/images/cadmium.jpg'


export const batteryList = [
    {
        name: 'lithium-ion',
        category: 'lithium',
        id: '1ed',
        star: 5,  // Fixed star rating
        lifetime: 5,  // Fixed lifetime rating
        isSpecialOffer: true,  // Randomly chosen special offer
        cover: lithium
    },
    {
        name: 'lithium-polymer',
        category: 'lithium',
        id: '2ab',
        star: 5,  // Fixed star rating
        lifetime: 4,  // Fixed lifetime rating
        isSpecialOffer: false,
        cover: polymer  // Randomly chosen special offer
    },
    {
        name: 'nickel-cadmium',
        category: 'nickel',
        id: '3sd',
        star: 4,  // Fixed star rating
        lifetime: 5,  // Fixed lifetime rating
        isSpecialOffer: true,
        cover: cadmium  // Randomly chosen special offer
    },
    {
        name: 'nickel-metal-hydride',
        category: 'nickel',
        id: '4kk',
        star: 4,  // Fixed star rating
        lifetime: 3,  // Fixed lifetime rating
        isSpecialOffer: false,
        cover: cr  // Randomly chosen special offer
    },
    {
        name: 'lead-acid',
        category: 'lead',
        id: '5pl',
        star: 3,  // Fixed star rating
        lifetime: 3,  // Fixed lifetime rating
        isSpecialOffer: false,
        cover: cr  // Randomly chosen special offer
    },
    {
        name: 'gel-lead',
        category: 'lead',
        id: '6uo',
        star: 4,  // Fixed star rating
        lifetime: 3,  // Fixed lifetime rating
        isSpecialOffer: true,
        cover: lithium  // Randomly chosen special offer
    },
    {
        name: 'sodium-sulfur',
        category: 'sodium',
        id: '7ie',
        star: 3,  // Fixed star rating
        lifetime: 4,  // Fixed lifetime rating
        isSpecialOffer: true,
        cover: polymer  // Randomly chosen special offer
    },
    {
        name: 'lithium iron phosphate',
        category: 'lithium',
        id: '8fp',
        star: 3,  // Fixed star rating
        lifetime: 4,  // Fixed lifetime rating
        isSpecialOffer: false,
        cover: lithium  // Randomly chosen special offer
    },
    {
        name: 'zinc-air battery',
        category: 'zinc',
        id: '9vn',
        star: 2,  // Fixed star rating
        lifetime: 5,  // Fixed lifetime rating
        isSpecialOffer: true,
        cover: cr  // Randomly chosen special offer
    }
]
