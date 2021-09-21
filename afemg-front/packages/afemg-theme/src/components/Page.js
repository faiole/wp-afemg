import { isDerived } from 'frontity';
import React from 'react';
import { connect, css, styled } from "frontity";

import Contact from './Pages/Contact';

const Page = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  return (
    <div>
      <Contact page={page} />
    </div>
  );
}
 
export default connect(Page);