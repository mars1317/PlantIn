import classes from './Breadcrumbs.module.scss';
import {Link} from 'react-router-dom';

export default function Breadcrumbd(params) {
  return (
    <section className={classes.Breadcrumbs}>
      <Link to="#" className={classes.item}>Home</Link>
      <Link to="#" className={classes.item}>Blog</Link>
    </section>
  )
}