import React from 'react';
import PageTitle from '../components/PageTitle';
import Item from '../components/Item';

const FavoritesPage = () => (
  <div>
    <PageTitle text="Избранное" count={4} />
    <Item />
    <Item />
    <Item />
    <Item />
  </div>
)

export default FavoritesPage;
