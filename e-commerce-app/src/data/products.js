import Applewatch from "../assets/Apple-watch.png"
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
        description: "Smart watch with health tracking and fitness monitoring.",
        largeDescription: "Get meaningful insights about your health, just by wearing your Apple Watch SE 3. A new wrist temperature sensor enables deeper insights in the Vitals app and retrospective ovulation estimates in the Cycle Tracking app. You’ll also receive a daily sleep score and possible sleep apnoea notifications. It’s never been easier to live in the know."
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
        description: "Wireless Sony headphones with powerful bass, long battery life, and comfortable over-ear design for everyday listening.",
        largeDescription: "The Best Noise Cancelling - Equipped with the newly evolved HD Noise Cancelling Processor QN3, marking the first upgrade in seven years. Noise cancelling, sound quality, and call quality have significantly advance.Multi-Noise Sensor Technology - With the enhanced processing power of the HD Noise Cancelling Processor QN3 and 12 strategically placed microphones, our Multi-Noise Sensor Technology has significantly evolved noise cancelling performance"
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
        description: "Apple iPhone 11 featuring a powerful A13 Bionic chip, dual camera system, and smooth performance for everyday use.",
        largeDescription: "The iPhone 11 is a 2019-released smartphone featuring a 6.1-inch Liquid Retina HD display, A13 Bionic chip, and dual 12MP rear cameras with Night mode. Primarily available as a budget-friendly pre-owned device in 2026, it offers 4GB RAM, Face ID, and decent performance for daily tasks but lacks 5G, modern 120Hz displays, and Apple Intelligence support"
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
        description: "Special edition red iPhone 11 with advanced camera capabilities, vibrant display, and reliable battery life.",
        largeDescription: "The iPhone 11 is a 2019-released smartphone featuring a 6.1-inch Liquid Retina HD display, A13 Bionic chip, and dual 12MP rear cameras with Night mode. Primarily available as a budget-friendly pre-owned device in 2026, it offers 4GB RAM, Face ID, and decent performance for daily tasks but lacks 5G, modern 120Hz displays, and Apple Intelligence support"
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
        description: "Apple MacBook laptop designed for productivity with a sleek design, powerful performance, and long battery life.",
        largeDescription: "MacBooks are Apple's premium laptops, renowned for their sleek aluminum design, high-performance Apple Silicon chips (M4/M5 series), long battery life (up to 24 hours), and the macOS operating system"
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
        description: "Samsung Galaxy Note21 with high performance hardware, stunning display, and productivity features.",
        largeDescription: "The Samsung Galaxy S21 is a series of high-end Android-based smartphones developed, marketed, and manufactured by Samsung Electronics as part of its flagship Galaxy S series. They collectively serve as the successor to the Galaxy S20 series."
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
        description: "Premium Samsung Galaxy S21 Pro smartphone with powerful processor and professional grade camera.",
        largeDescription: "The Samsung Galaxy S21 is a series of high-end Android-based smartphones developed, marketed, and manufactured by Samsung Electronics as part of its flagship Galaxy S series. They collectively serve as the successor to the Galaxy S20 series."
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
      description: "Samsung Galaxy S21 smartphone with modern design, high resolution display, and fast performance.",
        largeDescription: "The Samsung Galaxy S21 is a series of high-end Android-based smartphones developed, marketed, and manufactured by Samsung Electronics as part of its flagship Galaxy S series. They collectively serve as the successor to the Galaxy S20 series."
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
       description: "Elegant white iPhone 11 with smooth performance, strong battery life, and advanced camera technology.",
        largeDescription: "The iPhone 11 is a 2019-released smartphone featuring a 6.1-inch Liquid Retina HD display, A13 Bionic chip, and dual 12MP rear cameras with Night mode. Primarily available as a budget-friendly pre-owned device in 2026, it offers 4GB RAM, Face ID, and decent performance for daily tasks but lacks 5G, modern 120Hz displays, and Apple Intelligence support"
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
        description: "Apple iPhone 13 Pro featuring improved camera system, powerful performance, and stunning display quality.",
        largeDescription: ""
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
       description: "High performance iPhone 13 Pro with sleek black finish and advanced camera technology.",
        largeDescription: "This is the iPhone 13 Pro, which was introduced by Apple CEO Tim Cook at Apple's 'California streaming' event on 14 September 2021. It was made available for preorder on 17 September 2021 and for purchase on 24 September 2021. It uses the board configuration D63AP and the firmware identifier is iPhone14,2."
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
        description: "Stylish blue iPhone 13 Pro designed for performance, photography, and premium user experience.",
        largeDescription: "This is the iPhone 13 Pro, which was introduced by Apple CEO Tim Cook at Apple's 'California streaming' event on 14 September 2021. It was made available for preorder on 17 September 2021 and for purchase on 24 September 2021. It uses the board configuration D63AP and the firmware identifier is iPhone14,2."
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
        description: "Apple iPhone 12 Pro featuring a modern design, powerful processor, and advanced photography features.",
        largeDescription: "The iPhone 12 was introduced by Apple CEO Tim Cook at Apple's 'Hi, Speed' event on 13 October 2020.It was made available for preorder on 16 October 2020 and for purchase on 23 October 2020. It uses the board configuration D53gAP and the firmware identifier is iPhone13,2."
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
        description: "Classic black iPhone 11 with smooth performance, strong battery life, and reliable everyday usability.",
        largeDescription: "The iPhone 11 is a 2019-released smartphone featuring a 6.1-inch Liquid Retina HD display, A13 Bionic chip, and dual 12MP rear cameras with Night mode. Primarily available as a budget-friendly pre-owned device in 2026, it offers 4GB RAM, Face ID, and decent performance for daily tasks but lacks 5G, modern 120Hz displays, and Apple Intelligence support"
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
        description: "Dell XPS 13 laptop with ultra-thin design, powerful performance, and high resolution display.",
        largeDescription: "The Dell XPS 13 is a premier, ultra-lightweight 13.4-inch laptop featuring modern Intel Core Ultra or Qualcomm Snapdragon X Elite processors, offering high-end performance, long battery life, and superior AI capabilities. It boasts a sleek, durable design with stunning OLED/FHD+ InfinityEdge displays and an advanced, quiet cooling system"
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
        description: "Premium Dell XPS 13 laptop designed for productivity with powerful performance and elegant design.",
        largeDescription: "The Dell XPS 13 is a premier, ultra-lightweight 13.4-inch laptop featuring modern Intel Core Ultra or Qualcomm Snapdragon X Elite processors, offering high-end performance, long battery life, and superior AI capabilities. It boasts a sleek, durable design with stunning OLED/FHD+ InfinityEdge displays and an advanced, quiet cooling system"
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
        description: "Navy blue iphone 12 Pro with smooth effective performance.",
        largeDescription: "The iPhone 12 was introduced by Apple CEO Tim Cook at Apple's 'Hi, Speed' event on 13 October 2020.It was made available for preorder on 16 October 2020 and for purchase on 23 October 2020. It uses the board configuration D53gAP and the firmware identifier is iPhone13,2."
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
        description: "Premium Dell XPS 15 laptop designed for productivity with powerful performance and elegant design.",
        largeDescription: "The Dell XPS 13 is a premier, ultra-lightweight 13.4-inch laptop featuring modern Intel Core Ultra or Qualcomm Snapdragon X Elite processors, offering high-end performance, long battery life, and superior AI capabilities. It boasts a sleek, durable design with stunning OLED/FHD+ InfinityEdge displays and an advanced, quiet cooling system"
    },



]

export default products