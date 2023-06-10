import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

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
      <div className="col s3">
        <div className="categories">
          <h4>Categories</h4>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  className={`category-item ${
                    selectedCategoryId === category.id ? 'active' : ''
                  }`}
                  onClick={() => filterByCategory(category.id)}
                >
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      marginBottom: '0.5rem',
                    }}
                  />
                  <span>{category.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col s9">
        <div className="dishes">
          <h4>Dishes</h4>
          {selectedCategoryId ? (
            <ul>
              {dishes.map((dish) => (
                <li key={dish.id}>
                  <div className="dish-item">
                    <img src={dish.imageUrl} alt={dish.name} />
                    <div className="dish-details">
                      <h5>{dish.name}</h5>
                      <p>{dish.description}</p>
                      <p>Price: {dish.price}</p>
                    </div>
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