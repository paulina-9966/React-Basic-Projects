import React from 'react'
import cat from './cat.jpg'
import { FaTimes } from 'react-icons/fa'
import {useGlobalContext} from './context'

const Modal = () => {
  const {isModalOpen, closeModal} = useGlobalContext();

  return (
    <div className={`
    ${isModalOpen ? 'modal-overlay show-modal'
     : 'modal-overlay' }`}
     >
      <div className='modal-container'>
        <h3>cat content</h3>
        <img src={cat} className="cat" alt="cat" />
        <h4>Gratulation! You see the Cat</h4>
        <button className='close-modal-btn' onClick=
        {closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )


}

export default Modal
