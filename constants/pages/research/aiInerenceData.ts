const aiInerenceData = {
  introData: {
    title: "Introduction",
    buttonTitle: "Visit Website",
    content: [
      {
        paragraph: `AI Inference is a crucial step for building production ready AI models. 
        There are various needs the end user expects from AI inference. 
        There are an increasing number of use cases from various industries for utilizing the AI technology 
        to solve their business problems. Inference step is carried at the 4me of deployment of the AI model. 
        Following are general steps carried at the 4me of AI inference,`,

        list: {
          type: "ordered",
          data: [
            {
              title: `Fully trained (or) ﬁne-tuned AI model is loaded to the memory.`,
            },
            {
              title: `Data is processed to make it ready for inference.`,
            },
            {
              title: `The AI model is executed based on the input data.`,
            },
            {
              title: `Post processing of the output – Data goes through a post-processing stage`,
            },
          ],
        },
      },
    ],
  },
};

export default aiInerenceData;
