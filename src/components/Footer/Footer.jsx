import classes from './Footer.module.scss'

export default function Footer(params) {
  return (
    <div className={classes.Footer}>
      <div className={classes.Rules}>
        <ul>
          <li> <a href="#">Terms of Service</a></li>
          <li> <a href="#">Privacy Policy</a></li>
          <li> <a href="#">Subscription Policy</a></li>
        </ul>
      </div>

      <div className={classes.Copyright}>
        <p>©Copyright  © 2020 PlantIn. All rights reserved</p>
      </div>
    </div>
  )
}