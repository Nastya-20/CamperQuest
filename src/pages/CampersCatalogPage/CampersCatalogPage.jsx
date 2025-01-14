import React, { useState } from 'react';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';
import CatalogList from '../../components/CatalogList/CatalogList';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';
import css from '../CampersCatalogPage/CampersCatalogPage.module.css';

const campersData = [
  {
    id: 1,
    image: "/images/mavericks.jpg",
    name: "Mavericks",
    reviewsCount: 120,
    rating: 4.8,
    location: "Kyiv, Ukraine",
    description: "A perfect camper for your next adventure!",
    features: [
      { name: "Automatic", icon: "icon-automatic" },
      { name: "Petrol", icon: "icon-petrol" },
      { name: "Kitchen", icon: "icon-kitchen" },
      { name: "AC", icon: "icon-ac" },
    ],
    price: "€8000.00",
    isFavorite: false,
  },
  {
    id: 2,
    image: "/images/explorer.jpg",
    name: "Explorer",
    reviewsCount: 90,
    rating: 4.5,
    location: "Odesa, Ukraine",
    description: "An ideal choice for your coastal trip!",
    features: [
      { name: "Manual", icon: "icon-manual" },
      { name: "Diesel", icon: "icon-diesel" },
      { name: "Shower", icon: "icon-shower" },
      { name: "Heating", icon: "icon-heating" },
    ],
    price: "€9500.00",
    isFavorite: true,
  },
];

const CampersCatalogPage = () => {
  const [campers, setCampers] = useState(campersData);

  const handleShowMore = (id) => {
    console.log(`Show more details for camper ID: ${id}`);
  };

  const handleToggleFavorite = (id) => {
    setCampers((prevCampers) =>
      prevCampers.map((camper) =>
        camper.id === id
          ? { ...camper, isFavorite: !camper.isFavorite }
          : camper
      )
    );
  };

  return (
    <div className={css.catalogPage}>
      <FiltersPanel />
      <CatalogList
        campers={campers} 
        onShowMore={handleShowMore}
        onToggleFavorite={handleToggleFavorite}
      />
      <LoadMoreButton />
    </div>
  );
};

export default CampersCatalogPage;

