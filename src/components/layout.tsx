import { ReactNode } from 'react';
import clsx from 'clsx';
import Header from './header';

type TContainerProps = {
  children: ReactNode;
  extraClass?: string;
  classMain?: string;
};

function Layout({ children, extraClass, classMain }: TContainerProps) {
  return (
    <div className={clsx('page', extraClass)}>
      <Header />
      <main className={clsx('page__main', classMain)}>{children}</main>
    </div>
  );
}

export default Layout;
