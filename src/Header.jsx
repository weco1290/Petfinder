import GlobalNav from "./GlobalNav";
import "./Header.css";
import Button from "./Button";
import Form from "./Form";
import { useRef } from "react";

function Header({ gotoPage }) {
  const dialogRef = useRef();
  return (
    <div className="flex">
      <header className="header">
        <a href="#/" onClick={gotoPage}>
          <img src="./logo.png" className="header__logo" alt="Petfinder Logo" />{" "}
        </a>
        <h1 className="header__title">Petsfinder</h1>
        <GlobalNav className="header__nav" gotoPage={gotoPage} />
      </header>
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
        <Form />
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

export default Header;
