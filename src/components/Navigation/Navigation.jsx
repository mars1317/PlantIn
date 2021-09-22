import classes from './Navigation.module.scss';
import accountIcon from '../../assets/icons/user.svg';
import searchIcon from '../../assets/icons/search-btn.svg';
import logo from '../../assets/icons/logo.svg';
import menu from '../../assets/icons/menu.svg';
import close from '../../assets/icons/close.svg';
import {useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';

export default function Navigation(params) {
  const [isMenuOpen, toggleMenu] = useState(false);
  
  function toggleMenuMode() {
    toggleMenu(!isMenuOpen);
  }
  
  return (
    <>
    <nav  className={classes.Navigation}>
      <div className={classes.InnerContainer}>
        <div className={classes.Logo}>
          <Link to="#">
            <img src={logo} alt='site logo'/>
          </Link>
        </div>

        <ul className={ isMenuOpen ? [classes.NavList, classes.MobileActive].join(' ') : classes.NavList}>
          <Link to="#" className={classes.CloseButton}>
            <img src={close} onClick={toggleMenuMode} alt="close icon"/>
          </Link>
          <li className={classes.NavItem}><Link to="#"> Discover </Link> </li>
          <li className={classes.NavItem}><Link to="#"> My Plants </Link> </li>
          <li className={classes.NavItem}><Link to="#"> Diseases </Link> </li>
          <li className={classes.NavItem}><Link to="#"> Blog </Link> </li>
          <li className={classes.NavItem}><Link to="#"> FAQ </Link> </li>
          <li className={classes.NavItem}><Link to="#"> Contact Us </Link> </li>
        </ul>

        <ul className={classes.UserBar}>
          <li className={classes.UserBarItem}>
            <button className={classes.SearchButton}>
              <img src={searchIcon}  alt='search'/>
            </button>
          </li>
          <li className={classes.UserBarItem}>
            <Link to="/account" className={classes.AccountButton}>
              <img src={accountIcon}  alt='account icon'/>
            </Link>
          </li>
          <li className={classes.MenuButton}>
            <button onClick={toggleMenuMode}>
              <img src={menu} alt='menu icon'/>
            </button>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}