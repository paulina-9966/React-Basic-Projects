import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context'

const Home = () => {
  //const data = useGlobalContext(AppContext);
  //console.log(data);

  //mamy tu dostęp do zmiennych z context
  const {openSidebar, openModal} = useGlobalContext();


  return (

    <main>
      <button className='sidebar-toggle' onClick=
      {openSidebar}>
        <FaBars />
      </button>
      <button className='btn' 
      onClick={openModal}>
        show modal
      </button>
    </main>

  )
}

export default Home
