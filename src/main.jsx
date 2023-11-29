import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Layout from './layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useParams } from 'react-router-dom'
import Home from './componen/home/home.jsx'
import About from './componen/about/about.jsx'
import Contact from './componen/contact/contact.jsx'
import Login from './componen/login/login.jsx'
import Signup from './componen/signup/signup.jsx'
import Product from './componen/product/product.jsx'
import Sliderimg from './componen/imageslider/imageslid.jsx'
import SimpleMap from './componen/map.jsx'
import ProductDetail from './componen/payment.jsx'
// import Scroll from './componen/scroller/scroll.jsx'
// import saveit from './connection.js'
// import Register from './model/detail.js';
// import Login from './componen/login/login.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [{
//       path: '',
//       element: <Home />
//     },
//     {
//       path: 'about',
//       element: <About />
//     },
//     {
//       path: 'contact',
//       element: <About />
//     },
//     {
//       path: 'github',
//       element: <About />
//     },
//     {
//       path: 'about',
//       element: <About />
//     }
  
//   ]
//   }
// ])



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/about' element={<About/>}/>
      <Route path='' element={[<Sliderimg/>,<Home/>]}/>
      <Route path='/contact' element={[<Contact/>,<SimpleMap/>]}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signup' element={<Signup/>}/>
      
      <Route path='/payment/:productId' element={<ProductDetail/>}/>
      <Route path='/products' element={[<Sliderimg/>,<Product/>]}/>
      <Route path='/slider' element={<Sliderimg/>}/>

      {/* <Route path='/scroll' element={<Scroll/>}/> */}
    </Route>,
    // <Route path='/loginit' element={<Login/>}></Route>
  )
)



// // Express.post("/signup",async (req,res)=>{
// //   try {
// //     const customer = new Register({
// //         name: req.body.Name,
// //         // lastname: req.body.secondName,
// //         phone: req.body.number,
// //         email:req.body.email,
// //         passward:req.body.password,
// //         gender:req.body.Gender 
// //     })
// //     const registered= await customer.save();
// //     res.status(201).render("main");
// // }
// // catch(err) {
// //   res.status(400).send(err);
// // }
// });




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
