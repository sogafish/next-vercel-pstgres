"use client"
import { useCallback, useEffect, useState, useMemo } from 'react';
import { Item } from '@prisma/client';
import { Header } from "@/comonents/Header";
import { css } from "../../../styled-system/css";
import { ItemForm } from '@/comonents/ItemForm';

const Items = () => {
  const [data, setData] = useState<Item[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('/api/item')
      .then((res) => res.json())
      .then(({ data }: { data: Item[] }) => {
        setData(data)
        setLoading(false)
      });
  }, [])

  const addItem = useCallback((v: Item) => {
    setData((prev) => {
      return [...prev, v];
    });
  }, []);

  const renderList = useCallback(() => {
    if (isLoading) {
      return <p>Loading...</p>
    }

    if (!data || data?.length === 0) {
      return <p>No Item</p>
    }

    return <ul>
      {data.map((item: Item) => 
        <li key={`list-item-${item.id}`}>
          <ListItem item={item} />
        </li>
      )}
    </ul>;
  }, [isLoading, data]);

  return (
    <main>
      <Header title="Items" />
      <div className={css({
        paddingTop: '120px',
        width: '600px',
        margin: '0 auto',
      })}>
      <ItemForm successCallback={addItem} />
      {renderList()}
      </div>
    </main>
  )
}

const ListItem = ({ item }: { item: Item }) => {
  return (
    <div>
      <p>{item.title}</p>
    </div>
  );
};


export default Items;
