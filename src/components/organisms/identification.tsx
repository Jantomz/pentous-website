// External Imports
import { useState } from "react";
import { HiOutlineCloudUpload } from "react-icons/hi";
import Image from "next/image";
import * as tf from "@tensorflow/tfjs";

// Internal imports
import Button from "../../components/atoms/button";
import Placeholder from "../../assets/placeholder.jpg";

const getMealComposition = (values: number[]): string => {
  const max = Math.max(...values);
  const index = values.indexOf(max);
  const prefix = `I'm ${(max * 100).toFixed(2)}% sure that's the category of`;
  if (index === 0) return `${prefix} Dairy.`;
  if (index === 1) return `${prefix} Fruits and Vegetables`;
  if (index === 2) return `${prefix} Grains.`;
  if (index === 3) return `${prefix} Meat and Alternatives.`;
  return "Can't Identify Category";
};

const Identification = (): JSX.Element => {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState("");
  const [classification, setClassification] = useState(
    "Please Upload an Image!"
  );

  const identifyMeal = async (): Promise<void> => {
    if (!image) {
      alert("Please upload an image.");
      return;
    }

    setClassification("Classifying...");

    const imageEle = document.getElementById("uploaded-image");

    // TODO: Should be moved onto the server side, do more research on TFJS how to do this
    const model = await tf.loadLayersModel("/models/model.json");

    const loadedImage = tf.browser
      // @ts-ignore
      .fromPixels(imageEle, 3)
      .resizeBilinear([256, 256])
      .toFloat()
      .mul(1.0 / 255.0)
      .expandDims(0);

    const prediction = model.predict(loadedImage);

    // @ts-ignore
    const values = prediction.dataSync();

    setClassification(getMealComposition(values));
  };

  // TODO: Find Type for e
  const uploadToClient = (e: any): void => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      if (file.type !== "image/png" && file.type !== "image/jpeg") {
        alert("Only PNG and JPG files are supported.");
        return;
      }
      setImage(file);
      const path = URL.createObjectURL(file);
      setCreateObjectURL(path);
      setClassification("Ready to Identify!");
    }
  };
  return (
    <section className="jart-main-container">
      <h1 className="title-jart">JART</h1>
      <div id="flex-row">
        <div>
          <div>
            <Image
              id="uploaded-image"
              src={createObjectURL ? createObjectURL : Placeholder}
              width={400}
              height={400}
              alt="Uploaded Image"
            />
          </div>
          <div className="results">
            {classification === "Classifying..." ? (
              <span className=" animate-ping">Loading</span>
            ) : (
              classification
            )}
          </div>
        </div>

        <div>
          <label
            aria-label="upload file"
            htmlFor="dropzone-file"
            className="dropzone-file"
          >
            <div>
              <HiOutlineCloudUpload />
              <p className="black-text">
                <span className="black-text">Click or Drag&nbsp;</span>
                To Upload
              </p>
              <p className="black-text">PNG or JPG</p>
            </div>
            <input
              id="hidden"
              type="file"
              className="hidden"
              onChange={uploadToClient}
            />
          </label>
          <div>
            <Button onClick={identifyMeal}>Submit</Button>
          </div>
        </div>
      </div>
      <p className="white-text">
        What is JART?<br></br>
        Trained using tensorflow keras, JART is a state of the art machine
        learning buddy of ours. Using a total of 3 Conv2D layers and 2 Dense
        layers, this model was trained in very little time. With activation
        functions of relu and softmax, our categorical machine learning friend
        JART came about! Using a collected dataset of 3000+ images, categorized
        into the 4 food categories, JART is now able to figure out what food
        category you are showing it! This dataset was compiled by Pentous
        creators! JART will let you know what food category you are most likely
        looking at!
      </p>
    </section>
  );
};

export default Identification;
