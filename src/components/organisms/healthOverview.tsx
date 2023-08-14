import axios from "axios";

// var muscle = "biceps";
// const options = {
//   method: "GET",
//   url: "https://api.api-ninjas.com/v1/exercises?muscle=" + muscle,
//   headers: {
//     "X-Api-Key": "KWsgW5bBpDXHx/lHOTyf+w==qP6seSv0RudxeHy8",
//   },
// };

// // const maxProtein;
// // const maxCarbs;
// // const maxCalories;

// var specifiedSearch = "";
// const foodOptions = {
//   method: "GET",
//   url: "https://api.spoonacular.com/recipes/complexSearch",
//   headers: {
//     "X-Api-Key": "d1823bda9b7848ec8a70344ea908a0bf",
//   },
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }

// try {
//   const response = await axios.request(foodOptions);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }

const SERVINGS_PER_PERSON = [
  {
    gender: "all",
    age: 2 - 3,
    vegetablesAndFruits: 4,
    grain: 3,
    dairy: 2,
    protein: 1,
  },
  {
    gender: "all",
    age: 4 - 8,
    vegetablesAndFruits: 5,
    grain: 4,
    dairy: 2,
    protein: 1,
  },
  {
    gender: "all",
    age: 9 - 13,
    vegetablesAndFruits: 6,
    grain: 6,
    dairy: 3.5,
    protein: 1.5,
  },
  {
    gender: "Female",
    age: 14 - 18,
    vegetablesAndFruits: 7,
    grain: 6,
    dairy: 3.5,
    protein: 2,
  },
  {
    gender: "Male",
    age: 14 - 18,
    vegetablesAndFruits: 8,
    grain: 7,
    dairy: 3.5,
    protein: 3,
  },
  {
    gender: "Female",
    age: 19 - 50,
    vegetablesAndFruits: 7.5,
    grain: 6.5,
    dairy: 2,
    protein: 2,
  },
  {
    gender: "Male",
    age: 19 - 50,
    vegetablesAndFruits: 9,
    grain: 8,
    dairy: 2,
    protein: 3,
  },
  {
    gender: "Female",
    age: 51,
    vegetablesAndFruits: 7,
    grain: 6,
    dairy: 3,
    protein: 1,
  },
  {
    gender: "Male",
    age: 51,
    vegetablesAndFruits: 7,
    grain: 7,
    dairy: 3,
    protein: 3,
  },
  {
    gender: "Other",
    age: 51,
    vegetablesAndFruits: 7,
    grain: 6.5,
    dairy: 3,
    protein: 2,
  },
  {
    gender: "Other",
    age: 19 - 50,
    vegetablesAndFruits: 8,
    grain: 7,
    dairy: 2,
    protein: 2.5,
  },
  {
    gender: "Other",
    age: 14 - 18,
    vegetablesAndFruits: 7.5,
    grain: 7,
    dairy: 3.5,
    protein: 3,
  },
  {
    gender: "Error",
    age: "Error",
    vegetablesAndFruits: "Error",
    grain: "Error",
    dairy: "Error",
    protein: "Error",
  },
];

export default function healthOverview(age: any, gender: any) {
  let index = 12;

  if (age < 4) {
    index = 0;
  } else if (age < 9) {
    index = 1;
  } else if (age < 14) {
    index = 2;
  } else if (age < 19 && gender === "Female") {
    index = 3;
  } else if (age < 19 && gender === "Male") {
    index = 4;
  } else if (age < 51 && gender === "Female") {
    index = 5;
  } else if (age < 51 && gender === "Male") {
    index = 6;
  } else if (age < 120 && gender === "Female") {
    index = 7;
  } else if (age < 120 && gender === "Male") {
    index = 8;
  } else if (age < 120 && gender === "Other") {
    index = 9;
  } else if (age < 51 && gender === "Other") {
    index = 10;
  } else if (age < 19 && gender === "Other") {
    index = 11;
  } else {
    index = 12;
  }

  return index;
}
