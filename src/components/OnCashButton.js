import React, { useRef }   from 'react';
import ReactToPrint from 'react-to-print';
import ReceiptTemplate from './ReceiptTemplate'
function OnCashButton(){
    const componentRef = useRef();
    return (
        <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
        copyStyles
        
      />
      <ReceiptTemplate ref={componentRef} />
    </div>
    )
    
}
export default OnCashButton;