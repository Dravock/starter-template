// PATHS IMPORT
import AppS from './Pages/Public/AppS.js'
import  Header from  './components/Header/Header.js'

// IMPORTS FOR WEBSITE DESIGN
import { useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Validation } from './includes/functions/Validation';
import Cookies from 'universal-cookie';


function Router() {

    const cookies = new Cookies()
    const token = cookies.get('token')

useEffect(() => {
    (async()=>{
        try{
            if(token !== undefined && token !== null && token !== "" ){
            Validation()
            }
        } catch (error) {
            // Do Something on catch
        }
    })() 
}, [token])


return (
    <>
        <BrowserRouter basename='/'>
            {/* REACT ROUTER ROUTES */}
            <Header />
            <div className='container mx-auto'>
                <Routes>
                    {/* PUBLIC PAGES */}
                    <Route path='/' element={<AppS />}/>

                    {/* Private Pages */}

                </Routes>
            </div>
        </BrowserRouter>
    </>
)};

export default Router;
