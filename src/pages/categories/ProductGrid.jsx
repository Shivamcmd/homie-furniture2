// ProductGrid.jsx
import { Heart , Clock} from "lucide-react";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import bed1 from "../../Assets/products/bed/bedd.jpg";
import bed2 from "../../Assets/products/bed/download (1).jpg";
import bed3 from "../../Assets/products/bed/download (2).jpg";
import bed4 from "../../Assets/products/bed/download (3).jpg";
import bed5 from "../../Assets/products/bed/download (4).jpg";
import bed6 from "../../Assets/products/bed/download (5).jpg";
import bed7 from "../../Assets/products/bed/download (6).jpg";
import bed8 from "../../Assets/products/bed/download (7).jpg";
import bed9 from "../../Assets/products/bed/download (8).jpg";
import bed10 from "../../Assets/products/bed/download (9).jpg";
import bed11 from "../../Assets/products/bed/download.jpg";
import bed12 from "../../Assets/products/bed/images (1).jpg";
import bed13 from "../../Assets/products/bed/images (2).jpg";
import bed14 from "../../Assets/products/bed/images.jpg";
import bed15 from "../../Assets/products/bed/pexels-rachel-claire-4577673.jpg";

import sofa1 from "../../Assets/products/Sofa/download (1).jpg";
import sofa2 from "../../Assets/products/Sofa/download (2).jpg";
import sofa3 from "../../Assets/products/Sofa/download (8).jpg";
import sofa4 from "../../Assets/products/Sofa/download (4).jpg";
import sofa5 from "../../Assets/products/Sofa/download (5).jpg";
import sofa6 from "../../Assets/products/Sofa/download (6).jpg";
import sofa7 from "../../Assets/products/Sofa/download (7).jpg";
import sofa8 from "../../Assets/products/Sofa/download (8).jpg";
import sofa9 from "../../Assets/products/Sofa/download (9).jpg";
import sofa10 from "../../Assets/products/Sofa/download.jpg";
import sofa11 from "../../Assets/products/Sofa/images (1).jpg";
import sofa12 from "../../Assets/products/Sofa/images (2).jpg";
import sofa13 from "../../Assets/products/Sofa/images (3).jpg";
import sofa14 from "../../Assets/products/Sofa/images.jpg";
import sofa15 from "../../Assets/products/Sofa/sofaaa.jpg";

import dresser1 from "../../Assets/products/dressers/download (1).jpg";
import dresser2 from "../../Assets/products/dressers/download (2).jpg";
import dresser3 from "../../Assets/products/dressers/download (3).jpg";
import dresser4 from "../../Assets/products/dressers/download (4).jpg";
import dresser5 from "../../Assets/products/dressers/download (5).jpg";
import dresser6 from "../../Assets/products/dressers/download (6).jpg";
import dresser7 from "../../Assets/products/dressers/download (7).jpg";
import dresser8 from "../../Assets/products/dressers/download (8).jpg";
import dresser9 from "../../Assets/products/dressers/download (9).jpg";
import dresser10 from "../../Assets/products/dressers/download.jpg";

import mattress1 from "../../Assets/products/mattresses/download (1).jpg";
import mattress2 from "../../Assets/products/mattresses/download (10).jpg";
import mattress3 from "../../Assets/products/mattresses/download.jpg";
import mattress4 from "../../Assets/products/mattresses/images (1).jpg";
import mattress5 from "../../Assets/products/mattresses/images (2).jpg";
import mattress6 from "../../Assets/products/mattresses/images (3).jpg";
import mattress7 from "../../Assets/products/mattresses/images (4).jpg";
import mattress8 from "../../Assets/products/mattresses/images (5).jpg";
import mattress9 from "../../Assets/products/mattresses/images (6).jpg";
import mattress10 from "../../Assets/products/mattresses/images (7).jpg";
import mattress11 from "../../Assets/products/mattresses/images (8).jpg";
import mattress12 from "../../Assets/products/mattresses/images (9).jpg";
import mattress13 from "../../Assets/products/mattresses/images.jpg";
import mattress14 from "../../Assets/products/mattresses/images (2).jpg";
import mattress15 from "../../Assets/products/mattresses/images (3).jpg";
import mattress16 from "../../Assets/products/mattresses/images (4).jpg";
import mattress17 from "../../Assets/products/mattresses/images (5).jpg";
import mattress18 from "../../Assets/products/mattresses/images (6).jpg";
import mattress19 from "../../Assets/products/mattresses/images (7).jpg";
import mattress20 from "../../Assets/products/mattresses/images (8).jpg";


import recliner1 from "../../Assets/products/recliner/download (1).jpg";
import recliner2 from "../../Assets/products/recliner/download (2).jpg";
import recliner3 from "../../Assets/products/recliner/download (3).jpg";
import recliner4 from "../../Assets/products/recliner/download (4).jpg";
import recliner5 from "../../Assets/products/recliner/download (5).jpg";
import recliner6 from "../../Assets/products/recliner/download (6).jpg";
import recliner7 from "../../Assets/products/recliner/download.jpg";
import recliner8 from "../../Assets/products/recliner/images (1).jpg";
import recliner9 from "../../Assets/products/recliner/images (2).jpg";
import recliner10 from "../../Assets/products/recliner/images (3).jpg";
import recliner11 from "../../Assets/products/recliner/images (4).jpg";
import recliner12 from "../../Assets/products/recliner/images (9).jpg";
import recliner13 from "../../Assets/products/recliner/images.jpg";
import recliner14 from "../../Assets/products/recliner/images.jpg";
import recliner15 from "../../Assets/products/recliner/reclinerss.jpg";
import recliner16 from "../../Assets/products/recliner/download (4).jpg";
import recliner17 from "../../Assets/products/recliner/download (5).jpg";
import recliner18 from "../../Assets/products/recliner/download (6).jpg";
import recliner19 from "../../Assets/products/recliner/images (2).jpg";
import recliner20 from "../../Assets/products/recliner/download (6).jpg";


import dining1 from "../../Assets/products/dining/dinning.jpg";
import dining2 from "../../Assets/products/dining/download (1).jpg";
import dining3 from "../../Assets/products/dining/download (10).jpg";
import dining4 from "../../Assets/products/dining/download (2).jpg";
import dining5 from "../../Assets/products/dining/download (3).jpg";
import dining6 from "../../Assets/products/dining/images (1).jpg";
import dining7 from "../../Assets/products/dining/images (2).jpg";
import dining8 from "../../Assets/products/dining/images (3).jpg";
import dining9 from "../../Assets/products/dining/images (4).jpg";
import dining10 from "../../Assets/products/dining/images (5).jpg";
import dining11 from "../../Assets/products/dining/images (6).jpg";
import dining12 from "../../Assets/products/dining/images (7).jpg";
import dining13 from "../../Assets/products/dining/images (8).jpg";
import dining14 from "../../Assets/products/dining/images (9).jpg";
import dining15 from "../../Assets/products/dining/images.jpg";
import dining16 from "../../Assets/products/dining/images (1).jpg";
import dining17 from "../../Assets/products/dining/images (2).jpg";
import dining18 from "../../Assets/products/dining/images (3).jpg";
import dining19 from "../../Assets/products/dining/images (4).jpg";
import dining20 from "../../Assets/products/dining/images (5).jpg";


import officechair1 from "../../Assets/products/officechair/download (1).jpg";
import officechair2 from "../../Assets/products/officechair/download (2).jpg";
import officechair3 from "../../Assets/products/officechair/download (2)jgj.jpg";
import officechair4 from "../../Assets/products/officechair/download (3).jpg";
import officechair5 from "../../Assets/products/officechair/download (4).jpg";
import officechair6 from "../../Assets/products/officechair/download (5).jpg";
import officechair7 from "../../Assets/products/officechair/download (6).jpg";
import officechair8 from "../../Assets/products/officechair/download (7).jpg";
import officechair9 from "../../Assets/products/officechair/download (8).jpg";
import officechair10 from "../../Assets/products/officechair/download.jpg";
import officechair11 from "../../Assets/products/officechair/images (1).jpg";
import officechair12 from "../../Assets/products/officechair/images (2).jpg";
import officechair13 from "../../Assets/products/officechair/images (3).jpg";
import officechair14 from "../../Assets/products/officechair/images.jpg";
import officechair15 from "../../Assets/products/officechair/office chairss.jpg";
import officechair16 from "../../Assets/products/officechair/download (2).jpg";
import officechair17 from "../../Assets/products/officechair/download (6).jpg";
import officechair18 from "../../Assets/products/officechair/download (7).jpg";
import officechair19 from "../../Assets/products/officechair/download (8).jpg";
import officechair20 from "../../Assets/products/officechair/download.jpg";


import tvunit1 from "../../Assets/products/tvunit/download (1).jpg";
import tvunit2 from "../../Assets/products/tvunit/download (2).jpg";
import tvunit3 from "../../Assets/products/tvunit/download (3).jpg";
import tvunit4 from "../../Assets/products/tvunit/download (4).jpg";
import tvunit5 from "../../Assets/products/tvunit/download (5).jpg";
import tvunit6 from "../../Assets/products/tvunit/download (6).jpg";
import tvunit7 from "../../Assets/products/tvunit/download (7).jpg";
import tvunit8 from "../../Assets/products/tvunit/download (8).jpg";
import tvunit9 from "../../Assets/products/tvunit/download.jpg";
import tvunit10 from "../../Assets/products/tvunit/images (1).jpg";
import tvunit11 from "../../Assets/products/tvunit/images (10).jpg";
import tvunit12 from "../../Assets/products/tvunit/images (2).jpg";
import tvunit13 from "../../Assets/products/tvunit/images (3).jpg";
import tvunit14 from "../../Assets/products/tvunit/images (4).jpg";
import tvunit15 from "../../Assets/products/tvunit/images (5).jpg";
import tvunit16 from "../../Assets/products/tvunit/images (6).jpg";
import tvunit17 from "../../Assets/products/tvunit/images (7).jpg";
import tvunit18 from "../../Assets/products/tvunit/images (8).jpg";
import tvunit19 from "../../Assets/products/tvunit/images (9).jpg";
import tvunit20 from "../../Assets/products/tvunit/images.jpg";

// import wardrobe1 from "../../Assets/products/wardrobe/download (1).jpg";
// import wardrobe2 from "../../Assets/products/wardrobe/download (2).jpg";
// import wardrobe3 from "../../Assets/products/wardrobe/download (3).jpg";
// import wardrobe4 from "../../Assets/products/wardrobe/download (4).jpg";
// import wardrobe5 from "../../Assets/products/wardrobe/download (5).jpg";
// import wardrobe6 from "../../Assets/products/wardrobe/download (6).jpg";
// import wardrobe7 from "../../Assets/products/wardrobe/download (7).jpg";
// import wardrobe8 from "../../Assets/products/wardrobe/download (8).jpg";
// import wardrobe9 from "../../Assets/products/wardrobe/download.jpg";
// import wardrobe10 from "../../Assets/products/wardrobe/images (1).jpg";
// import wardrobe11 from "../../Assets/products/wardrobe/images (10).jpg";
// import wardrobe12 from "../../Assets/products/wardrobe/images (2).jpg";
// import wardrobe13 from "../../Assets/products/wardrobe/images (3).jpg";
// import wardrobe14 from "../../Assets/products/wardrobe/images (4).jpg";
// import wardrobe15 from "../../Assets/products/wardrobe/images (5).jpg";
// import wardrobe16 from "../../Assets/products/wardrobe/images (6).jpg";
// import wardrobe17 from "../../Assets/products/wardrobe/images (7).jpg";
// import wardrobe18 from "../../Assets/products/wardrobe/images (8).jpg";
// import wardrobe19 from "../../Assets/products/wardrobe/images (9).jpg";
// import wardrobe20 from "../../Assets/products/wardrobe/images.jpg";

import hammock1 from "../../Assets/products/hammock/download (1).jpg";
import hammock2 from "../../Assets/products/hammock/download (10).jpg";
import hammock3 from "../../Assets/products/hammock/download (2).jpg";
import hammock4 from "../../Assets/products/hammock/download (3).jpg";
import hammock5 from "../../Assets/products/hammock/download (4).jpg";
import hammock6 from "../../Assets/products/hammock/download (5).jpg";
import hammock7 from "../../Assets/products/hammock/download (6).jpg";
import hammock8 from "../../Assets/products/hammock/download.jpg";
import hammock9 from "../../Assets/products/hammock/hommockk.jpg";
import hammock10 from "../../Assets/products/hammock/images (1).jpg";
import hammock11 from "../../Assets/products/hammock/images (2).jpg";
import hammock12 from "../../Assets/products/hammock/images (3).jpg";
import hammock13 from "../../Assets/products/hammock/images (4).jpg";
import hammock14 from "../../Assets/products/hammock/images (5).jpg";
import hammock15 from "../../Assets/products/hammock/download (2).jpg";
import hammock16 from "../../Assets/products/hammock/download (5).jpg";
import hammock17 from "../../Assets/products/hammock/download (3).jpg";
import hammock18 from "../../Assets/products/hammock/download (10).jpg";
import hammock19 from "../../Assets/products/hammock/images (4).jpg";
import hammock20 from "../../Assets/products/hammock/hommockk.jpg";

const allProducts = [
  { id: 1, name: "Miller Engineered Wood Non Storage Queen Bed", category: "Beds", price: 90, image: bed1 },
  { id: 2, name: "Rian Engineered Wood Non Storage Single Bed (Sonoma Oak)", category: "Beds", price: 200, image: bed2 },
  { id: 3, name: "Taurus Engineered Wood King Size Bed With Storage", category: "Beds", price: 200, image: bed3 },
  { id: 4, name: "Aurora Low Height Single Bed (Solid Wood)", category: "Beds", price: 300, image: bed4 },
  { id: 5, name: "Hiber Solid Wood Queen Storage Bed (6x5)", category: "Beds", price: 360, image: bed5 },
  { id: 6, name: "Marley Solid Wood Stylish Queen Bed (6x5)", category: "Beds", price: 360, image: bed6 },
  { id: 7, name: "Kipper Solid Wood Stylish Single Bed (6x5)", category: "Beds", price: 360, image: bed7 },
  { id: 8, name: "Poise Wooden Single XL Bed", category: "Beds", price: 360, image: bed8 },
  { id: 9, name: "Poise Wooden Single XL Bed", category: "Beds", price: 360, image: bed9 },
  { id: 10, name: "Poise Wooden Single XL Bed", category: "Beds", price: 360, image: bed10 },
  { id: 11, name: "Poise Wooden Single XL Bed", category: "Beds", price: 360, image: bed11 },
  { id: 12, name: "Poise Wooden Single XL Bed", category: "Beds", price: 360, image: bed12 },
  { id: 13, name: "Poise Wooden Single XL Bed", category: "Beds", price: 360, image: bed13 },
  { id: 14, name: "Poise Wooden Single XL Bed", category: "Beds", price: 360, image: bed14 },
  { id: 15, name: "Poise Wooden Single XL Bed", category: "Beds", price: 360, image: bed15 },


 { id: 16, name: "Double Seater", category: "Sofa", price: 400, image: sofa1 },
{ id: 17, name: "Double Seater", category: "Sofa", price: 400, image: sofa2 },
{ id: 18, name: "Double Seater", category: "Sofa", price: 400, image: sofa3 },
{ id: 19, name: "Double Seater", category: "Sofa", price: 400, image: sofa4 },
{ id: 20, name: "Double Seater", category: "Sofa", price: 400, image: sofa5 },
{ id: 21, name: "Double Seater", category: "Sofa", price: 400, image: sofa6 },
{ id: 22, name: "Double Seater", category: "Sofa", price: 400, image: sofa7 },
{ id: 23, name: "Double Seater", category: "Sofa", price: 400, image: sofa8 },
{ id: 24, name: "Double Seater", category: "Sofa", price: 400, image: sofa9 },
{ id: 25, name: "Double Seater", category: "Sofa", price: 400, image: sofa10 },
{ id: 26, name: "Double Seater", category: "Sofa", price: 400, image: sofa11 },
{ id: 27, name: "Double Seater", category: "Sofa", price: 400, image: sofa12 },
{ id: 28, name: "Double Seater", category: "Sofa", price: 400, image: sofa13 },
{ id: 29, name: "Double Seater", category: "Sofa", price: 400, image: sofa14 },
{ id: 30, name: "Double Seater", category: "Sofa", price: 400, image: sofa15 },


{ id: 31, name: "Mirror Dresser", category: "Dressers", price: 350, image:dresser1 },
{ id: 32, name: "Classic Wooden Dresser", category: "Dressers", price: 420, image:dresser2 },
{ id: 33, name: "Modern White Dresser", category: "Dressers", price: 390 , image:dresser3},
{ id: 34, name: "Luxury Glass Dresser", category: "Dressers", price: 550, image:dresser4 },
{ id: 35, name: "Compact Corner Dresser", category: "Dressers", price: 310, image:dresser5 },
{ id: 36, name: "Vintage Oak Dresser", category: "Dressers", price: 480, image:dresser6 },
{ id: 37, name: "Minimalist Slim Dresser", category: "Dressers", price: 330, image:dresser7 },
{ id: 38, name: "Royal Carved Dresser", category: "Dressers", price: 620 , image:dresser8},
{ id: 39, name: "Matte Finish Dresser", category: "Dressers", price: 370, image:dresser9 },
{ id: 40, name: "Premium Walnut Dresser", category: "Dressers", price: 590, image:dresser10 },
  
{ id: 41, name: "Pinky Blue Mattress", category: "Mattresses", price: 120 ,image:mattress1},
{ id: 42, name: "Soft Foam Mattress", category: "Mattresses", price: 180 ,image:mattress2},
{ id: 43, name: "Orthopedic Support Mattress", category: "Mattresses", price: 320,image:mattress3 },
{ id: 44, name: "Memory Foam Deluxe", category: "Mattresses", price: 450,image:mattress4 },
{ id: 45, name: "Spring Comfort Mattress", category: "Mattresses", price: 260 ,image:mattress5},
{ id: 46, name: "King Size Premium Mattress", category: "Mattresses", price: 550 ,image:mattress6},
{ id: 47, name: "Queen Size Relax Mattress", category: "Mattresses", price: 380,image:mattress7 },
{ id: 48, name: "Eco Latex Mattress", category: "Mattresses", price: 600,image:mattress8 },
{ id: 49, name: "Budget Foam Mattress", category: "Mattresses", price: 150 ,image:mattress9},
{ id: 50, name: "Ultra Plush Sleep Mattress", category: "Mattresses", price: 480,image:mattress10 },
{ id: 51, name: "Cool Gel Mattress", category: "Mattresses", price: 340 ,image:mattress11},
{ id: 52, name: "Hybrid Comfort Mattress", category: "Mattresses", price: 520 ,image:mattress12},
{ id: 53, name: "Luxury Pillow Top Mattress", category: "Mattresses", price: 610,image:mattress13 },
{ id: 54, name: "Compact Foldable Mattress", category: "Mattresses", price: 200 ,image:mattress14},
{ id: 55, name: "Ultra Firm Support Mattress", category: "Mattresses", price: 430,image:mattress15 },
{ id: 56, name: "Premium Air Flow Mattress", category: "Mattresses", price: 480,image:mattress16 },
{ id: 57, name: "Budget Sleep Easy Mattress", category: "Mattresses", price: 170 ,image:mattress17},
{ id: 58, name: "Deluxe Comfort Foam Mattress", category: "Mattresses", price: 390 ,image:mattress18},
{ id: 59, name: "BackCare Orthopedic Mattress", category: "Mattresses", price: 560,image:mattress19 },
{ id: 60, name: "Smart Flex Mattress", category: "Mattresses", price: 450,image:mattress20 },

{ id: 61, name: "King Recliner", category: "Recliners", price: 500, image: recliner1 },
{ id: 62, name: "Queen Comfort Recliner", category: "Recliners", price: 450, image: recliner2 },
{ id: 63, name: "Luxury Leather Recliner", category: "Recliners", price: 720, image: recliner3 },
{ id: 64, name: "Compact Lounge Recliner", category: "Recliners", price: 380, image: recliner4 },
{ id: 65, name: "Premium Relax Recliner", category: "Recliners", price: 610, image: recliner5 },
{ id: 66, name: "Modern Pushback Recliner", category: "Recliners", price: 540, image: recliner6 },
{ id: 67, name: "Classic Wooden Arm Recliner", category: "Recliners", price: 470, image: recliner7 },
{ id: 68, name: "Ultra Soft Fabric Recliner", category: "Recliners", price: 430, image: recliner8 },
{ id: 69, name: "Executive Power Recliner", category: "Recliners", price: 850, image: recliner9 },
{ id: 70, name: "Minimalist Slim Recliner", category: "Recliners", price: 390, image: recliner10 },
{ id: 71, name: "Royal Cushion Recliner", category: "Recliners", price: 660, image: recliner11 },
{ id: 72, name: "Smart Electric Recliner", category: "Recliners", price: 920, image: recliner12 },
{ id: 73, name: "Budget Comfort Recliner", category: "Recliners", price: 320, image: recliner13 },
{ id: 74, name: "Wide Seat Lounge Recliner", category: "Recliners", price: 580, image: recliner14 },
{ id: 75, name: "Deluxe Foam Recliner", category: "Recliners", price: 470, image: recliner15 },
{ id: 76, name: "Ergo Support Recliner", category: "Recliners", price: 690, image: recliner16 },
{ id: 77, name: "Plush Velvet Recliner", category: "Recliners", price: 740, image: recliner17 },
{ id: 78, name: "Recline Plus Pro", category: "Recliners", price: 810, image: recliner18 },
{ id: 79, name: "ComfortMax Recliner", category: "Recliners", price: 560, image: recliner19 },
{ id: 80, name: "Signature Elite Recliner", category: "Recliners", price: 980, image: recliner20 },

{ id: 81, name: "Dine With Fam", category: "Dining-Table", price: 550, image: dining1 },
{ id: 82, name: "Classic 4 Seater Dining Table", category: "Dining-Table", price: 480, image: dining2 },
{ id: 83, name: "Modern Glass Dining Table", category: "Dining-Table", price: 720, image: dining3 },
{ id: 84, name: "Compact Foldable Dining Table", category: "Dining-Table", price: 390, image: dining4 },
{ id: 85, name: "Luxury 6 Seater Dining Set", category: "Dining-Table", price: 950, image: dining5 },
{ id: 86, name: "Wooden Rustic Dining Table", category: "Dining-Table", price: 610, image: dining6 },
{ id: 87, name: "Minimalist Round Dining Table", category: "Dining-Table", price: 520, image: dining7 },
{ id: 88, name: "Premium Marble Top Dining", category: "Dining-Table", price: 1100, image: dining8 },
{ id: 89, name: "Budget 2 Seater Dining Table", category: "Dining-Table", price: 310, image: dining9 },
{ id: 90, name: "Expandable Family Dining Table", category: "Dining-Table", price: 870, image: dining10 },
{ id: 91, name: "Compact Studio Dining Table", category: "Dining-Table", price: 420, image: dining11 },
{ id: 92, name: "Royal Carved Dining Table", category: "Dining-Table", price: 990, image: dining12 },
{ id: 93, name: "Matte Finish Dining Table", category: "Dining-Table", price: 560, image: dining13 },
{ id: 94, name: "Premium Walnut Dining Table", category: "Dining-Table", price: 780, image: dining14 },
{ id: 95, name: "Luxury Glass 8 Seater", category: "Dining-Table", price: 1250, image: dining15 },
{ id: 96, name: "Space Saver Dining Table", category: "Dining-Table", price: 360, image: dining16 },
{ id: 97, name: "Industrial Style Dining Table", category: "Dining-Table", price: 690, image: dining17 },
{ id: 98, name: "Designer Oval Dining Table", category: "Dining-Table", price: 830, image: dining18 },
{ id: 99, name: "Modern Compact Dining Table", category: "Dining-Table", price: 470, image: dining19 },
{ id: 100, name: "Signature Elite Dining Table", category: "Dining-Table", price: 1400, image: dining20 },

{ id: 101, name: "Remote Chair", category: "Office-Chair", price: 320, image: officechair1 },
{ id: 102, name: "Ergo Mesh Office Chair", category: "Office-Chair", price: 450, image: officechair2 },
{ id: 103, name: "Executive Leather Office Chair", category: "Office-Chair", price: 880, image: officechair3 },
{ id: 104, name: "Compact Study Office Chair", category: "Office-Chair", price: 290, image: officechair4 },
{ id: 105, name: "Premium High Back Chair", category: "Office-Chair", price: 640, image: officechair5 },
{ id: 106, name: "Adjustable Armrest Office Chair", category: "Office-Chair", price: 510, image: officechair6 },
{ id: 107, name: "Minimalist Work Desk Chair", category: "Office-Chair", price: 360, image: officechair7 },
{ id: 108, name: "Luxury Executive Pro Chair", category: "Office-Chair", price: 990, image: officechair8 },
{ id: 109, name: "Budget Comfort Office Chair", category: "Office-Chair", price: 270, image: officechair9 },
{ id: 110, name: "Smart Posture Support Chair", category: "Office-Chair", price: 720, image: officechair10 },
{ id: 111, name: "Breathable Mesh Comfort Chair", category: "Office-Chair", price: 430, image: officechair11 },
{ id: 112, name: "Classic Wooden Office Chair", category: "Office-Chair", price: 540, image: officechair12 },
{ id: 113, name: "Deluxe Cushion Office Chair", category: "Office-Chair", price: 610, image: officechair13 },
{ id: 114, name: "Ultra Soft Executive Chair", category: "Office-Chair", price: 860, image: officechair14 },
{ id: 115, name: "Compact Foldable Office Chair", category: "Office-Chair", price: 310, image: officechair15 },
{ id: 116, name: "Premium Headrest Office Chair", category: "Office-Chair", price: 780, image: officechair16 },
{ id: 117, name: "Designer Modern Office Chair", category: "Office-Chair", price: 670, image: officechair17 },
{ id: 118, name: "Ergonomic Lumbar Support Chair", category: "Office-Chair", price: 590, image: officechair18 },
{ id: 119, name: "Gaming Style Office Chair", category: "Office-Chair", price: 830, image: officechair19 },
{ id: 120, name: "Signature Elite Office Chair", category: "Office-Chair", price: 1050, image: officechair20 },

{ id: 121, name: "TV Cabinet Infinity", category: "TV-Unit", price: 380 ,image: tvunit1 },
{ id: 122, name: "Modern Wall Mounted TV Unit", category: "TV-Unit", price: 520 ,image: tvunit2 },
{ id: 123, name: "Classic Wooden TV Cabinet", category: "TV-Unit", price: 460 ,image: tvunit3 },
{ id: 124, name: "Premium Marble Top TV Unit", category: "TV-Unit", price: 890 ,image: tvunit4 },
{ id: 125, name: "Compact Studio TV Stand", category: "TV-Unit", price: 310 ,image: tvunit5 },
{ id: 126, name: "Luxury LED Panel TV Unit", category: "TV-Unit", price: 970 ,image: tvunit6 },
{ id: 127, name: "Rustic Finish TV Cabinet", category: "TV-Unit", price: 430 ,image: tvunit7 },
{ id: 128, name: "Minimalist Floating TV Unit", category: "TV-Unit", price: 600 ,image: tvunit8 },
{ id: 129, name: "Designer Glass TV Stand", category: "TV-Unit", price: 720 ,image: tvunit9 },
{ id: 130, name: "Budget Compact TV Cabinet", category: "TV-Unit", price: 280 ,image: tvunit10 },
{ id: 131, name: "Royal Carved TV Unit", category: "TV-Unit", price: 1050 ,image: tvunit11 },
{ id: 132, name: "Matte Finish Modern TV Unit", category: "TV-Unit", price: 490 ,image: tvunit12 },
{ id: 133, name: "Premium Walnut TV Cabinet", category: "TV-Unit", price: 760 ,image: tvunit13 },
{ id: 134, name: "Smart Storage TV Unit", category: "TV-Unit", price: 650 ,image: tvunit14 },
{ id: 135, name: "Expandable Media TV Unit", category: "TV-Unit", price: 830 ,image: tvunit15 },
{ id: 136, name: "Industrial Style TV Stand", category: "TV-Unit", price: 540 ,image: tvunit16 },
{ id: 137, name: "Signature Elite TV Cabinet", category: "TV-Unit", price: 1200 ,image: tvunit17 },
{ id: 138, name: "Space Saver Wall TV Unit", category: "TV-Unit", price: 410 ,image: tvunit18 },
{ id: 139, name: "Modern Oak TV Cabinet", category: "TV-Unit", price: 570 ,image: tvunit19 },
{ id: 140, name: "Luxury Media Console TV Unit", category: "TV-Unit", price: 990 ,image: tvunit20 },

// { id: 141, name: "Classic 2 Door Wooden Wardrobe", category: "Wardrobe", price: 520, image: wardrobe1 },
// { id: 142, name: "Modern Sliding Door Wardrobe", category: "Wardrobe", price: 780, image: wardrobe2 },
// { id: 143, name: "Premium Mirror Finish Wardrobe", category: "Wardrobe", price: 950, image: wardrobe3 },
// { id: 144, name: "Compact Single Door Wardrobe", category: "Wardrobe", price: 390, image: wardrobe4 },
// { id: 145, name: "Luxury 3 Door Wardrobe", category: "Wardrobe", price: 1100, image: wardrobe5 },
// { id: 146, name: "Matte Finish Storage Wardrobe", category: "Wardrobe", price: 640, image: wardrobe6 },
// { id: 147, name: "Rustic Oak Wardrobe", category: "Wardrobe", price: 720, image: wardrobe7 },
// { id: 148, name: "Minimalist White Wardrobe", category: "Wardrobe", price: 560, image: wardrobe8 },
// { id: 149, name: "Smart Organizer Wardrobe", category: "Wardrobe", price: 830, image: wardrobe9 },
// { id: 150, name: "Budget Compact Wardrobe", category: "Wardrobe", price: 310, image: wardrobe10 },
// { id: 151, name: "Royal Carved Wooden Wardrobe", category: "Wardrobe", price: 1250, image: wardrobe11 },
// { id: 152, name: "Premium Walnut Wardrobe", category: "Wardrobe", price: 980, image: wardrobe12 },
// { id: 153, name: "Sliding Mirror Panel Wardrobe", category: "Wardrobe", price: 870, image: wardrobe13 },
// { id: 154, name: "Space Saver Corner Wardrobe", category: "Wardrobe", price: 600, image: wardrobe14 },
// { id: 155, name: "Signature Elite Wardrobe", category: "Wardrobe", price: 1400, image: wardrobe15 },
// { id: 156, name: "Designer Glass Panel Wardrobe", category: "Wardrobe", price: 920, image: wardrobe16 },
// { id: 157, name: "Industrial Style Metal Wardrobe", category: "Wardrobe", price: 690, image: wardrobe17 },
// { id: 158, name: "Elegant Dual Tone Wardrobe", category: "Wardrobe", price: 760, image: wardrobe18 },
// { id: 159, name: "Expandable Storage Wardrobe", category: "Wardrobe", price: 880, image: wardrobe19 },
// { id: 160, name: "Luxury Walk-In Style Wardrobe", category: "Wardrobe", price: 1650, image: wardrobe20 },

{ id: 161, name: "Classic Cotton Rope Hammock", category: "Hammock", price: 220, image: hammock1 },
{ id: 162, name: "Portable Outdoor Camping Hammock", category: "Hammock", price: 340, image: hammock2 },
{ id: 163, name: "Double Size Garden Hammock", category: "Hammock", price: 480, image: hammock3 },
{ id: 164, name: "Premium Quilted Hammock", category: "Hammock", price: 620, image: hammock4 },
{ id: 165, name: "Lightweight Travel Hammock", category: "Hammock", price: 290, image: hammock5 },
{ id: 166, name: "Bohemian Style Fabric Hammock", category: "Hammock", price: 510, image: hammock6 },
{ id: 167, name: "Wooden Spreader Bar Hammock", category: "Hammock", price: 570, image: hammock7 },
{ id: 168, name: "Compact Foldable Hammock", category: "Hammock", price: 260, image: hammock8 },
{ id: 169, name: "Luxury Patio Hammock", category: "Hammock", price: 880, image: hammock9 },
{ id: 170, name: "Weather Resistant Outdoor Hammock", category: "Hammock", price: 430, image: hammock10 },
{ id: 171, name: "Signature Elite Hammock", category: "Hammock", price: 990, image: hammock11 },
{ id: 172, name: "Minimalist Balcony Hammock", category: "Hammock", price: 370, image: hammock12 },
{ id: 173, name: "Heavy Duty Camping Hammock", category: "Hammock", price: 540, image: hammock13 },
{ id: 174, name: "Designer Printed Fabric Hammock", category: "Hammock", price: 460, image: hammock14 },
{ id: 175, name: "Space Saver Indoor Hammock", category: "Hammock", price: 310, image: hammock15 },
{ id: 176, name: "Deluxe Cushion Hammock", category: "Hammock", price: 750, image: hammock16 },
{ id: 177, name: "Rustic Style Garden Hammock", category: "Hammock", price: 520, image: hammock17 },
{ id: 178, name: "Compact Urban Hammock", category: "Hammock", price: 390, image: hammock18 },
{ id: 179, name: "Premium Double Layer Hammock", category: "Hammock", price: 680, image: hammock19 },
{ id: 180, name: "Luxury Resort Style Hammock", category: "Hammock", price: 1200, image: hammock20 },
]


// ProductGrid.jsx
const ProductGrid = ({ category, priceFilter }) => {

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [likedItems, setLikedItems] = useState([]);
  const [addedId, setAddedId] = useState(null);
  const [addingId, setAddingId] = useState(null);

  const [ratings] = useState(() =>
    allProducts.reduce((acc, product) => {
      acc[product.id] = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
      return acc;
    }, {})
  );

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  };

  const handleAddToCart = (item) => {

    setAddingId(item.id);

    setTimeout(() => {
      addToCart(item);
      setAddingId(null);
      setAddedId(item.id);
    }, 700);

  };

  const normalizedCategory = category
    ? category.replace(/-/g, " ").toLowerCase()
    : null;

  const filteredProducts = allProducts.filter((item) => {

    const itemCategoryNormalized = item.category
      .replace(/-/g, " ")
      .toLowerCase();

    const categoryMatch = normalizedCategory
      ? itemCategoryNormalized === normalizedCategory
      : true;

    const priceMatch = priceFilter
      ? item.price >= priceFilter[0] &&
        item.price <= priceFilter[1]
      : true;

    return categoryMatch && priceMatch;

  });

 return (
  <>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto items-stretch">

      {filteredProducts.map((item) => (

        <div
          key={item.id}
          className="group relative bg-white rounded-xl 
          border border-gray-200 
          shadow-sm hover:shadow-lg 
          transition-all duration-300
          flex flex-col h-full"
        >

          {/* ❤️ Like */}
          <button
            onClick={() => toggleLike(item.id)}
            className="absolute top-3 right-3 z-20 
            bg-white p-2 rounded-full shadow 
            hover:scale-110 transition"
          >
            <Heart
              size={16}
              className={
                likedItems.includes(item.id)
                  ? "fill-red-500 text-red-500"
                  : "text-gray-400"
              }
            />
          </button>

          {/* Image */}
          <div className="relative overflow-hidden rounded-t-xl bg-gray-50 flex items-center justify-center h-44">

            <img
              src={item.image}
              alt={item.name}
              className="max-h-full max-w-full object-contain 
              transition duration-500 group-hover:scale-105"
            />

            {/* ⭐ Rating */}
            <div className="absolute top-3 left-3 
            bg-white px-2 py-1 rounded-full 
            flex items-center gap-1 shadow text-xs">

              <span className="text-[#bf6f32]">★</span>

              <span className="font-semibold text-gray-700">
                {ratings[item.id]}
              </span>

            </div>

          </div>

          {/* Content */}
          <div className="p-4 flex flex-col flex-1">

            <h3 className="font-semibold text-sm md:text-base line-clamp-2 min-h-[42px]">
              {item.name}
            </h3>

            <div className="flex items-center justify-between mt-2">

              <p className="text-sm text-gray-500">
                ₹ {item.price} / month
              </p>

              <span className="flex items-center gap-1 
              text-xs 
              bg-green-50 text-green-700 
              border border-green-200
              px-2 py-0.5 rounded-full font-semibold">

                <Clock size={14} />
               Delivery in 24 Hours

              </span>

            </div>

            <div className="flex-grow"></div>

            {/* Button */}
            <button
              onClick={() => {
                if (addedId === item.id) {
                  navigate("/cart");
                } else {
                  handleAddToCart(item);
                }
              }}
              disabled={addingId === item.id}
              className="flex items-center justify-center gap-2 mt-3
              bg-[#bf6f32] text-white py-2
              rounded-lg
              text-sm font-semibold
              shadow-sm
              transition-all duration-300
              hover:bg-[#a95c27] hover:shadow-md
              active:scale-95
              disabled:opacity-100 disabled:bg-[#bf6f32]"
            >

              {addingId === item.id ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Adding to Cart...
                </>
              ) : addedId === item.id ? (
                <>
                  <ShoppingCart size={18} />
                  View Cart
                </>
              ) : (
                <>
                  <ShoppingCart size={18} />
                  Add to Cart
                </>
              )}

            </button>

          </div>

        </div>

      ))}

    </div>

    {/* 🔻 End of Products Section */}
    <div className="mt-16 mb-12 flex flex-col items-center text-center">

      <div className="w-16 h-[2px] bg-gray-300 mb-4"></div>

      <h2 className="text-lg md:text-xl font-semibold text-gray-700">
        No more products to show
      </h2>

      <p className="text-sm text-gray-500 mt-2">
        You have reached the end of our collection
      </p>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-6 px-6 py-2.5 bg-[#bf6f32] text-white 
        rounded-full text-sm font-medium 
        hover:bg-[#a95c27] transition "
      >
        ↑ Back to Top
      </button>

    </div>

  </>
);
};

export default ProductGrid;

//! this code is applied if we dont want rating //

// const ProductGrid = ({ category, priceFilter }) => {

//   // ✅ Hook always inside component
//   const [likedItems, setLikedItems] = useState([]);

//   const toggleLike = (id) => {
//     setLikedItems((prev) =>
//       prev.includes(id)
//         ? prev.filter((itemId) => itemId !== id)
//         : [...prev, id]
//     );
//   };

//   const normalizedCategory = category
//     ? category.replace(/-/g, " ").toLowerCase()
//     : null;

//   const filteredProducts = allProducts.filter((item) => {
//     const itemCategoryNormalized = item.category
//       .replace(/-/g, " ")
//       .toLowerCase();

//     const categoryMatch = normalizedCategory
//       ? itemCategoryNormalized === normalizedCategory
//       : true;

//     const priceMatch = priceFilter
//       ? item.price >= priceFilter[0] &&
//         item.price <= priceFilter[1]
//       : true;

//     return categoryMatch && priceMatch;
//   });
//   return (
//   <>
//     {/* Product Grid */}
//     <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
//       {filteredProducts.map((item) => (
//         <div
//           key={item.id}
//           className="group relative bg-white rounded-xl md:rounded-2xl overflow-hidden 
//           shadow-sm hover:shadow-2xl hover:-translate-y-2 
//           transition-all duration-300"
//         >
//           {/* ❤️ Like Button */}
//           <button
//             onClick={() => toggleLike(item.id)}
//             className="absolute top-2 right-2 md:top-4 md:right-4 
//             z-20 bg-white p-1 md:p-2 rounded-full shadow-md 
//             hover:scale-110 transition"
//           >
//             <Heart
//               size={14}
//               className={
//                 likedItems.includes(item.id)
//                   ? "fill-red-500 text-red-500"
//                   : "text-gray-400"
//               }
//             />
//           </button>

//           {/* Image */}
//           <div className="relative overflow-hidden">
//             {item.image ? (
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="h-32 md:h-64 w-full object-cover 
//                 hover:scale-105 transition duration-500"
//               />
//             ) : (
//               <div className="h-32 md:h-64 w-full bg-gray-200 flex items-center justify-center">
//                 No Image
//               </div>
//             )}
//           </div>

//           {/* Content */}
//           <div className="p-2 md:p-5 flex flex-col gap-1 md:gap-3">
//             <h3 className="font-semibold text-xs md:text-lg line-clamp-2">
//               {item.name}
//             </h3>

//             <p className="text-[11px] md:text-sm text-gray-500">
//               ₹ {item.price} / month
//             </p>

//             <button
//               className="mt-1 flex items-center justify-center gap-1.5 
//               bg-[#bf6f32] text-white py-1.5 md:py-2.5 
//               rounded-md md:rounded-xl 
//               text-[11px] md:text-sm font-medium 
//               hover:bg-[#a95c27] transition duration-300"
//             >
//               🛒 Add to Cart
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>

//     {/* End Section */}
//     <div className="mt-10 mb-10 flex flex-col items-center justify-center text-center">
      
//       <div className="w-20 h-[2px] bg-gray-300 mb-4"></div>

//       <h2 className="text-lg md:text-2xl font-semibold text-gray-700 tracking-wide">
//         You are at the end
//       </h2>

//       <p className="text-sm text-gray-500 mt-2">
//         No more products to show
//       </p>

//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className="mt-6 px-6 py-2.5 bg-[#bf6f32] text-white 
//         rounded-full text-sm font-medium 
//         hover:bg-gray-800 transition duration-300"
//       >
//         ↑ Back to Top
//       </button>
//     </div>
//   </>
// );
// };

// export default ProductGrid;











































