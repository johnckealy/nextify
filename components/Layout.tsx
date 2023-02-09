import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'

interface LayoutProps {
  globalContent: any;
  children: React.ReactNode;
}

const Layout = ({ globalContent, children }: LayoutProps) => {
  return (
    <>
      <Navbar navbarContent={globalContent.navbar} />
      {children}
      <Footer footerContent={globalContent.footer} />
    </>
  );
}


export default Layout;
