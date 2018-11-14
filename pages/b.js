import React from 'react';
import DynamicComponent from '../components/dynamic-component';

const B = () => (
    <div>
        <p>This is test B</p>
        <DynamicComponent name='component-two' />
    </div>
);
 
export default B;