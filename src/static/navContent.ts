import {RouteProps} from 'react-router-dom';
import Login from '../pages/login';
import Signup from '../pages/signup';
import PageOne from '../pages/pageOne';
import DetailsPage from '../pages/detailsPage';
import SearchPage from '../pages/searchPage';
export interface InavItem {
    routeProps: RouteProps,
    itemTitle? : string;
}
export const navContent: InavItem [] = [
    {
        routeProps: {
            path: "/",
            component: Login,
        },

    },
    {
        routeProps: {
            path: "/signup",
            component: Signup,
        },

    },
    {
        routeProps: {
            path:"/first",
            component: PageOne,
            sensitive: true,
        },
        itemTitle: "First Page",
    },
    {
        routeProps:{
            path: "/details",
            component: DetailsPage,
            sensitive: true,
        },
        itemTitle: "Details Page",
    },
    {
        routeProps:{
            path: "/filter",
            component: SearchPage,
            sensitive: true,
        },
        itemTitle: "pageWithFilterBar",
    }

];
export const getTitleByPath  = (path): string => {
    return "";

}
