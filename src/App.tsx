import React, { useEffect, useState } from 'react';
import './App.css';
import Papa from 'papaparse';
import SearchBar from './Components/SearchBar';
import CardList from './Components/CardList';
import ProductItem from './Components/ProductItem';
import MainLayout from './Components/MainLayout';
import HeaderProducts from './Components/HeaderProducts';

export type ProductType = {
  additional_image_link: string[] | string | null,
  gender: string | null,
  gtin: string | null,
  image_link: string | null,
  price: string | null,
  sale_price: string | null,
  title: string
}


const mockedProducts = [
  {
    additional_image_link: "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@22.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@21.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@20.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@19.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg",
    gender: "female",
    gtin: "2001007926858",
    image_link: "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg",
    price: "39.95 EUR",
    sale_price: "39.95 EUR",
    title: "Weekday THURSDAY Jeans Slim Fit black",
  },
  {
    additional_image_link: "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@22.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@21.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@20.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@19.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg",
    gender: "female",
    gtin: "2001008772980",
    image_link: "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg",
    price: "39.95 EUR",
    sale_price: "39.95 EUR",
    title: "Weekday THURSDAY Jeans Slim Fit black"
  },
  {
    additional_image_link: "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@22.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@21.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@20.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@19.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg",
    gender: "male",
    gtin: "55",
    image_link: "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg",
    price: "54.95 EUR",
    sale_price: "23 EUR",
    title: "Jeans Slim Fit black"
  }
]

const headerProducts = ['title', 'id', 'gender', 'price', 'sale price', 'image']

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

  console.log('rerer', rows)

  return (
    <MainLayout>
      <p>Search Product</p>
      <SearchBar onChangeText={() => console.log('onChangeText')} />

      <HeaderProducts headerProducts={headerProducts} />

      {mockedProducts.map((product: any) => {
        return (
          <React.Fragment key={product.gtin}>
            <CardList.Container key={product.gtin}>
              <CardList.Item key={product.gtin}>
                <ProductItem product={product} />
              </CardList.Item>
            </CardList.Container>
          </React.Fragment>

        );
      })}
    </MainLayout>
  );
}

export default App;
