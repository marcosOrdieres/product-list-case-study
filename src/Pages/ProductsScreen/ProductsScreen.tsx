import React, { useCallback, useEffect, useState } from 'react';
import Papa from 'papaparse';

import MainLayout from '../../Components/MainLayout';
import SearchBar from '../../Components/SearchBar/SearchBar';
import HeaderProducts from '../../Components/HeaderProducts';
import CardList from '../../Components/CardList';
import ProductItem from '../../Components/ProductItem';
import Button from '../../Components/Button';
import { StickyContainer } from '../../Components/StickyContainer/StickyContainer';
import { ProductType } from '../../interfaces/Product.interface';

const headerProducts = ['title', 'id', 'gender', 'price', 'sale price', 'image']

export const ProductsScreen = () => {
  const [productRows, setProductRows] = useState<ProductType[]>([]);
  const [searchedRows, setSearchedRows] = useState<ProductType[]>([]);
  const [numberOfEntries, setNumberOfEntries] = useState<number>(100);

  const searchText = (text: string) => {
    parseCsvToJsonSearch()
    if (text) {
      setProductRows(
        searchedRows.filter((product: ProductType) => product.title.toLowerCase().includes(text))
      )
    }
  };

  const parseCsvToJson = useCallback(() => {
    Papa.parse("/products.csv", {
      download: true,
      header: true,
      complete: productData => {
        setProductRows(productData?.data.slice(0, numberOfEntries) as ProductType[]);
      }
    });
  }, [numberOfEntries]);

  const parseCsvToJsonSearch = () => {
    Papa.parse("/products.csv", {
      download: true,
      header: true,
      complete: productData => {
        setSearchedRows(productData?.data.slice(0, numberOfEntries) as ProductType[]);
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
      {productRows?.map((product: ProductType) => {
        return (
          <React.Fragment key={product.gtin}>
            <CardList.Container>
              <CardList.Item>
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
