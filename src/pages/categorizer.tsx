import * as tf from "@tensorflow/tfjs";

const model = await tf.loadLayersModel(
  "C:UsersjadenOneDriveDesktopMyCodingdemo-sitepublicmodelmodel.json"
);

const imageEle = document.getElementById("uploaded-image");

const loadedImage = tf.browser
  .fromPixels(imageEle, 3)
  .resizeBilinear([256, 256])
  .toFloat()
  .mul(1.0 / 255.0)
  .expandDims(0);

const prediction = model.predict(loadedImage);

export default function Categorizer() {
  return (
    <div>
      <img
        src="https://images.squarespace-cdn.com/content/v1/57a100f7e4fcb592ee30586c/1480645280849-02VFJMK08VI3KMNCIWGO/image-asset.jpeg"
        id="uploaded-image"
      ></img>
    </div>
  );
}
