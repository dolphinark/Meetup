import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => 
      <MeetupItem
        key={meetup.id}
        id={meetup.id}
        image={meetup.image} // here passing in individual props
        title={meetup.title}
        address={meetup.address}
        description={meetup.description}
        // meetup={meetup}
        // alternatively we could've also just passed in a meetup or any other name and just passed in the meetup as a whole then we would have to destructure it inside of the meetup item component
      />
      )}
    </ul>
  );
}

export default MeetupList;
