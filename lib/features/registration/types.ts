export type RegisterTextField = {
  name: keyof RegisterFormValues;
  placeholder: string;
  label: string;
};

export type RegisterFormValues = {
  email: string;
  phone_number: string;
  team_name: string;
  group_size?: number;
  project_topic: string;
  category?: number;
  privacy_poclicy_accepted: boolean;
};

export type Category = {
  id: number;
  name: string;
};
