import axios from "axios";
import { string } from "zod";

export async function exerciseApi(
  muscleUpper: string,
  muscleLower: string,
  exerciseLength: string,
  difficulty: string,
  type: string
): Promise<void> {
  const options = {
    method: "GET",
    url:
      "https://api.api-ninjas.com/v1/exercises?muscle=" +
      muscleUpper +
      "&difficulty=" +
      difficulty +
      "&type=" +
      type,
    headers: {
      "X-Api-Key": "KWsgW5bBpDXHx/lHOTyf+w==qP6seSv0RudxeHy8",
    },
  };
  const optionsLower = {
    method: "GET",
    url:
      "https://api.api-ninjas.com/v1/exercises?muscle=" +
      muscleLower +
      "&difficulty=" +
      difficulty +
      "&type=" +
      type,
    headers: {
      "X-Api-Key": "KWsgW5bBpDXHx/lHOTyf+w==qP6seSv0RudxeHy8",
    },
  };
  try {
    const oldWorkouts = document.getElementsByClassName("workouts");
    oldWorkouts[0]?.remove();
    const oldWorkoutTitle = document.getElementsByClassName("workout-title");
    oldWorkoutTitle[0]?.remove();
    const oldUpperTitle = document.getElementsByClassName("upper-title");
    oldUpperTitle[0]?.remove();
    const oldLowerTitle = document.getElementsByClassName("lower-title");
    oldLowerTitle[0]?.remove();
    const oldLowerWorkouts = document.getElementsByClassName("workouts-lower");
    oldLowerWorkouts[0]?.remove();

    const upperLength = Math.floor(+exerciseLength / 2);
    const lowerLength = +exerciseLength - upperLength;
    const response = await axios.request(options);
    const responseLower = await axios.request(optionsLower);
    const workoutTitle = document.createElement("h3");
    workoutTitle.textContent = "Workout Regimen";
    workoutTitle.setAttribute("class", "workout-title");
    const workout = document.createElement("p");
    const workoutLower = document.createElement("p");
    const upperBodTitle = document.createElement("h4");
    upperBodTitle.textContent = "Upper Body";
    upperBodTitle.setAttribute("class", "upper-title");
    const lowerBodTitle = document.createElement("h4");
    lowerBodTitle.setAttribute("class", "lower-title");
    lowerBodTitle.textContent = "Lower Body";
    workout.setAttribute("class", "workouts");
    workoutLower.setAttribute("class", "workouts-lower");
    document.body.appendChild(workoutTitle);

    for (let i = 0; i < upperLength; i++) {
      workout.append(response.data[i].name);
      workout.append("______");
    }
    for (let i = 0; i < lowerLength; i++) {
      const text = responseLower.data[i];
      workoutLower.append(text.name);
      workoutLower.append("______");
    }
    document.body.appendChild(upperBodTitle);
    document.body.appendChild(workout);
    document.body.appendChild(lowerBodTitle);
    document.body.appendChild(workoutLower);
  } catch (error) {
    console.error(error);
  }
  // element.appendChild(workout);
}

export async function mealApi(specifiedSearch: string): Promise<void> {
  const foodOptions = {
    method: "GET",
    url: "https://api.spoonacular.com/recipes/complexSearch?" + specifiedSearch,
    headers: {
      "X-Api-Key": "d1823bda9b7848ec8a70344ea908a0bf",
    },
  };
  try {
    const oldImg = document.getElementsByClassName("meal-img");
    const oldMeal = document.getElementsByClassName("meal");
    oldMeal[0]?.remove();
    oldImg[0]?.remove();
    const num = Math.floor(Math.random() * 10);
    const divisionMeal = document.createElement("div");
    const response = await axios.request(foodOptions);
    const mealImg = document.createElement("img");
    const meal = document.createElement("h3");
    meal.textContent = "Meal Suggestion: " + response.data.results[num].title;
    mealImg.setAttribute("src", response.data.results[num].image);
    mealImg.setAttribute("class", "meal-img");
    meal.setAttribute("class", "meal");
    divisionMeal.appendChild(meal);
    divisionMeal.appendChild(mealImg);
    document.body.appendChild(divisionMeal);
  } catch (error) {
    console.error(error);
  }
}
