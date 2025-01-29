import { useState } from 'react';
import './Expand.css';

function Expand({ title, children }) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="expand">
      <button
        onClick={ () => {
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
        className="expand__title"
      >
        {title}
      </button>
      {isOpen && (
        <div className="expand__body">
          {children}
        </div>
       )}
    </div>
  );
}

export default Expand;