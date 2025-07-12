import logoImage from "../assets/pizza-logo.svg";
import Button from "./ui/Button";

export default function Header() {
  function handleClickOnCart() {}

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImage} alt="Restaurant logo" />
        <h1>Pizza & More</h1>
      </div>
      <nav>
        <Button textOnly={true} onClick={handleClickOnCart}>
          Cart (0)
        </Button>
      </nav>
    </header>
  );
}
