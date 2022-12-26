
const title = "Change Me!"
const genericDescription = "A description of my site";
const url = "https://www.example.com"


interface SEOFields {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: {
    [key: string]: any;
  }
  twitter: {
    [key: string]: any;
  }
}

const SEO: SEOFields = {
  title: title,
  description: genericDescription,
  canonical: url,
  openGraph: {
    url: url,
    title: title,
    description: genericDescription,
    images: [
      {
        url: '/images/john-og.jpg',
        width: 1200,
        height: 630,
        alt: 'An image',
        type: 'image/jpeg',
      },
    ],
    site_name: 'My site',
  },
  twitter: {
    title: title,
    image: '/images/john-og.jpg',
    description: genericDescription,
  }
};

export default SEO;
