import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Registration from './Pages/Registration';
import Contact from './Pages/Contact';
import NoPage from './Pages/NoPage';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="login" element={<Login />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NoPage />} /> {/* Catch-all route for 404 */}
                </Route>
            </Routes>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



//different codes I've tried. Blended my project 3 with week18 router code

/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import express from 'express';
import users from './Components/Users.js';
import products from './routes/products.js';
import cors from 'cors';
import Users from './Users'; // Ensure Users.js or index.js exists in the src folder
import AddUser from './AddUser'; // Ensure AddUser.js or index.js exists in the src folder
import 'crypto-browserify';
import 'stream-browserify';
import 'path-browserify';
import 'browserify-zlib';
import 'querystring-es3';
import 'process/browser';


const app = express();
app.use(express.json());
app.use(cors({ origin:true, credentials: true}));
app.set('view engine', 'ejs');
app.use('/users', users)        //localhost:3000/users
app.use('/products', products)  //localhost:3000/products

app.get('/',(req,res)=>{
    res.send("Connected Successfully");
})

app.listen(5000,()=>{
    console.log("Server listening at http://localhost:5000")
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);







/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import express from 'express';
import reportWebVitals from './reportWebVitals';

const app = express();
app.use(express.json());
app.use(cors({ origin:true, credentials: true}));
app.set('view engine', 'ejs');
app.use('/users', users)    //localhost:3000/users
app.use('/products', products) //locathost3000/products


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); */
