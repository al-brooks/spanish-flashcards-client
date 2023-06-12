import "./LandingPage.css";

export default function LandingPage({ user }) {
  return (
    <section className="LandingPage">
      <h1>
        ¡Bienvenido! <span className="color-blue">{user.name}</span>
      </h1>
      <p>
        <span className="color-blue">Spanish</span>
        <span className="color-word">Flash</span> allows you to create
        flashcards to help you with your Spanish! While it's tailored
        specifically to English - Spanish translationas, you can also create
        custom cards for all your studying needs.
      </p>
    </section>
  );
}
