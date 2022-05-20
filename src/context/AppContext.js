import { collection, getDocs, getFirestore } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react"

const AppContext = createContext();
export const UseAppContext = () => useContext(AppContext);

export const AppContextProvider = ({children}) => {

    const [provisiones, setProvisiones] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const provisionesCollection = collection(db, "provisiones");
        getDocs(provisionesCollection).then( snapshot => {
                if (snapshot.size > 0) {
                    const provisionesData = snapshot.docs.map(doc => ({ "id": doc.id, ...doc.data()}));
                    return setProvisiones(provisionesData);
                }
            })
    }, []);


    return (
        <AppContext.Provider value={{provisiones}}>
            {children}
        </AppContext.Provider>
    )
}