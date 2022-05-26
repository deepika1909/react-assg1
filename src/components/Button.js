import './Button.css';
import React,{useState} from 'react';
import Modal from 'react-modal' ;

Modal.setAppElement('#root');
const Button = (data) => {
  console.log(data);
  const [modalIsOpen , setModalIsOpen] =useState(false);
  return (
    <div className='button'>
      <button class='btn btn1'
        onClick={() => setModalIsOpen(true)}>
      View Details</button>
      <Modal 
        isOpen={modalIsOpen} 
        style={
          {
            overlay: {
              position: 'fixed',
              top: 200,
              left: 200,
              right: 200,
              bottom: 200,
              backgroundColor: '#009879'
            }
          }
        }
      >
        <h2>First name is {data.DataItems[1]} and Last name is {data.DataItems[2]}</h2>
        <div>
          <button class='btn btn1' onClick={()=>setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  )
}

export default Button