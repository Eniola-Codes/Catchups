import classes from './MeetupDetails.module.css';

const MeetupDetails = (props) => {

  return (
    <div className={classes.container}>
        <img src={props.image} alt={props.title} className={classes.image}></img>
        <h2>{props.title}</h2>
        <address>{props.address}</address>
        <p>{props.description}</p>
    </div>
  )
}

export default MeetupDetails;