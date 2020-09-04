import React, { useState, useEffect } from 'react';
import axios from "axios"
import './App.css';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(`http://localhost:5000/api/users`)
      { console.log(result.data) }
      setItems(result.data)
    }
    fetchItems()
  }, [query])

  return (
    <div className="App">
      {items}
    </div>
  );
}

export default App;
