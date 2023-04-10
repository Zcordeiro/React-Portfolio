import React from 'react';
import ComingSoon from '../assets/images/coming-soon.jpg';

export default function Blog(){
    return (
        <div className="flex justify-center" >
        <img className='mt-20' src={ComingSoon} alt="Coming Soon" />
        </div>
    );
};
