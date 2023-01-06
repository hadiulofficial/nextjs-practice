import EventItem from "./event-item";
import classes from './event-list.module.css'


const EventList = (props) => {
    const { items } = props;


    return (
        <div className={classes.list}>
            {items.map(item => <EventItem
                id={item.id}
                key={item.id}
                image={item.image}
                title={item.title}
                date={item.date}
                location={item.location} />)}
        </div>
    )
};
export default EventList