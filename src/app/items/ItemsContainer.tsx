"use client"
import { useCallback, useEffect, useState } from 'react';
import { Item } from '@prisma/client';
import { ItemsPresenter } from './ItemsPresenter';

export const ItemsContainer = () => {
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

  const removeItem = useCallback((id: number) => {
    setData((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }, []);

  return (
    <div>
      <ItemsPresenter
        data={data}
        isLoading={isLoading}
        addItem={addItem}
        removeItem={removeItem}
      />
    </div>
  )
}
