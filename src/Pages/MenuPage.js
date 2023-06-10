import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../menu.css';

function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/categories').then((response) => {
      console.log('Categories:', response.data);
      setCategories(response.data);
    });
  }, []);

  function filterByCategory(category_id) {
    setSelectedCategoryId(category_id);
    axios
      .get(`http://localhost:5000/dishes?category_id=${category_id}`)
      .then((response) => {
        console.log('Dishes:', response.data);
        setDishes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching dishes:', error);
      });
  }

  return (
    <div className="row">
      <div className="col s3 categories">
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <button
                className={`category-button ${
                  selectedCategoryId === category.id ? 'active' : ''
                }`}
                onClick={() => filterByCategory(category.id)}
              >
                <div className="category-content">
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    className="category-image"
                  />
                  <span className="category-name">{category.name}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="col s9">
        <div className="dishes">
          {selectedCategoryId ? (
            <ul className="dish-list">
              {dishes.map((dish) => (
                <li key={dish.id} className="dish-item">
                  <div className="dish-image">
                    <img
                      src={dish.imageUrl}
                      alt={dish.name}
                      className="responsive-img"
                    />
                  </div>
                  <div className="dish-details">
                    <h5>{dish.name}</h5>
                    <p>{dish.description}</p>
                    <p>{dish.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Click the categories on your left to see the dishes</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
