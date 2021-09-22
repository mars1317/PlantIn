import classes from './Loader.module.scss'

export default function Loader({isWeatherLoader}) {
  let loaderClasses = [classes.Loader];

  if(isWeatherLoader) {
    loaderClasses = [classes.Loader, classes.WeatherLoader];
  }
  return(
    <>
    <div className={loaderClasses.join(" ")}><div></div><div></div></div>
    </>
  )
}