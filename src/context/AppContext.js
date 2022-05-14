import { createContext, useContext, useEffect, useState } from "react"
import { provisiones } from "../data/provisiones";

const AppContext = createContext();
export const UseAppContext = () => useContext(AppContext);

export const AppContextProvider = ({children}) => {

    const [productos, setProvisiones] = useState([]);

    useEffect(() => {
        const getProvisiones = new Promise((resolve) => {
            setTimeout(() => {
                resolve(provisiones);
            }, 1000);
        });

        getProvisiones.then((result) => {
            setProvisiones(result);
            console.log(result)
        })
    });

    return (
        <AppContext.Provider value={{productos}}>
            {children}
        </AppContext.Provider>
    )
}