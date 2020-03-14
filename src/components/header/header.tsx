import React from 'react'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ToolBar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
interface IProps {
pageTitle: string;
onNavClick(): void;
}
const Header = (props: IProps) => {
    return (
        <div>
            <AppBar position='static'>
                <ToolBar>
                    <IconButton  color='inherit' onClick ={()=> props.onNavClick()}> 
                        <MenuIcon />
                    </IconButton>
                    <Typography>{props.pageTitle}</Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default Header;
