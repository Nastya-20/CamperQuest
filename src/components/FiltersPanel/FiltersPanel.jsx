import React, { useState } from 'react';
import css from './FiltersPanel.module.css';

const FiltersPanel = ({ onSearch }) => {
  // Стейти для фільтрів
  const [location, setLocation] = useState("");
  const [equipment, setEquipment] = useState({
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    Bathroom: false,
  });

  const [vehicleType, setVehicleType] = useState({
    Van: false,
    FullyIntegrated: false,
    Alcove: false,
  });
  // Ідентифікатор для SVG іконки
  const equipmentIcons = {
    AC: "icon-wind",
    Automatic: "icon-diagram",
    Kitchen: "icon-cup-hot",
    TV: "icon-tv",
    Bathroom: "icon-ph_shower",
  };

  const vehicleTypeIcons = {
    Van: "icon-bi_grid-1x2",
    FullyIntegrated: "icon-bi_grid",
    Alcove: "icon-bi_grid-3x3-gap",
  };

  // Обробники подій
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const toggleEquipment = (type) => {
    setEquipment((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const toggleVehicleType = (type) => {
    setVehicleType((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleSearch = () => {
    onSearch({ location, equipment, vehicleType });
  };

  return (
    <div className={css.filtersPanel}>
      {/* Локація */}
      <div className={css.filterGroup}>
        <label htmlFor="location" className={css.filtersLabel}>
          Location
        </label>
        <div className={css.inputContainer}>
          <input
            type="text"
            id="location"
            className={css.filtersInput}
            placeholder="City"
            value={location}
            onChange={handleLocationChange}
          />
          <svg className={css.navIcon}>
            <use href="/public/icons.svg#icon-Map" />
          </svg>
        </div>
      </div>
      <h3 className={css.filtersName}>Filters</h3>
      {/* Vehicle equipment */}
      <div className={css.filterGroup}>
        <p className={css.labelVehicle}>Vehicle equipment</p>
        <hr className={css.divider} />
        <div className={css.buttonsGroup}>
          {Object.keys(equipment).map((type) => (
            <button
              key={type}
              className={`${css.equipment} ${
                equipment[type] ? css.active : ""
              }`}
              onClick={() => toggleEquipment(type)}
              type="button"
            >
              <svg className={css.icon}>
                <use href={`/public/icons.svg#${equipmentIcons[type]}`} />
              </svg>
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Vehicle type */}
      <div className={css.filterGroup}>
        <p className={css.labelVehicle}>Vehicle type</p>
        <hr className={css.divider} />
        <div className={css.buttonsGroup}>
          {Object.keys(vehicleType).map((type) => (
            <button
              key={type}
              className={`${css.vehicle} ${
                vehicleType[type] ? css.active : ""
              }`}
              onClick={() => toggleVehicleType(type)}
              type="button"
            >
              <svg className={css.icon}>
                <use href={`/public/icons.svg#${vehicleTypeIcons[type]}`} />
              </svg>
              {type.replace(/FullyIntegrated/, "Fully\nIntegrated")}
            </button>
          ))}
        </div>
      </div>

      {/* Кнопка пошуку */}
      <button className={css.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default FiltersPanel;
