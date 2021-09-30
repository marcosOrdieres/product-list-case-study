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
import Dropdown from '../../Components/Dropdown';
import Option from '../../Components/Option';
import CheckboxField from '../../Components/CheckboxField';
import { useFetchParsed } from '../../hooks/useFetchParsed';

const HEADER_PRODUCTS = ['title', 'id', 'gender', 'price', 'sale price', 'image']
const ALL_GENDERS = 'All genders'
const SEARCHED_LIST = 'search'
export const COMPLETE_LIST = 'complete'

export const ProductsScreen = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const { productRows, searchedRows, numberOfEntries, setProductRows, setNumberOfEntries, parseCsvToJson } =
    useFetchParsed();

  const searchByText = (text: string) => {
    parseCsvToJson(SEARCHED_LIST)
    if (text) {
      setProductRows(
        searchedRows.filter((product: ProductType) => product.title.toLowerCase().includes(text))
      )
    }
  };

  const searchByGender = (event: any) => {
    if (event.target.value === ALL_GENDERS) {
      parseCsvToJson(SEARCHED_LIST)
      setProductRows(searchedRows)
    } else {
      setProductRows(
        searchedRows.filter((product: ProductType) => product.gender === event.target.value)
      )
      parseCsvToJson(SEARCHED_LIST)
    }
  };

  const searchBySales = () => {
    if (!checked) {
      parseCsvToJson(SEARCHED_LIST)
      setProductRows(
        searchedRows.filter((product: ProductType) => product?.sale_price < product?.price)
      )
      setChecked(true)
    } else {
      parseCsvToJson(SEARCHED_LIST)
      setProductRows(searchedRows)
      setChecked(false)
    }
  };

  useEffect(() => {
    parseCsvToJson(SEARCHED_LIST)
  }, [parseCsvToJson]);

  useEffect(() => {
    parseCsvToJson(COMPLETE_LIST)
  }, [numberOfEntries, parseCsvToJson]);

  return (
    <>
      <MainLayout>
        <StickyContainer>
          <p style={{ fontSize: 30, color: '#3399ff' }}>Search and Filter Products</p>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-around' }}>

            <SearchBar onChangeText={(text: string) => searchByText(text.toLowerCase())} />

            <Dropdown
              formLabel="Choose a gender"
              onChange={searchByGender}
              action="/"
            >
              <Option selected value="All genders" />
              <Option value="male" />
              <Option value="female" />
              <Option value="unisex" />
            </Dropdown>

            <CheckboxField
              checked={checked}
              onChange={searchBySales}
              textLabel='Items on Sale'
            />
          </div>

          <HeaderProducts headerProducts={HEADER_PRODUCTS} />

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
        <div style={{ paddingTop: 50, width: '100%' }} />
      </MainLayout>
    </>
  );
};