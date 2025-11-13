import React, { Fragment } from 'react';
import Header from '../components/header/header';
import Create from '../components/create/create';
import '../assets/pages/create.css';

const CreatePage = () => {
  return (
    <Fragment>
      <Header />
      <Create/>
    </Fragment>
  );
};

export default CreatePage;
