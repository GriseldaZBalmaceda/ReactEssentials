//its better to import images. it will include an automatically generated path that will also work once you deploy the react app to the server. best practice 🫥
import reactImg from "../../assets/react-core-concepts.png"
import "./Header.css"
export default function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concpets you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}
