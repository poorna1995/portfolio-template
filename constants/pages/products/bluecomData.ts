import bluecomImage1 from "@/public/assets/products/bluecom-image-1.png";
import bluecomImage2 from "@/public/assets/products/bluecom-image-2.png";
import bluecomImage3 from "@/public/assets/products/bluecom-image-3.png";
import bluecomImage4 from "@/public/assets/products/bluecom-image-4.png";
import bluecomImage5 from "@/public/assets/products/bluecom-image-5.png";

const bluecomData = {
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
        src: bluecomImage1,
      },
      {
        src: bluecomImage2,
      },
      {
        src: bluecomImage3,
      },
      {
        src: bluecomImage4,
      },
      {
        src: bluecomImage5,
      },
    ],
  },
};
export default bluecomData;
