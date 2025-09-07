import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { mainStore } from "../store";

interface IProps {
    children: ReactNode
}

export const MainProvider = ({ children }: IProps) => {
    return (
        <Provider store={mainStore}>
            {children}
        </Provider>
    )
}