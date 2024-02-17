import { RegistrationFormData } from "./pages/Register";
import { SignInFormData } from "./pages/SignIn";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const register = async (formData: RegistrationFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

export const signIn = async (formData: SignInFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
  return responseBody;
};

export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Token invalid");
  }

  return response.json();
};

export const signOut = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    credentials: "include",
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Error during sign out");
  }
};


export const addMyPlace = async (placeFormData: FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/my-places`, {
    method: "POST",
    credentials: "include",
    body: placeFormData,
  });

  if (!response.ok) {
    throw new Error("Failed to add place");
  }

  return response.json();
}; 