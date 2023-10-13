const topicModelingData = {
  introData: {
    title: "Introduction",
    buttonTitle: "Visit Website",
    content: [
      {
        paragraph: `Non Negative matrix factorization is a well studied technique for 
        Topic Modeling problems. Solving this problem is considered as NP-Hard (i.e) no polynomial time solution. 
        Recent work on solving this problem based on separability
        condition makes this problem to solve in polynomial time. In this project`,

        list: {
          type: "ordered",
          data: [
            {
              title: ` I formally introduce the mathematical formulation of NMF problem and how it is used to solve 
              topic modeling problem.`,
            },
            {
              title: `Explain the separability assumption.`,
            },
            {
              title: ` Replicate the results for using XRAY algorithm with syn-
              thetic dataset and four real world dataset which were not considered in the main paper. 
              This report further include run time analysis of the algorithm in parallel mode. 
              The XRAY algorithm shows a good anchor recovery rate and robustness to the noise. 
              I have used cvxpy package in python to implement this algorithm.`,
            },
          ],
        },
      },
    ],
  },
};
export default topicModelingData;
