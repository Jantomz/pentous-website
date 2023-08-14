import { useState } from "react";
import healthOverview from "./healthOverview";
import { SERVINGS_PER_PERSON } from "../../assets/datasets";
import { number } from "zod";
import axios from "axios";

export default function BasicCalculator() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weightlbs, setWeightlbs] = useState("");
  const [heightcm, setHeightcm] = useState("");
  const [meatComposition, setMeatComposition] = useState("");
  const [grainComposition, setGrainComposition] = useState("");
  const [fandvComposition, setFandvComposition] = useState("");
  const [dairyComposition, setDairyComposition] = useState("");
  const [mealSug, setMealSug] = useState("");
  const [exerciseSug, setExerciseSug] = useState("");
  const [exerciseType, setExerciseType] = useState("");
  const [exerciseLength, setExerciseLength] = useState("");
  const [muscleUpper, setMuscleUpper] = useState("");
  const [muscleLower, setMuscleLower] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const [minCals, setMinCals] = useState("");

  const handleSubmit = async (
    event: React.MouseEvent<HTMLElement>
  ): Promise<void> => {
    event.preventDefault();

    if (age === "" || gender === "") {
      alert("You didn't enter an age or gender.");
    } else if (+age > 120) {
      alert("Please enter real age");
    } else if (
      +meatComposition > 100 ||
      +grainComposition > 100 ||
      +fandvComposition > 100 ||
      +dairyComposition > 100 ||
      +meatComposition < 0 ||
      +grainComposition < 0 ||
      +fandvComposition < 0 ||
      +dairyComposition < 0
    ) {
      alert("One of your percents is larger than 100 or not defined");
    } else if (
      +meatComposition +
        +grainComposition +
        +fandvComposition +
        +dairyComposition >
        105 ||
      +meatComposition +
        +grainComposition +
        +fandvComposition +
        +dairyComposition <
        95
    ) {
      alert(
        "Your percents are too far from 100% (Please make sure they add up to around 100 (+-5)"
      );
    } else if (weightlbs == "" || heightcm == "") {
      alert("You don't have weight or height");
    } else if (
      (exerciseType === "DEFAULT" ||
        exerciseLength == "" ||
        muscleUpper == "DEFAULT" ||
        muscleLower == "DEFAULT" ||
        difficulty == "DEFAULT" ||
        +exerciseLength > 20) &&
      exerciseSug == "Yes"
    ) {
      alert("You haven't filled in all the exercise parameters correctly");
    } else if (
      (cuisineType == "DEFAULT" || minCals == "" || +minCals > 5000) &&
      mealSug == "Yes"
    ) {
      alert("You haven't filled in all the meal parameters correctly");
    } else {
      const index = healthOverview(age, gender);
      const element = document.createElement("p");
      const ageElem = document.createElement("h3");
      const genderElem = document.createElement("h3");
      const weightElem = document.createElement("h3");
      const heightElem = document.createElement("h3");
      const fvElem = document.createElement("p");
      const grainElem = document.createElement("p");
      const dairyElem = document.createElement("p");
      const proteinElem = document.createElement("p");

      const workout = document.createElement("p");

      ageElem.textContent = "Age: " + age;
      genderElem.textContent = "Gender: " + gender;
      weightElem.textContent = "Weight (lbs): " + weightlbs;
      heightElem.textContent = "Height (cm): " + heightcm;

      fvElem.textContent =
        SERVINGS_PER_PERSON[index]?.vegetablesAndFruits +
        " servings of Fruits and Vegetables";
      grainElem.textContent =
        SERVINGS_PER_PERSON[index]?.grain + " servings of Grain";
      dairyElem.textContent =
        SERVINGS_PER_PERSON[index]?.dairy + " servings of Dairy";
      proteinElem.textContent =
        SERVINGS_PER_PERSON[index]?.protein + " servings of Protein";

      element.appendChild(ageElem);
      element.appendChild(genderElem);
      element.appendChild(weightElem);
      element.appendChild(heightElem);
      element.appendChild(fvElem);
      element.appendChild(grainElem);
      element.appendChild(dairyElem);
      element.appendChild(proteinElem);
      element.setAttribute("id", "health-overview");
      document.getElementById("health-overview")?.remove();

      if (exerciseSug === "Yes") {
        let muscle = muscleUpper;
        const options = {
          method: "GET",
          url: "https://api.api-ninjas.com/v1/exercises?muscle=" + muscle,
          headers: {
            "X-Api-Key": "KWsgW5bBpDXHx/lHOTyf+w==qP6seSv0RudxeHy8",
          },
        };
        try {
          const response = await axios.request(options);
          for (let i = 0; i < response.data.length; i++) {
            // workout.append(response.data[0][i]);
            console.log(response.data);
          }
        } catch (error) {
          console.error(error);
        }
        // element.appendChild(workout);
      }

      if (mealSug === "Yes") {
        var specifiedSearch = "";
        const foodOptions = {
          method: "GET",
          url: "https://api.spoonacular.com/recipes/complexSearch",
          headers: {
            "X-Api-Key": "d1823bda9b7848ec8a70344ea908a0bf",
          },
        };
        try {
          const response = await axios.request(foodOptions);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }

      document.body.appendChild(element);
    }
  };

  return (
    <div>
      <main className="main-container">
        <div className="image-container">
          <img src="/platedEggs.jpg" alt="eggs"></img>
        </div>
        <div className="container">
          <h2>Pentous Planner</h2>
          <form>
            <select
              id="gender"
              name="gender"
              className="input-area"
              defaultValue={"DEFAULT"}
              onChange={(event) => {
                setGender(event.target.value);
              }}
            >
              <option value="DEFAULT" hidden>
                Gender
              </option>
              <option value="Male" className="select-option">
                Male
              </option>
              <option value="Female" className="select-option">
                Female
              </option>
              <option value="Other" className="select-option">
                Other
              </option>
              <option value="Other" className="select-option">
                Prefer not to say
              </option>
            </select>
            <input
              id="age"
              name="age"
              type="number"
              min="0"
              max="120"
              step="1"
              className="input-area"
              placeholder="Age"
              value={age}
              onChange={(event) => {
                setAge(event.target.value);
              }}
            ></input>
            <input
              id="weightlbs"
              name="weightlbs"
              type="number"
              min="1"
              max="800"
              step="1"
              className="input-area"
              placeholder="Weight (lbs)"
              value={weightlbs}
              onChange={(event) => {
                setWeightlbs(event.target.value);
              }}
            ></input>
            <input
              id="heightcm"
              name="heightcm"
              type="number"
              min="1"
              max="300"
              step="1"
              className="input-area"
              placeholder="Height (cm)"
              value={heightcm}
              onChange={(event) => {
                setHeightcm(event.target.value);
              }}
            ></input>
            <br></br>
            <br></br>
            <label>Meat Composition:</label>
            <input
              id="meatComposition"
              name="meatComposition"
              type="number"
              min="0"
              max="100"
              step="1"
              className="input-area smaller-input-area"
              placeholder="% of you daily meal that's Meat and Alternatives"
              value={meatComposition}
              onChange={(event) => {
                setMeatComposition(event.target.value);
              }}
            ></input>
            <label>Grain Composition:</label>
            <input
              id="grainComposition"
              name="grainComposition"
              type="number"
              min="0"
              max="100"
              step="1"
              className="input-area smaller-input-area"
              placeholder="% of you daily meal that's Grains"
              value={grainComposition}
              onChange={(event) => {
                setGrainComposition(event.target.value);
              }}
            ></input>
            <label>Fruits and Vegetables Composition:</label>
            <input
              id="fandvComposition"
              name="fandvComposition"
              type="number"
              min="0"
              max="100"
              step="1"
              className="input-area smaller-input-area"
              placeholder="% of you daily meal that's Fruits and Vegetables"
              value={fandvComposition}
              onChange={(event) => {
                setFandvComposition(event.target.value);
              }}
            ></input>
            <label>Dairy Composition:</label>
            <input
              id="dairyComposition"
              name="dairyComposition"
              type="number"
              min="0"
              max="100"
              step="1"
              className="input-area smaller-input-area"
              placeholder="% of you daily meal that's Dairy"
              value={dairyComposition}
              onChange={(event) => {
                setDairyComposition(event.target.value);
              }}
            ></input>
            <div className="user-input-notif">
              Total of your inputted meal composition:{" "}
              {+meatComposition +
                +fandvComposition +
                +grainComposition +
                +dairyComposition}
              %
            </div>
            <div className="binary-container">
              <div className="binary-choosing">
                <span>Meal Suggestion?</span>
                <select
                  id="mealSug"
                  name="mealSug"
                  className="input-binary"
                  onChange={(event) => {
                    setMealSug(event.target.value);
                  }}
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" hidden>
                    Yes or No
                  </option>
                  <option value="No" className="input-area">
                    No
                  </option>
                  <option value="Yes" className="input-area">
                    Yes
                  </option>
                </select>
              </div>
              <div className="binary-choosing">
                <span>Exercise Regimen?</span>
                <select
                  id="exerciseSug"
                  name="exerciseSug"
                  className="input-binary"
                  onChange={(event) => {
                    setExerciseSug(event.target.value);
                  }}
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" hidden>
                    Yes or No
                  </option>
                  <option value="No" className="input-area">
                    No
                  </option>
                  <option value="Yes" className="input-area">
                    Yes
                  </option>
                </select>
              </div>
            </div>

            <br></br>
            {exerciseSug === "No" && mealSug === "No" ? (
              <button
                className="form-submit"
                type="submit"
                onClick={handleSubmit}
              >
                Get Plan
              </button>
            ) : null}
          </form>
        </div>
      </main>
      {exerciseSug === "Yes" ? (
        <div>
          <main className="exercise-container">
            <div className="image-container">
              <img src="/running.jpg" alt="running"></img>
            </div>
            <div className="container">
              <h3>Exercise</h3>
              <form>
                <select
                  id="exerciseType"
                  name="exerciseType"
                  className="input-area"
                  defaultValue={"DEFAULT"}
                  onChange={(event) => {
                    setExerciseType(event.target.value);
                  }}
                >
                  <option value="DEFAULT" hidden>
                    Choose Exercise Type
                  </option>
                  <option value="Cardio" className="select-option">
                    Cardio
                  </option>
                  <option value="Plyometrics" className="select-option">
                    Plyometrics
                  </option>
                  <option value="Strength" className="select-option">
                    Strength
                  </option>
                  <option value="Stretching" className="select-option">
                    Stretching
                  </option>
                </select>
                <input
                  id="exerciseLength"
                  name="exerciseLength"
                  type="number"
                  min="0"
                  max="20"
                  step="1"
                  className="input-area"
                  placeholder="Number of Exercises (Max: 20)"
                  value={exerciseLength}
                  onChange={(event) => {
                    setExerciseLength(event.target.value);
                  }}
                ></input>
                <select
                  id="muscleUpper"
                  name="muscleUpper"
                  className="input-area"
                  defaultValue={"DEFAULT"}
                  onChange={(event) => {
                    setMuscleUpper(event.target.value);
                  }}
                >
                  <option value="DEFAULT" hidden>
                    Choose Focus Upper Muscle
                  </option>
                  <option value="Biceps" className="select-option">
                    Biceps
                  </option>
                  <option value="Chest" className="select-option">
                    Chest
                  </option>
                  <option value="Forearms" className="select-option">
                    Forearms
                  </option>
                  <option value="Lats" className="select-option">
                    Lats
                  </option>
                  <option value="Triceps" className="select-option">
                    Triceps
                  </option>
                </select>
                <select
                  id="muscleLower"
                  name="muscleLower"
                  className="input-area"
                  defaultValue={"DEFAULT"}
                  onChange={(event) => {
                    setMuscleLower(event.target.value);
                  }}
                >
                  <option value="DEFAULT" hidden>
                    Choose Focus Lower Muscle
                  </option>
                  <option value="Abdominals" className="select-option">
                    Abdominals
                  </option>
                  <option value="Calves" className="select-option">
                    Calves
                  </option>
                  <option value="Glutes" className="select-option">
                    Glutes
                  </option>
                  <option value="Hamstrings" className="select-option">
                    Hamstrings
                  </option>
                  <option value="Quadriceps" className="select-option">
                    Quadriceps
                  </option>
                </select>
                <select
                  id="difficulty"
                  name="difficulty"
                  className="input-area"
                  defaultValue={"DEFAULT"}
                  onChange={(event) => {
                    setDifficulty(event.target.value);
                  }}
                >
                  <option value="DEFAULT" hidden>
                    Choose Difficulty
                  </option>
                  <option value="Beginner" className="select-option">
                    Beginner
                  </option>
                  <option value="Intermediate" className="select-option">
                    Intermediate
                  </option>
                  <option value="Expert" className="select-option">
                    Expert
                  </option>
                </select>
                {mealSug === "No" ? (
                  <button
                    className="form-submit"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Get Plan
                  </button>
                ) : null}
              </form>
            </div>
          </main>
        </div>
      ) : null}
      {mealSug === "Yes" ? (
        <div>
          <main className="meal-container">
            <div className="image-container">
              <img src="/meal.jpg" alt="meal"></img>
            </div>
            <div className="container">
              <h3>Meal</h3>
              <form>
                <select
                  id="cuisineType"
                  name="cuisineType"
                  className="input-area"
                  defaultValue={"DEFAULT"}
                  onChange={(event) => {
                    setCuisineType(event.target.value);
                  }}
                >
                  <option value="DEFAULT" hidden>
                    Choose Cuisine Type
                  </option>
                  <option value="Indian" className="select-option">
                    Indian
                  </option>
                  <option value="Italian" className="select-option">
                    Italian
                  </option>
                  <option value="Chinese" className="select-option">
                    Chinese
                  </option>
                  <option value="American" className="select-option">
                    American
                  </option>
                  <option value="Japanese" className="select-option">
                    Japanese
                  </option>
                  <option value="Thai" className="select-option">
                    Thai
                  </option>
                  <option value="Mexican" className="select-option">
                    Mexican
                  </option>
                </select>
                <input
                  id="minCals"
                  name="minCals"
                  type="number"
                  min="1"
                  max="5000"
                  step="1"
                  className="input-area"
                  placeholder="Minimum Calories (Max: 5000)"
                  value={minCals}
                  onChange={(event) => {
                    setMinCals(event.target.value);
                  }}
                ></input>
                {exerciseSug === "No" ? (
                  <button
                    className="form-submit"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Get Plan
                  </button>
                ) : null}
                {exerciseSug === "Yes" && mealSug === "Yes" ? (
                  <button
                    className="form-submit"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Get Plan
                  </button>
                ) : null}
              </form>
            </div>
          </main>
        </div>
      ) : null}
    </div>
  );
}
