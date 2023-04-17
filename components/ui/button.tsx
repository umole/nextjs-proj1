import Link from "next/link";
import classes from './button.module.css';
import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";

function Button(props: {
    children: ReactNode;
    link: Url; events: any; 
}) {
    return (
        <Link href={props.link}>
            <a className={classes.btn}>{props.children}</a>
        </Link>
    );
}

export default Button;