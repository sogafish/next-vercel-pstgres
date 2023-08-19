"use client"
import { useCallback } from 'react';
import { Item } from '@prisma/client';
import { css } from "../../../styled-system/css";
import { ItemForm } from '@/comonents/ItemForm';
import { flex } from '../../../styled-system/patterns';

type Props = {
  isLoading: boolean;
  data: Item[];
  removeItem: (v: number) => void;
  addItem: (v: Item) => void;
};

export const ItemsPresenter = (props: Props) => {
  const {
    isLoading,
    data,
    removeItem,
    addItem,
  } = props;

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
          <ListItem item={item} removeItem={removeItem} />
        </li>
      )}
    </ul>;
  }, [isLoading, data, removeItem]);

  return (
    <main>
      <ItemForm successCallback={addItem} />
      {renderList()}
    </main>
  )
}
const ListItem = ({ item, removeItem }:
  { item: Item, removeItem: (v: number) => void }
) => {
  const onDelete = useCallback((id: number) => {
    fetch(`/api/item/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(async (res: Response) => {
      const data = await res.json();
      if (data.status === 200) {
        removeItem(data.data.id)
      }
    });
  }, [removeItem]);

  return (
    <div className={itemStyle}>
      <p>{item.title}</p>
      <p>{item.description || ''}</p>
      <p>{item?.updatedAt?.toString?.() || '--:--:--'}</p>
      <div className={deleteButtonStyle} onClick={() => onDelete(item.id)}>DELETE</div>
    </div>
  );
};

const itemStyle = flex({
  padding: '8px',
  borderBottomWidth: '1px',
  borderColor: 'gray.300',
  columnGap: 2,
});
const deleteButtonStyle = css({
  cursor: 'pointer',
  fontWeight: 500,
  color: 'red.400',
});
