import Form from "../../components/Form/Form";
import "./LandingPage.scss";

export default function LandingPage() {
  return (
    <>
      <section className="title">
        <h1 className="title__text">Keep Track of What You Learn</h1>
      </section>
      <section>
        <Form />
      </section>
    </>
  );
}
