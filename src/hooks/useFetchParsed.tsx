import { useCallback, useEffect, useState } from 'react';
import { ProductType } from '../interfaces/Product.interface';
import Papa from 'papaparse';
import { COMPLETE_LIST } from '../Pages/ProductsScreen/ProductsScreen';

export const useFetchParsed: any = () => {
    const [productRows, setProductRows] = useState<ProductType[]>([]);
    const [searchedRows, setSearchedRows] = useState<ProductType[]>([]);
    const [numberOfEntries, setNumberOfEntries] = useState<number>(100);

    const parseCsvToJson = useCallback((type: string) => {
        Papa.parse("/products.csv", {
            download: true,
            header: true,
            complete: productData => {
                if (type === COMPLETE_LIST) {
                    setProductRows(productData?.data.slice(0, numberOfEntries) as ProductType[]);
                } else {
                    setSearchedRows(productData?.data.slice(0, numberOfEntries) as ProductType[]);
                }
            }
        });
    }, [numberOfEntries]);

    return { productRows, searchedRows, numberOfEntries, setProductRows, setNumberOfEntries, parseCsvToJson }
};
