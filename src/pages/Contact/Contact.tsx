import "./contact.css";
import { useContactLogic } from "../../apiCalls/contactForm";
import ButtonPrimary from "../../components/Button-primary/ButtonPrimary";

export const Contact = () => {
  const { register, handleSubmit, errors, onSubmit } = useContactLogic();

  const buttonThemeSend = {
    text: "Send",
  };

  return (
    <div className="contact-container padding">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-inputs">
          <label htmlFor="name">Name</label>
          <input {...register("name")} />
          <p>{errors.name?.message}</p>
        </div>

        <div className="contact-inputs">
          <label htmlFor="email">Email</label>
          <input {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>

        <div className="contact-inputs">
          <label htmlFor="phoneNumber">Phone</label>
          <input {...register("phoneNumber")} />
          <p>{errors.phoneNumber?.message}</p>
        </div>

        <div className="contact-inputs">
          <label htmlFor="text">Message</label>
          <textarea {...register("text")} />
          <p>{errors.text?.message}</p>
        </div>
        <div className="contact-button">
          <ButtonPrimary buttonTheme={buttonThemeSend} />
        </div>
      </form>
    </div>
  );
};