import axios from "axios";

export async function exerciseApi(muscleUpper: string): Promise<void> {
  const options = {
    method: "GET",
    url: "https://api.api-ninjas.com/v1/exercises?muscle=" + muscleUpper,
    headers: {
      "X-Api-Key": "KWsgW5bBpDXHx/lHOTyf+w==qP6seSv0RudxeHy8",
    },
  };
  try {
    const response = await axios.request(options);
    // workout.append(response.data[0][i]);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  // element.appendChild(workout);
}
