import "./Card.css";
import Button from "./Button";
import Form from "./Form";
import { useRef } from "react";
function Card({
  className,
  onReadmore,
  title,
  pic,
  alt,
  text,
  linkText,
  gotoPage,
  age,
  sex,
  adopted,
}) {
  const onClick = () => {
    console.log("Button clicked!");
  };
  const dialogRef = useRef();
  if (adopted) {
    return null;
  }
  return (
    <div className={className}>
      <h3 className={`${className}__title`}>{title}</h3>
      <img className={`${className}__pic`} alt={alt} src={pic} />
      <span className="adoptee__deets">
        <p className="adoptee__age">{`AGE: ${age}`}</p>
        <div className="adoptee__sep"></div>
        <p className="adoptee__sex">{`Sex: ${sex}`}</p>
      </span>
      <p className={`${className}__text`}>{text}</p>

      <Button
        onClick={() => {
          console.log(dialogRef);
          dialogRef.current.showModal();
        }}
        className="card__link"
      >
        Adopt
      </Button>
      <dialog ref={dialogRef} className="modal">
        <Form title={title} />
        <Button type="submit" visual="link" className={"signup__submit"}>
          Submit
        </Button>
        <Button onClick={() => dialogRef.current.close()} className="close">
          Close
        </Button>
      </dialog>
    </div>
  );
}

export default Card;
