import React, { useState, useContext } from 'react'

//in Context we join the functionality from single files
const AppContext = React.createContext();

const AppProvider = ({children}) => {

    //używamy hooka uses state na modułach sidebar i modal
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }


    return <AppContext.Provider value={{
        isModalOpen, isSidebarOpen,
        openModal, openSidebar,
        closeModal, closeSidebar
    }}>
        {children}</AppContext.Provider>
}

//custom hook 
//react hook's name must start from use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}

//appprovider musi mieć children i musi je zwracać