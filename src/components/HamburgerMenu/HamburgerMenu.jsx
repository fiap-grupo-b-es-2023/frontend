import {useState} from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import style from './HamburgerMenu.module.css';
import IconButton from '@mui/material/IconButton';
import { TiThMenu } from "react-icons/ti";
export default function HamburgerMenu ({setShowVideo}) {
    const [menuAnchor, setMenuAnchor] = useState(null);

    const isMenuOpen = Boolean(menuAnchor);

    const handleClick = (event) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setMenuAnchor(null);
    };

    return (
        <div className={style.menuIcon}>
            <IconButton onClick={handleClick} color="primary">
                <TiThMenu className={style.icon} />
            </IconButton>

            <Menu anchorEl={menuAnchor} open={isMenuOpen} onClose={handleClose}>
                <MenuItem onClick={() => { setShowVideo(true); handleClose(); }}>
                    Video Pitch
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Sobre o projeto
                </MenuItem>
            </Menu>
        </div>
    );

}
