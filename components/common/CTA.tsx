import Link from 'next/link';
import React from 'react';


type Props = {
  href: string,
  children: React.ReactNode,
  className?: string,
}

const CTA = ({ children, href, className }: Props) => {
  return (
    <Link href={href} legacyBehavior>
      <div className="flex items-center">
        <button className={`btn border-none rounded-full px-12 transition duration-750 btn-primary ${className}`}>{children}</button>
      </div>
    </Link>
  );
}

export default CTA;
