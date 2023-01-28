
import { createPortal } from "react-dom"
import { useEffect } from "react";
const modalRoot = document.querySelector('#modal-root')

export const Modal =({onClose,srcImg, tags})=>
{ 

    useEffect(() => {
        //  console.log("effect")
         const  handleKeyD = e => {
        if (e.code === 'Escape') {
                
        onClose()
        }

    }
        window.addEventListener('keydown', handleKeyD)
        
         return () => {
            //  console.log("Unmounting phase: same when componentWillUnmount runs");
              window.removeEventListener('keydown', handleKeyD )
    };

    }, [onClose])

 
  const handleBackdropClick = e => {
            
     if (e.currentTarget === e.target) {
         onClose()
        //  console.log("backdrop")
     }
}

return createPortal( <div className="overlay" onClick={handleBackdropClick}>
  <div className="modal">
    <img src={srcImg}  alt={tags} />
  </div>
</div>, modalRoot)
}
  

 