import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/Favorites-context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const isItemFavorite = favoritesCtx.isItemFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (isItemFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        address: props.address,
        image: props.image,
        description: props.description,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {isItemFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
    //   <li className={classes.item}>
    //   <div className={classes.image}>
    //     <img src={props.meetup.image} alt={props.meetup.title} />
    //   </div>
    //   <div className={classes.content}>
    //     <h3>{props.meetup.title}</h3>
    //     <address>{props.meetup.address}</address>
    //     <p>{props.meetup.description}</p>
    //   </div>
    //   <div className={classes.actions}>
    //     <button>To favorites</button>
    //   </div>
    // </li>
  );
}

export default MeetupItem;
