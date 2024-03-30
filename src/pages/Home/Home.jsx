import css from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={css.container}>
        <h2 className={css.title}>
          Contacts book ..... (description)
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h2>
      </div>
    </>
  );
}
