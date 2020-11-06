import React from 'react';
import { GlobalStyles } from './styles/globalStyles';

import ListOfCategories from './components/ListOfCategories';
import ListOfPhotoCards from './components/LIstOfPhotoCards';
import Logo from './components/general/Logo';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  );
};

export default App;
