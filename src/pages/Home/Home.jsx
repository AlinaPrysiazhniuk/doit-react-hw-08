import css from "./Home.module.css";

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <div className={css.container}>
        <h2 className={css.title}>
          Task manager welcome page{" "}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h2>
      </div>
    </>
  );
}
