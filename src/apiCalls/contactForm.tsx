
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BASE_URL } from "./baseURL";


const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  phoneNumber: yup.string().min(6, "Minimum length is 6").max(99).required(),
  text: yup.string().min(6, "Minimum length is 6").max(100).required(),
});

type FormData = yup.InferType<typeof schema>;

export const ContactLogic = () => {
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

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};