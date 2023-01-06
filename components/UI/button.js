import Link from "next/link";
import classes from './button.module.css'

const Button = (props) => {
    return (
        <Link href={props.link}>
            <span className={classes.btn}>{props.children}</span>
        </Link>
    )
};
export default Button;