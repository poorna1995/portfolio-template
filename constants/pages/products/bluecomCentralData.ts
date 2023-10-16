import bluecomCentralImage1 from "@/public/assets/products/bluecom-central media-1.png";
import bluecomCentralImage2 from "@/public/assets/products/bluecom-central media-2.png";
import bluecomCentralImage3 from "@/public/assets/products/bluecom-central media-3.png";

const bluecomCentralData = {
  introData: {
    title: "About Bluecom",
    buttonTitle: "Visit Website",
    content: [
      {
        paragraph: `Running a multi-channel ecommerce business can be a challenging and tedious process. By adopting a robust multi-channel framework, ecommerce businesses can unlock a plethora of possibilities, ensuring omnipresence in reaching and serving their customers.`,
        list: {
          type: "ordered",
          data: [
            { title: `Product Information Management` },
            {
              title: `Inventory Management`,
            },
            {
              title: `Purchase Order Management`,
            },
            {
              title: `Warehouse managemenrt`,
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
        src: bluecomCentralImage1,
      },
      {
        src: bluecomCentralImage2,
      },
      {
        src: bluecomCentralImage3,
      },
    ],
  },
};
export default bluecomCentralData;
