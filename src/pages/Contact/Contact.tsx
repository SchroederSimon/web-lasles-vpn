import "./contact.css";
import { BASE_URL } from "../Pricing/Pricing";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Contact = () => {
  const schema = yup
    .object({
      name: yup.string().required(),
      email: yup.string().required().email(),
      phoneNumber: yup
        .string()
        .min(6, "lo minimo es 10 loko")
        .max(99)
        .required(),
      text: yup.string().min(6, "lo minimo es 10 loko").max(100).required(),
    })
    .required();

  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    fetch(`${BASE_URL}/api/send-email`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert("Form sent");
          reset();
        } else {
          alert("Error sending form");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
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
        <input type="submit" />
      </form>
    </div>
  );
};
