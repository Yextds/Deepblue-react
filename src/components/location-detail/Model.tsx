import * as React from "react"
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)', 
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#main');

function Model(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
   
  function openModal() {
    document.body.classList.add("overflow-hidden")
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    document.body.classList.remove("overflow-hidden")
    setIsOpen(false);
  }

  return (
    <div>
      
                        <a onClick={openModal} className="bg-filterIcon bg-no-repeat bg-left bg-[length:24px_auto]  leading-8 lg:leading-[26px] w-auto my-2 lg:my-0 h-8 lg:h-auto"
            type="button" data-modal-toggle="allergens-pdf" id="allergens-con">{props.name}</a>
                
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="relative w-full max-w-2xl xl:max-w-[70rem] max-h-[90vh] overflow-hidden notClickable">
        <div className="relative bg-white md:rounded-lg p-1 md:p-2">  
        <div className="flex justify-between items-start mb-5">
          <h2 className=" text-optimabold text-4xl text-center py-2 uppercase text-text-blue-dark w-full">{props.name} </h2>
          <button onClick={closeModal} type="button" id="closeButton" data-modal-toggle="allergens-pdf"
                    className="closeButton bg-closeIcon bg-no-repeat bg-center w-7 h-7 bg-[length:24px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.953" height="20.953" viewBox="0 0 20.953 20.953">
                        <path id="Icon_ionic-md-close" data-name="Icon ionic-md-close"
                            d="M28.477,9.619l-2.1-2.1L18,15.9,9.619,7.523l-2.1,2.1L15.9,18,7.523,26.381l2.1,2.1L18,20.1l8.381,8.381,2.1-2.1L20.1,18Z"
                            transform="translate(-7.523 -7.523)" fill="#115eac" />
                    </svg>
                </button>
                </div>
      <iframe className="window_open_pop h-[calc(90vh_-_112px)]"  width="900" height="550" id="command" src={`${props.c_documentURLDeepBlue1}#toolbar=0&navpanes=0&scrollbar=0&zoom=100`}></iframe>
      </div>
      </div>
      </Modal>
    </div>

  );
}
  
export default Model;