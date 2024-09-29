import BeatLoader from "react-spinners/BeatLoader";
import css from "./Loader.module.css";

export default function Loader() {
  return (
  //   <div className="flex-grow-1 d-flex align-items-center justify-content-center">
  //   <BeatLoader />
  // </div>
  <BeatLoader className={css.loader} />
  );
}
