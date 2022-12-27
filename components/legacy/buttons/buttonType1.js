import Link from 'next/link'

const Btn = ({ children, href, className }) => {
  return (
    (<Link href={href} className={className}>

      {children.toUpperCase()}

    </Link>)
  );
}
export { Btn }
