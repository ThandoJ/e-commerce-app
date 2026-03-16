import Applewatch from "../assets/apple-watch.png"
import Headphones from "../assets/Headphones.png"
import Iphone11 from "../assets/Iphone11.png"
import RedIphone11 from "../assets/Red-Iphone11.png"
import Macbook from "../assets/Macbook.png"
import SamsungNote21 from "../assets/Samsung-Note21.png"
import SamsungS21Pro from "../assets/Samsung-S21-Pro.png"
import SamsungS21 from "../assets/Samsung-S21.png"
import Whiteiphone11 from "../assets/White-iphone11.png"
import Iphone13Pro03 from "../assets/Iphone-13-Pro-03.png"
import Iphone13Pro02 from "../assets/Iphone-13-Pro-02.png"
import Iphone13Pro01 from "../assets/Iphone-13-Pro-01.png"
import Iphone12Pro01 from "../assets/Iphone-12-Pro-01.png"
import Iphone11B from "../assets/Iphone11B.png"
import DellXPS13White from "../assets/Dell-XPS-13-White.png"
import DellXPS13Black from "../assets/Dell-XPS-13-Black.png"
import DellXPS15Black from "../assets/Dell-XPS-15-Black.png"
import Iphone12Pro03 from "../assets/Iphone-12-Pro-03.png"


const products = [

    {
        id: 1,
        name: "Apple Watch",
        subtitle: "Series 5 SE",
        price: 529.99,
        image: Applewatch,
        brand: "Apple",
        category: "Smart Watch",
        rating: 4.8,
        stock: 12,
        description: "Smart watch with health tracking and fitness monitoring."
    },

    {
        id: 2,
        name: "Sony ZX330BT",
        subtitle: "Light Grey",
        price: 39.99,
        image: Headphones,
        brand: "Sony",
        category: "Headphones",
        rating: 4.8,
        stock: 22,
        description: "Wireless Sony headphones with powerful bass, long battery life, and comfortable over-ear design for everyday listening."
    },

    {
        id: 3,
        name: "Iphone 11",
        subtitle: "Subway Blue",
        price: 619.99,
        image: Iphone11,
        brand: "Apple",
        category: "Mobile phone",
        rating: 4.9,
        stock: 10,
        description: "Apple iPhone 11 featuring a powerful A13 Bionic chip, dual camera system, and smooth performance for everyday use."
    },

    {
        id: 4,
        name: "Red Iphone 11",
        subtitle: "Serious Red",
        price: 619.99,
        image: RedIphone11,
        brand: "Apple",
        category: "Mobile phone",
        rating: 4.7,
        stock: 12,
        description: "Special edition red iPhone 11 with advanced camera capabilities, vibrant display, and reliable battery life."
    },

    {
        id: 5,
        name: "Macbook",
        subtitle: "Serious Black",
        price: 619.99,
        image: Macbook,
        brand: "Apple",
        category: "Laptop",
        rating: 4.9,
        stock: 12,
        description: "Apple MacBook laptop designed for productivity with a sleek design, powerful performance, and long battery life."
    },

    {
        id: 6,
        name: "SamsungNote21",
        subtitle: "Tiatanic",
        price: 619.99,
        image: SamsungNote21,
        brand: "Samsung",
        category: "Mobile phone",
        rating: 4.8,
        stock: 8,
        description: "Samsung Galaxy Note21 with high performance hardware, stunning display, and productivity features."
    },

    {
        id: 7,
        name: "SamsungS21Pro",
        subtitle: "Serious Black",
        price: 619.99,
        image: SamsungS21Pro,
        brand: "Samsung",
        category: "Mobile phone",
        rating: 4.7,
        stock: 6,
        description: "Premium Samsung Galaxy S21 Pro smartphone with powerful processor and professional grade camera."
    },

    {
        id: 8,
        name: "SamsungS21",
        subtitle: "Lavender",
        price: 619.99,
        image: SamsungS21,
        brand: "Samsung",
        category: "Mobile phone",
        rating: 4.6,
        stock: 15,
      description: "Samsung Galaxy S21 smartphone with modern design, high resolution display, and fast performance."
    },

    {
        id: 9,
        name: "Iphone 11",
        subtitle: "Milky White",
        price: 619.99,
        image: Whiteiphone11,
        brand: "Apple",
        category: "Mobile phone",
        rating: 4.9,
        stock: 12,
       description: "Elegant white iPhone 11 with smooth performance, strong battery life, and advanced camera technology."
    },

    {
        id: 10,
        name: "Iphone 13 Pro",
        subtitle: "White",
        price: 619.99,
        image: Iphone13Pro03,
        brand: "Apple",
        category: "Mobile phone",
        rating: 4.8,
        stock: 16,
        description: "Apple iPhone 13 Pro featuring improved camera system, powerful performance, and stunning display quality."
    },

    {
        id: 11,
        name: "Iphone 13 Pro",
        subtitle: "Serious Black",
        price: 619.99,
        image: Iphone13Pro02,
        brand: "Apple",
        category: "Mobile phone",
        rating: 4.8,
        stock: 14,
       description: "High performance iPhone 13 Pro with sleek black finish and advanced camera technology."
    },

    {
        id: 12,
        name: "Iphone 13 Pro",
        subtitle: "Baby blue",
        price: 619.99,
        image: Iphone13Pro01,
        brand: "Apple",
        category: "Mobile phone",
        rating: 4.9,
        stock: 8,
        description: "Stylish blue iPhone 13 Pro designed for performance, photography, and premium user experience."
    },

    {
        id: 13,
        name: "Iphone 12 Pro",
        subtitle: "Light Pink",
        price: 619.99,
        image: Iphone12Pro01,
        brand: "Apple",
        category: "Mobile phone",
        rating: 4.8,
        stock: 11,
        description: "Apple iPhone 12 Pro featuring a modern design, powerful processor, and advanced photography features."
    },

    {
        id: 14,
        name: "Iphone 11",
        subtitle: " Night Black",
        price: 619.99,
        image: Iphone11B,
        brand: "Apple",
        category: "Mobile phone",
        rating: 4.4,
        stock: 23,
        description: "Classic black iPhone 11 with smooth performance, strong battery life, and reliable everyday usability."
    },

    {
        id: 15,
        name: "Dell XPS 13",
        subtitle: "White",
        price: 1800.99,
        image: DellXPS13White,
        brand: "Dell",
        category: "Laptop",
        rating: 4.7,
        stock: 9,
        description: "Dell XPS 13 laptop with ultra-thin design, powerful performance, and high resolution display."
    },

    {
        id: 16,
        name: "Dell XPS 13",
        subtitle: "Black",
        price: 1799.99,
        image: DellXPS13Black,
        brand: "Dell",
        category: "Laptop",
        rating: 4.8,
        stock: 4,
        description: "Premium Dell XPS 13 laptop designed for productivity with powerful performance and elegant design."
    },

    {
        id: 17,
        name: "Iphone 12 Pro",
        subtitle: "Navy-Blue",
        price: 619.99,
        image: Iphone12Pro03,
        brand: "Apple",
        category: "Mobile phone",
        rating: 4.8,
        stock: 14,
        description: "Navy blue iphone 12 Pro with smooth effective performance."
    },

    {
        id: 18,
        name: "Dell XPS 15",
        subtitle: "Black",
        price: 1999.99,
        image: DellXPS15Black,
        brand: "Dell",
        category: "Laptop",
        rating: 4.8,
        stock: 4,
        description: "Premium Dell XPS 15 laptop designed for productivity with powerful performance and elegant design."
    },



]

export default products