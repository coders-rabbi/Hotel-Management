import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/sharedComponents/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Root;