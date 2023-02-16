import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: 'uploads',
    },
  },
  schema: {
    collections: [
      {
        label: "Global",
        name: "global",
        path: "content/global",
        format: "json",
        fields: [

          // Navbar
          {
            type: "object",
            label: "Navbar",
            name: "navbar",
            fields: [
              {
                type: "object",
                label: "CTA Button",
                name: "cta",
                fields: [
                  {
                    type: "string",
                    label: "CTA Label",
                    name: "label",
                    required: true,
                  },
                  {
                    type: "string",
                    label: "CTA Link",
                    name: "href",
                    required: true,
                  },
                ],
              },
              {
                type: "object",
                label: "Nav Links",
                name: "navlinks",
                list: true,
                // ui: {
                //   itemProps: (item) => {
                //     return { label: item?.label };
                //   },
                // },
                fields: [
                  {
                    type: "string",
                    label: "Link Label",
                    name: "label",
                    // required: true,
                  },
                  {
                    type: "string",
                    label: "Link",
                    name: "href",
                  }
                ],
              },
            ],
          },

          // Footer
          {
            type: "object",
            label: "Footer",
            name: "footer",
            fields: [
              {
                type: "string",
                label: "Address Line 1",
                name: "addressLine1",
              },
              {
                type: "string",
                label: "Address Line 2",
                name: "addressLine2",
              },
              {
                type: "string",
                label: "Address Line 3",
                name: "addressLine3",
              },
              {
                type: "string",
                label: "Email",
                name: "email",
              },
              {
                type: "string",
                label: "Phone",
                name: "phone",
              },
              {
                type: "string",
                label: "Google Maps Link",
                name: "googleMapsLink",
              },
              {
                type: "string",
                label: "Facebook Link",
                name: "facebookLink",
              },
              {
                type: "string",
                label: "Instagram Link",
                name: "instagramLink",
              },
              {
                type: "string",
                label: "Youtube Link",
                name: "youtubeLink",
              },
              {
                type: "string",
                label: "Tripadvisor Link",
                name: "tripadvisorLink",
              },
            ],
          },
        ],
      },

      // Page component
      {
        label: "Pages",
        name: "pages",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "object",
            label: "Sections",
            name: "sections",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                type: "string",
                label: "Title",
                name: "title",

              },
              {
                type: "rich-text",
                label: "Section",
                name: "section",
                isBody: true,
                templates: [
                  {
                    name: "TestComp",
                    label: "TestComp",
                    fields: [
                      {
                        name: "inputColor",
                        label: "Color",
                        type: "string",
                      }
                    ],
                  },
                  {
                    name: "SideBySide",
                    label: "SideBySide",
                    fields: [
                      {
                        type: "string",
                        label: "Header",
                        name: "header",
                      },
                      {
                        type: "string",
                        label: "Subheader",
                        name: "subheader",
                      },
                      {
                        type: "string",
                        label: "Body",
                        name: "body",
                      },
                    ],
                  },

                  {
                    label: "Carousel",
                    name: "Carousel",
                    fields: [
                      {
                        type: "object",
                        label: "Carousel Images",
                        name: "carouselImages",
                        list: true,
                        fields: [
                          {
                            type: "image",
                            label: "Carousel Image",
                            name: "carouselImage",
                          }
                        ]
                      }
                    ]
                  }

                ],
              },
            ],
          },
        ],
      },
    ]
  }
});



          // // <Carousel> component
          // {
          //   label: "Carousel",
          //   name: "carousel",
          //   path: "content/carousel",
          //   format: "json",
          //   ui: {
          //     router: ({ document }) => {
          //       return '/'
          //     },
          //   },
          //   fields: [
          //     {
          //       type: "object",
          //       label: "Carousel",
          //       name: "carousel",
          //       list: true,
          //       fields: [
          //         {
          //           type: "image",
          //           label: "Carousel Image",
          //           name: "carouselImage",
          //         }
          //       ]
          //     }
          //   ]
          // }
        // ],
      // },
// });
