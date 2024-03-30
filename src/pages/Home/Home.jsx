import css from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={css.container}>
        <h2 className={css.title}></h2>
        Welcome to our "Contacts Book" app!
        <article>
          Your reliable assistant in storing and managing your contacts. Why
          choose our app? Convenience: Easily store, update, and quickly find
          contacts within your circle. Organization: Categorize your contacts
          into groups or tags for efficient management. Security: Our app
          ensures encrypted storage of your data, ensuring its confidentiality.
          Start using the "Contacts Book" today and forget about communication
          misunderstandings!
        </article>
      </div>
    </>
  );
}
