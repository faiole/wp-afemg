import React, { useState } from 'react';
import { connect } from "frontity";

import Burger from './Burger';
import Menu from './Menu';

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
}
 
export default connect(MobileHeader);