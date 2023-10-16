import hivepathImage from "@/public/assets/products/hivepath-media-image.png";

const hivepathData = {
  introData: {
    title: "About ",
    buttonTitle: "Visit Website",
    content: [
      {
        paragraph: `Hivepath is dedicated to creating a new, efficient approach to networking. Connect, share experiences, and delve into the pleasures of meaningful networking.
`,
        list: {
          type: "ordered",
          data: [
            { title: `Establishing a professional network` },
            {
              title: `Facilitating one-on-one discussions with professionals`,
            },
            {
              title: `Setting up a professional profile website`,
            },
            {
              title: `tailoring exclusive offerings to your specific requirements`,
            },
          ],
        },
      },
    ],
  },
  contributionData: {
    title: "My Key Contributions",
    content: [
      {
        list: {
          type: "ordered",
          data: [
            {
              title: `Built end to end Front application and design framework for the bluecom platform.`,
            },
            {
              title: `Played a crucial role in integrating multiple channels `,
              list: {
                type: "unordered",
                data: [
                  {
                    title: `Woocommerce`,
                  },
                  {
                    title: "Shopify",
                  },
                  {
                    title: "etsy",
                  },
                  {
                    title: "Ebay",
                  },
                  {
                    title: "Amazon",
                  },
                  {
                    title: "Stripe",
                  },
                ],
              },
            },
            {
              title: `Built detailed documentation on the domain specific content`,
            },
          ],
        },
      },
    ],
  },
  productMedia: {
    image: [
      {
        src: hivepathImage,
      },
    ],
  },
};
export default hivepathData;
