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

export default function healthOverview(age: string, gender: string): number {
  const ageAsNumber = +age;
  let index = 12;

  if (ageAsNumber < 4) {
    index = 0;
  } else if (ageAsNumber < 9) {
    index = 1;
  } else if (ageAsNumber < 14) {
    index = 2;
  } else if (ageAsNumber < 19 && gender === "Female") {
    index = 3;
  } else if (ageAsNumber < 19 && gender === "Male") {
    index = 4;
  } else if (ageAsNumber < 51 && gender === "Female") {
    index = 5;
  } else if (ageAsNumber < 51 && gender === "Male") {
    index = 6;
  } else if (ageAsNumber < 120 && gender === "Female") {
    index = 7;
  } else if (ageAsNumber < 120 && gender === "Male") {
    index = 8;
  } else if (ageAsNumber < 120 && gender === "Other") {
    index = 9;
  } else if (ageAsNumber < 51 && gender === "Other") {
    index = 10;
  } else if (ageAsNumber < 19 && gender === "Other") {
    index = 11;
  } else {
    index = 12;
  }

  return index;
}
