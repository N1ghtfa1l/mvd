import { Link } from "react-router"
import type { PropsWithChildren } from "react"

interface IProps {
    link: string,
}

export const LinkBtn = ({ link, children }: PropsWithChildren<IProps>) => {

    return (
        <Link to={link}>
            {children}
        </Link>
    )
}