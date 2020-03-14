import React from 'react';
import {NavLink} from 'react-router-dom';
interface IProps {
    link: string;
    children: any;
}
const NavigationItem = (props: IProps) => {
    return (
        <li>
            <NavLink 
            exact= {true}
            to = {props.link}
            >
        {props.children}
            </NavLink>
            
        </li>
    )
}

export default NavigationItem;
