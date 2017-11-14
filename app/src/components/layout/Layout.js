import React from 'react';
import Toolbar from '../navigation/toolbar/Toolbar';

const layout = (props) => {
  return (
    <div>
      <Toolbar/>
      {props.children}
    </div>
  );
};

export default layout; 