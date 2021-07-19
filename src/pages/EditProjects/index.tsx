import React from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

const Projects: React.FC = () => {

    return (
        <>
            <Navbar />
            <MenuLeft />
            <MenuRight />
        </>
        );
};

export default Projects;