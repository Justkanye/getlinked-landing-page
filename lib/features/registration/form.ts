import * as yup from "yup";

import { RegisterFormValues, RegisterTextField } from "./types";

export const registerFormInitialValues: RegisterFormValues = {
  email: "",
  phone_number: "",
  team_name: "",
  project_topic: "",
  privacy_poclicy_accepted: false,
};

export const registerFormValidationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  phone_number: yup.string().min(5).required().label("Phone number"),
  group_size: yup.number().required().label("Group size"),
  project_topic: yup.string().required().min(3).label("Project topic"),
  team_name: yup.string().required().min(3).label("Team’s name"),
  category: yup.number().required().label("Category"),
  privacy_poclicy_accepted: yup
    .bool()
    .isTrue(
      "You must agree with our terms and privacy policy to create an account."
    ),
});

export const registerTextFields: RegisterTextField[] = [
  {
    name: "team_name",
    placeholder: "Enter the name of your group",
    label: "Team’s Name",
  },
  {
    name: "phone_number",
    placeholder: "Enter your phone number",
    label: "phone",
  },
  { name: "email", placeholder: "Enter your email address", label: "Email" },
  {
    name: "project_topic",
    placeholder: "What is your group project topic",
    label: "Project topic",
  },
];
