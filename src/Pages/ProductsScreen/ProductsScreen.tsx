import React, { useCallback, useEffect, useState } from 'react';
import Papa from 'papaparse';
import MainLayout from '../../Components/MainLayout';
import SearchBar from '../../Components/SearchBar/SearchBar';
import HeaderProducts from '../../Components/HeaderProducts';
import CardList from '../../Components/CardList';
import ProductItem from '../../Components/ProductItem';
import Button from '../../Components/Button';
import { StickyContainer } from '../../Components/StickyContainer/StickyContainer';

export type ProductType = {
  additional_image_link: string[],
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
  const [searchedRows, setSearchedRows] = useState<any>([]);
  const [numberOfEntries, setNumberOfEntries] = useState<number>(100);

  const searchText = (text: string) => {
    parseCsvToJsonSearch()
    if (text) {
      setRows(
        searchedRows.filter((product: any) => product.title.toLowerCase().includes(text))
      )
    }
  };

  const parseCsvToJson = useCallback(() => {
    Papa.parse("/products.csv", {
      download: true,
      header: true,
      complete: productData => {
        setRows(productData?.data.slice(0, numberOfEntries));
      }
    });
  }, [numberOfEntries]);

  const parseCsvToJsonSearch = () => {
    Papa.parse("/products.csv", {
      download: true,
      header: true,
      complete: productData => {
        setSearchedRows(productData?.data.slice(0, numberOfEntries));
      }
    });
  };

  useEffect(() => {
    parseCsvToJson()
  }, [numberOfEntries, parseCsvToJson]);

  return (
    <MainLayout>
      <p>Search Product</p>
      <StickyContainer>
        <SearchBar onChangeText={(text: string) => searchText(text.toLowerCase())} />
        <HeaderProducts headerProducts={headerProducts} />
      </StickyContainer>
      {rows?.map((product: ProductType, index: number) => {
        console.log('dsdsd', index + 1)
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
        onClick={() => setNumberOfEntries(numberOfEntries + 100)}
      />
    </MainLayout>
  );
};
