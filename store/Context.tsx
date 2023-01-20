import React from "react";
import { UIContext, reducer } from "@/store";
export const Context: React.FC<React.PropsWithChildren<{}>> = (props) => {
    const [state, dispatch] = React.useReducer(reducer, {nombre: 'Alfredo Lino Mendoza'})
    return <>
        <UIContext.Provider value={{
            state,
            dispatch
        }}>
            {props.children}
        </UIContext.Provider>
    </>
}