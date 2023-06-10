import React from 'react';
import './materialize.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import MenuPage from './Pages/MenuPage';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/menu" element={<MenuPage/>}/>
        </Routes>
      </div>
  );
}

export default App;

    
  // const [categories,setCategories] = React.useState([])
  // React.useEffect(()=>{ // מאפשר לנו לעשות דברים שלא קשורים לריאקט, בתוך ריאקט, כמו בועה
  //     axios.get('http://localhost:5000/categories').then(response=>{
  //         setCategories(response.data)  
  //     })
  // },[])


// בשביל axios
// api.add_resource(DishAll,'/dishes')
// api.add_resource(DishOne,'/dishes/<int:id>')
// api.add_resource(CategoryAll,'/categories')
// api.add_resource(CategoryOne,'/categories/<int:id>')