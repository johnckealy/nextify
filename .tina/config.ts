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
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "Global",
        name: "global",
        path: "content/global",
        format: "json",
        // ui: {
        //   router: () => `/`,
        // },
        fields: [
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
                ui: {
                  itemProps: (item) => {
                    return { label: item?.label };
                  },
                },
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
          }
        ],
      },
    ],
  },
});
