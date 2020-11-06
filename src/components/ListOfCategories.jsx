import React, { useState, useEffect } from 'react';
import { List, Item } from '../styles/components/ListOfCategories';
import Category from './Category';
import { categories as mockCategories } from '../api/db.json';

export const ListOfCategories = () => {
  const [categories, setCategories] = useState(mockCategories);

  useEffect(() => {
    fetch('noobgram-server-8vm4vonlx.vercel.app')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      });
  });

  return (
    <List>
      {mockCategories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
};

export default ListOfCategories;
