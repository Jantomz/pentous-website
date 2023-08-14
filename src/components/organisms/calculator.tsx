import { useState } from "react";
import healthOverview from "../organisms/healthOverview";
import { SERVINGS_PER_PERSON } from "../../assets/datasets";

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

  function mealSugAdd() {
    console.log("Add meal suggestion");
  }

  function exerciseSugAdd() {
    const exerciseElem = document.createElement("p");
  }

  if (mealSug === "Yes") {
    mealSugAdd();
  }

  if (exerciseSug === "Yes") {
    exerciseSugAdd();
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (age === "" || gender === "") {
      alert("You didn't enter an age or gender.");
    } else if (+age > 120) {
      alert("Please enter real age");
    } else if (
      +meatComposition > 100 ||
      +grainComposition > 100 ||
      +fandvComposition > 100 ||
      +dairyComposition > 100
    ) {
      alert("One of your percents is larger than 100.");
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

      document.body.appendChild(element);
    }
  };

  return (
    <main className="main-container">
      <div className="image-container">
        <img src="/platedEggs.jpg" alt="eggs"></img>
      </div>
      <div className="container">
        <h2>Pentous Planner</h2>
        <form onSubmit={handleSubmit}>
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
            placeholder="Weight(lbs)"
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
              >
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
              >
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
          <button className="form-submit" type="submit" onClick={handleSubmit}>
            Get Plan
          </button>
        </form>
      </div>
    </main>
  );
}
