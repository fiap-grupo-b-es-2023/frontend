import {useState, useCallback} from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import style from './HamburgerMenu.module.css';
import IconButton from '@mui/material/IconButton';
import { TiThMenu } from "react-icons/ti";
export default function HamburgerMenu({ setShowVideo }) {
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleClick = useCallback((event) => {
    event.stopPropagation();
    setMenuAnchor(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setMenuAnchor(null);
  }, []);

  const isMenuOpen = !!menuAnchor;

  return (
    <div className={style.menuIcon} onClick={(e) => e.stopPropagation()}>
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

