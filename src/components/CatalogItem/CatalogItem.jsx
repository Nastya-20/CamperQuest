import React from "react";
import css from "./CatalogItem.module.css";

const CatalogItem = ({
  image,
  name,
  reviewsCount,
  rating,
  location,
  description,
  features,
  price,
  onShowMore,
  onToggleFavorite,
  isFavorite,
}) => {
  return (
    <div className={css.catalogItem}>
      {/* Зображення кемпера */}
      <img src={image} alt={name} className={css.image} />

      {/* Назва кемпера */}
      <h3 className={css.name}>{name}</h3>

      {/* Рейтинг та відгуки */}
      <div className={css.reviews}>
        <span className={css.rating}>⭐ {rating.toFixed(1)}</span>
        <span className={css.reviewsCount}>({reviewsCount} reviews)</span>
      </div>

      {/* Локація */}
      <p className={css.location}>📍 {location}</p>

      {/* Короткий опис */}
      <p className={css.description}>{description}</p>

      {/* Іконки характеристик */}
      <div className={css.features}>
        {features.map((feature, index) => (
          <span key={index} className={css.feature}>
            <svg className={css.icon}>
              <use href={`/public/icons.svg#${feature.icon}`} />
            </svg>
            <span className={css.featureName}>{feature.name}</span>
          </span>
        ))}
      </div>

      {/* Ціна */}
      <p className={css.price}>
        Price: <strong>{price}</strong>
      </p>

      {/* Кнопка Show more */}
      <button className={css.showMoreButton} onClick={onShowMore}>
        Show more
      </button>

      {/* Іконка улюблених */}
      <button
        className={`${css.favoriteButton} ${isFavorite ? css.active : ""}`}
        onClick={onToggleFavorite}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <svg className={css.heartIcon}>
          <use href="/public/icons.svg#icon-heart" />
        </svg>
      </button>
    </div>
  );
};

export default CatalogItem;
