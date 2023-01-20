import * as React from 'react';
import Navbar from '../Navbar';
import Header from '../Header';
import Footer from '../Footer';
// import Default from '../Default';
import TinyFooter from '../TinyFooter';
// import { render } from '@testing-library/react';

export default function Layout(props){
  return(<>
      <Header/>
      <Navbar/>
      {props.children}
      <TinyFooter/>
      <Footer/>
  </>

  );
}
