import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import MainLayout from '../../Components/MainLayout';
import SearchBar from '../../Components/SearchBar/SearchBar';
import HeaderProducts from '../../Components/HeaderProducts';
import CardList from '../../Components/CardList';
import ProductItem from '../../Components/ProductItem';
import { mockedProductsObject } from '../../products';
import Button from '../../Components/Button';

export type ProductType = {
  additional_image_link: string[] | string | null,
  gender: string | null,
  gtin: string | null,
  image_link: string | null,
  price: string | null,
  sale_price: string | null,
  title: string
}


const headerProducts = ['title', 'id', 'gender', 'price', 'sale price', 'image']

export const ProductsScreen = () => {
  const [rows, setRows] = useState<any>([]);
  const [numberOfEntries, setNumberOfEntries] = useState(10);

  const [mockedProducts, setMockedProductsObject] = useState<any>(mockedProductsObject);

  // const transactionsEntriesFiltered = transactions.filter(
  //   transaction => transaction.id <= numberOfEntries
  // );

  const searchText = (text: string) => {
    setMockedProductsObject(
      mockedProductsObject.filter((product: any) => product.title.toLowerCase().includes(text))
    )
  };

  useEffect(() => {
    Papa.parse("/products.csv", {
      download: true,
      header: true,
      complete: productData => {
        setRows(productData?.data.slice(0, 99));
      }
    });
  }, []);
  return (
    <MainLayout>
      <p>Search Product</p>

      <div style={{ position: 'sticky', top: 0, zIndex: 1 }}>
        <SearchBar onChangeText={(text: string) => searchText(text.toLowerCase())} />
        <HeaderProducts headerProducts={headerProducts} />
      </div>
      {rows.map((product: any) => {
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

      <Button
        text="Load More"
        onClick={() => setNumberOfEntries(numberOfEntries + 10)}
      />
    </MainLayout>
  );
};
