import zelloImage1 from "@/public/assets/products/zello-media-image-1.png";
import zelloImage2 from "@/public/assets/products/zello-media-image-2.png";
import zelloImage3 from "@/public/assets/products/zello-media-image-3.png";
import zelloImage4 from "@/public/assets/products/zello-media-image-4.png";

const zelloData = {
  introData: {
    title: "About Zello.live",
    buttonTitle: "Visit Website",
    content: [
      {
        paragraph: `Share Every MomentFaster With Widgets!
        Turn your Homescreens into a fun chatroom full of albums. Send & receive instant photo widgets to never miss out on a good thing! `,
        list: {
          type: "ordered",
          data: [
            { title: `Capture memories from your Camera` },
            {
              title: `Send pictures to multiple phone screens at the same time.`,
            },
            {
              title: `Create one or multiple Groups. Add & Invite all your contacts!`,
            },
            {
              title: `Track all your Groups and their details in a clean list view.`,
            },

            {
              title: `Find all your shared pictures in a smooth timeline view.`,
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
        src: zelloImage1,
      },
      {
        src: zelloImage2,
      },
      {
        src: zelloImage3,
      },
      {
        src: zelloImage4,
      },
    ],
  },
};
export default zelloData;
