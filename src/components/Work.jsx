import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../assets/svg/close.svg";
import MovingParagraph from "./MovingParagraph";

export default function Work({
  link,
  images,
  title,
  name,
  icons,
  open,
  setOpen,
  description,
}) {
  const [iOpen, setIOpen] = useState(false);
  const el = useRef();

  const variants_1 = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
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
        {iOpen ? (
          <>
            <span className="work-name">{name}</span>
            <p>{description}</p>
          </>
        ) : (
          <></>
        )}

        <div className="img-background">
          <img src={images[0]} alt="work" />
          {iOpen ? (
            images.slice(1).map((i) => <img src={i} alt={name} />)
          ) : (
            <></>
          )}
        </div>
        <span className="job-title">{title} @</span>
        <span className="work-name">{name}</span>
        {!iOpen ? (
          <button
            className="details-btn"
            onClick={(e) => {
              setIOpen(true);
              setOpen(true);
            }}
          >
            view details
          </button>
        ) : (
          <></>
        )}
        <div className="separator"></div>
        <div className="frameworks">{icons}</div>
      </div>
      {iOpen ? <div className="after-work"></div> : <></>}
    </>
  );
}
