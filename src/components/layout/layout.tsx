import React,{useState} from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
import Header from '../header/header';
import {navContent} from '../../static/navContent';

const protectedNav = navContent.filter(navItem   => navItem.routeProps.sensitive);
const layout: React.FC = () => {
    const [headerText, setHeaderText] = useState("");
    return (
        <div>
            <Header pageTitle={''} onNavClick={()=>{}}/>
            <Switch>
                 {
                     protectedNav.map((navItem, index)=>{
                         return(
                             <Route
                             exact = {true}
                             path = {navItem.routeProps.path}
                             component= {navItem.routeProps.component}
                             key={index}
                             />
                         )
                     })
                 }
            </Switch>
        </div>
    )
}

export default layout
