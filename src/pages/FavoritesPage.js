import React from 'react';
import PageTitle from '../components/PageTitle';
import Item from '../components/Item';
import favorite from "../assets/favorite.svg";

const FavoritesPage = () => (
  <div>
    <PageTitle text="Избранное" count={4} />
    <Item name="Iphone 7 S" img={favorite} coast="0,006" date="06.04.2018"/>
  </div>
)

export default FavoritesPage;
