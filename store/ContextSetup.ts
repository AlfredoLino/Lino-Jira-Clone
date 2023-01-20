import React from "react"

type MainContext = {
    nombre: string
}

type T_ActionUpperCase = {
    type : 'UPPERCASE',
    payload: string
}


export const reducer = (state: MainContext, action: T_ActionUpperCase) : MainContext =>{
    switch (action.type) {
        case 'UPPERCASE':
            return { nombre: action.payload.toUpperCase() }
        default:
            return {nombre:''}
    }
}

type T_UIContext = {
    state: MainContext,
    dispatch: React.Dispatch<T_ActionUpperCase>
}

export const UIContext = React.createContext<T_UIContext>({} as T_UIContext)
