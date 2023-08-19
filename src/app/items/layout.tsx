import { Header } from '@/comonents/Header';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => (
  <div>
    <Header />
    <h1>Items</h1>
    <div>{children}</div>
  </div>
);

export default Layout;
