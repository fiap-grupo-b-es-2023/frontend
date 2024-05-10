import { useState, useCallback } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import style from "./HamburgerMenu.module.css";
import IconButton from "@mui/material/IconButton";
import { TiThMenu } from "react-icons/ti";
import propTypes from "prop-types";
export default function HamburgerMenu({ setShowVideo, setCurrentPage }) {
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleClick = useCallback(event => {
    event.stopPropagation();
    setMenuAnchor(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setMenuAnchor(null);
  }, []);

  const isMenuOpen = !!menuAnchor;

  return (
    <div className={style.menuIcon} onClick={e => e.stopPropagation()}>
      <IconButton onClick={handleClick} color="primary">
        <TiThMenu className={style.icon} />
      </IconButton>

      <Menu anchorEl={menuAnchor} open={isMenuOpen} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            setShowVideo(true);
            handleClose();
          }}
        >
          Video Pitch
        </MenuItem>
        <MenuItem onClick={() => setCurrentPage("AboutPage")}>
          Sobre o projeto
        </MenuItem>
      </Menu>
    </div>
  );
}


HamburgerMenu.propTypes = {
  setShowVideo: propTypes.func.isRequired,
  setCurrentPage: propTypes.func.isRequired,
};