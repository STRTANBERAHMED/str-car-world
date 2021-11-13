import React from 'react';
// import Appbar from '../../shared/navbar/Appbar/Appbar';
import Available from '../Available/Available';
import Banner from '../Banner/Banner';
import Collections from '../Collections/Collections';

const Home = () => {
    return (
        <div>
            {/* <Appbar></Appbar> */}
            <Banner></Banner>
            <Collections></Collections>
            <Available></Available>
        </div>
    );
};

export default Home;