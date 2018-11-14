import React from 'react';
import DynamicComponent from '../components/dynamic-component';

const A = () => (
    <div>
        <p>This is test A</p>
        <DynamicComponent name='component-one' />
    </div>
);
 
export default A;
