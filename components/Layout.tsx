import Navbar from '@/components/navbars/Navbar'
import Footer from '@/components/Footer'
import React from 'react'

interface LayoutProps {
  globalContent: any;
  children: React.ReactNode;
}

const Layout = ({ globalContent, children }: LayoutProps) => {
  return (
    <>
      <Navbar navItems={globalContent.data.global.navbar} active="/" />
      {children}
      <Footer footerContent={globalContent.data.global.footer} />
    </>
  );
}


export default Layout;
