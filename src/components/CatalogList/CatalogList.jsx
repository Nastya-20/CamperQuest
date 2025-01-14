import React from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./CatalogList.module.css";

// Масив з одним об'єктом
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
];

const handleShowMore = (id) => {
  console.log(`Show more details for camper ID: ${id}`);
};

const handleToggleFavorite = (id) => {
  console.log(`Toggled favorite state for camper ID: ${id}`);
};

const CatalogList = ({ campers, onShowMore, onToggleFavorite }) => {
  return (
    <div className={css.catalogList}>
      {campers.map((camper) => (
        <CatalogItem
          key={camper.id}
          image={camper.image}
          name={camper.name}
          reviewsCount={camper.reviewsCount}
          rating={camper.rating}
          location={camper.location}
          description={camper.description}
          features={camper.features}
          price={camper.price}
          onShowMore={() => onShowMore(camper.id)}
          onToggleFavorite={() => onToggleFavorite(camper.id)}
          isFavorite={camper.isFavorite}
        />
      ))}
    </div>
  );
};

export default CatalogList;
