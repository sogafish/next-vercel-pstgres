import { useCallback, useEffect, useState } from 'react';
import { Item } from '@prisma/client';
import Link from 'next/link'
import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";

type Props = {
  title: string;
};

const containerStyle = flex({
  backgroundColor: 'DARK_CYAN',
  direction: 'row',
  color: 'white',
  fontWeight: 600,
  height: '120px',
  padding: '20px',
  position: 'fixed',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Header = (props: Props) => {
  const { title } = props;

  return (
    <header className={containerStyle}>
      <p className={css({
        fontWeight: 600,
        fontSize: '5xl',
      })}>{title}</p>
      <ul>
        <li className={css({
          _hover: { color: 'lightgray' },
        })}><Link href="/items">Items</Link></li>
      </ul>
    </header>
  );
};