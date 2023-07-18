import Link from 'next/link'
import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";

const containerStyle = flex({
  backgroundColor: 'DARK_CYAN',
  direction: 'row',
  color: 'white',
  fontWeight: 600,
  height: '120px',
  padding: '20px',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Header = () => {
  return (
    <header className={containerStyle}>
      <Link className={css({
          _hover: { color: 'lightgray' },
        })} href="/">
      <p className={css({
        fontWeight: 600,
        fontSize: '5xl',
      })}>TEST</p></Link>
      <ul>
        <li className={css({
          _hover: { color: 'lightgray' },
        })}><Link href="/items">Items</Link></li>
      </ul>
    </header>
  );
};