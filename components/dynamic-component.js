import dynamic from 'next/dynamic';

const componentList = [
    'component-one',
    'component-two',
];

const Components = {};
componentList.forEach(path => 
    Components[path] = dynamic(import(
        /* webpackChunkName: "dynamic-component-[request]-[index]" */
        `./dynamic/${path}`
    ))
);

const DynamicComponent = ({ name }) => {
    const ComponentToRender = Components[name];

    return (
        <ComponentToRender />
    );
}
 
export default DynamicComponent;