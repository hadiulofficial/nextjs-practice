import Button from "../UI/button";
import classes from './event-item.module.css'


const EventItem = (props) => {
    const { title, location, date, image, id } = props;

    const exploreLink = `/events/${id}`

    return <li className={classes.item}>
        <img src={'/' + image} alt="" />
        <div className={classes.content}>
            <div >
                <h2>{title}</h2>
                <div className={classes.time}>
                    <time>{date}</time>
                </div>
            </div>
            <div className={classes.address}>
                <address>{location}</address>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}>Explore more</Button>
            </div>
        </div>
    </li>
};
export default EventItem;