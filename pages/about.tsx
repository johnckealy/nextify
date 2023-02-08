import Navbar from '@/components/navbars/StickyNavbar'



const About = ({navItems}: any) => {
  return (
    <>
      <Navbar navItems={navItems} active="/about" />
      About
    </>
  );
}





export async function getStaticProps() {
  const navItems = {
    cta: {
      label: 'Take Action',
      href: '/'
    },
    links: [
      {
        label: 'Home',
        href: '/'
      },
      {
        label: 'About',
        href: '/about'
      },
      {
        label: 'Services',
        href: '/services'
      },
      {
        label: 'Projects',
        href: '/projects'
      },
    ]
  }

  return {
    props: {
      navItems
    }
  }
}


export default About;
