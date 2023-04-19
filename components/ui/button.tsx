import Link from "next/link";
import classes from './button.module.css';
import { Url } from "next/dist/shared/lib/router/router";
import { MouseEventHandler, ReactNode } from "react";

function Button(props: {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
    children: ReactNode;
    link: Url; events: any; 
}) {

    if (props.link) {
        return (
            <Link href={props.link} className={classes.btn}>
                {props.children}
            </Link>
        );
    } 
    return (
        <button className={classes.btn} onClick={props.onClick}>
            {props.children}
        </button>
    );
    
}

export default Button;
