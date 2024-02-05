import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../assets/svg/close.svg";

export default function Work({
  link,
  image,
  title,
  name,
  icons,
  open,
  setOpen,
}) {
  const [iOpen, setIOpen] = useState(false);
  const el = useRef();
  return (
    <>
      <div
        className={"work " + (iOpen ? "open " : "")}
        ref={el}
        style={{
          top: el.current?.getBoundingClientRect().top,
          left: el.current?.getBoundingClientRect().left,
        }}
      >
        <CloseIcon
          className="close"
          onClick={(e) => {
            setIOpen(false);
            setOpen(false);
          }}
        />
        <div className="img-background">
          <img src={image} alt="work" />
        </div>
        <span className="job-title">{title}</span>
        <span className="work-name">{name}</span>
        <button
          className="details-btn"
          onClick={(e) => {
            setIOpen(true);
            setOpen(true);
          }}
        >
          view details
        </button>
        <div className="separator"></div>
        <div className="frameworks">{icons}</div>
      </div>
      {iOpen ? <div className="after-work"></div> : <></>}
    </>
  );
}
