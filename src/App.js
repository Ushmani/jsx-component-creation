import React from 'react';
import ButtonComponent from './components/ButtonComponent';

const App = () => {
  const handleButtonClick = () => {
    alert('Button Clicked!');
  };

  return (
    <div>
      <ButtonComponent label="Click Me" onClickHandler={handleButtonClick} />
    </div>
  );
};

export default App;
