import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ConditionRendering from './components/ConditionRendering';
import Footer from './components/Footer'


const App = () => {
  const[status, setStatus]=useState(true)
  const[cartCount, setCartCount]=useState(0)
  const data=[
    {
      name:"Short Kurti",
      description: "Best for Office wear, Out door outfit",
      image:'https://i.pinimg.com/originals/99/db/30/99db3025b15d0baabcb14147c3d8c46f.jpg',
      price:"₹450",
      delprice:"₹600",
      rating: true
    },
    {
      name:"Short Kurti",
      description: "Best for Office wear, Out door outfit",
      image:'https://i.pinimg.com/originals/30/73/1a/30731a95749c092b09c6d57faf6ab9b5.jpg', 
      price:"₹500",
      delprice:"₹600",
      rating: false
    },
    {
      name:"Short Kurti",
      description: "Best for Office wear",
      image:'https://i.pinimg.com/originals/5c/75/9c/5c759cd86295fb56344f3a7ef03b82a4.jpg', 
      price:"₹400",
      delprice:"550",
      rating: true
    },
    {
      name:"Short Kurti",
      description: "Best for Office wear",
      image:"https://i.pinimg.com/originals/1b/22/8b/1b228b201c20877ebaf0fe37b99cf662.jpg",
      price:"₹400",
      delprice:"₹500",
      rating: false

    },
    {
      name:"Official Wear",
      description: "Best for Office",
      image:"https://i.pinimg.com/originals/83/37/f8/8337f820b8e8827a5b05259c56ebbdae.jpg",
       price:"₹999",
       delprice:"₹1299",
       rating: true
    },
    
    {
      name:"Official Wear",
      description: "Best for Office",
      image:"https://i.pinimg.com/originals/ea/bb/66/eabb66147f04a950f3a67e2aa7174429.jpg",
       price:"₹999",
       delprice:"₹1299",
       rating: false
    },
    {
      name:"Official Wear",
      description: "Best for Office",
      image:"https://i.pinimg.com/originals/df/da/8e/dfda8edc11bb95bb4f417ed4981c74e3.jpg",
       price:"₹999",
       delprice:"₹1299",
       rating: true
    },
    {
      name:"Official Wear",
      description: "Best for Office",
      image:"https://i.pinimg.com/originals/36/54/22/36542299b3289e99ef9ce69a2441fcff.jpg",
       price:"₹999",
       delprice:"₹1299",
       rating: false
    },
    {
      name:"Night Wear",
      description: "Cotton, Breathable wear",
      image:"https://i.pinimg.com/originals/41/7a/21/417a21b584f04d0b95aa1e185380ee0f.jpg",
       price:"₹599",
       delprice:"₹799",
       rating: true
    },
    {
      name:"Night Wear",
      description: "Cotton, Breathable wear",
      image:"https://i.pinimg.com/originals/12/e5/34/12e5345a074b0de14d1c3b42b4c4dbd2.jpg",
       price:"₹599",
       delprice:"₹799",
       rating: false
    },
    {
      name:"Night Wear",
      description: "Cotton, Breathable wear",
      image:"https://i.pinimg.com/originals/d7/bd/9b/d7bd9bf979fbc6057e1d73e7fd9dafc5.jpg",
       price:"₹599",
       delprice:"₹799",
       rating: true
    },
    {
      name:"Night Wear",
      description: "Cotton, Breathable wear",
      image:"https://i.pinimg.com/originals/f5/10/67/f51067f1c3f789bd5e289612be7cbc2d.jpg",
       price:"₹599",
       delprice:"₹799",
       rating: false
    },

  ]
  const[products, setProducts]= useState(data)

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Header />
     {status? <ConditionRendering setCartCount={setCartCount} cartCount={cartCount} setProducts={setProducts} products={products} /> : " "}
     <Footer />
    </div>
  );
};

export default App;
