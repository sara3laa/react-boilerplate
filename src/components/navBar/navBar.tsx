import React from 'react'
import NavigationItem from './navigationItem';
import  {navContent} from '../../static/navContent';
const NavBar = () => {
    return (
        <ul>
            {
             navContent.map( (navItem,index) => {
                 return (
            <NavigationItem
            link = {navItem.routeProps.path as string}
                 children={<div>{navItem.itemTitle}</div>}
            key= {index}
            />
                 )
              } )
             
            }
        </ul>
    )
}

export default NavBar
