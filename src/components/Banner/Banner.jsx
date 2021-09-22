import classes from './Banner.module.scss'
import {useSelector, useDispatch} from "react-redux";
import logo from '../../assets/icons/logo.svg';

export default function Banner() {
  const searchModeOff = useSelector(state => state.searchModeOff);

  return (
    <>
      {searchModeOff ?
      <div className={classes.Banner} key={'Banner'}>
        <img className={classes.Logo} src={logo} alt='site logo'/>
        <h1 className={classes.Title}> Get unlimited access to exclusive articles </h1>
        <p className={classes.Content}> Get rid of limits and read everything you wish </p>
        <button className={classes.PromoButton} type="button"> Try For Free </button>
      </div> :
      null
    }
  </>
  )
}