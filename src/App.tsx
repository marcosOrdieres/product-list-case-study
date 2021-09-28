import React, { useEffect, useState } from 'react';
import './App.css';
import Papa from 'papaparse';
import Container from './Components/Container';
import SearchBar from './Components/SearchBar';

export type ProductType = {
  additional_image_link: string[] | string | null,
  gender: string | null,
  gtin: string | null,
  image_link: string | null,
  price: string | null,
  sale_price: string | null,
  title: string
}

function App() {
  const [rows, setRows] = useState<any>([]);

  useEffect(() => {
    Papa.parse("/products.csv", {
      download: true,
      header: true,
      complete: productData => {
        setRows(productData?.data);
      }
    });
  }, []);

  return (
    <Container>
      <p>Search Product</p>
      <SearchBar onChangeText={() => console.log('onChangeText')} />
    </Container>
  );
}

export default App;
