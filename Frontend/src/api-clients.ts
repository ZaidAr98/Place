import { RegistrationFormData } from "./pages/Register";
import { SignInFormData } from "./pages/SignIn";
import { PlaceSearchResponse, PlaceType } from "../../backend/src/shared/type";


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


export const fetchMyPlaces = async (): Promise<PlaceType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/my-places`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Error fetching places");
  }

  return response.json();
}; 


export const fetchMyPlaceById = async (placeId: string): Promise<PlaceType> => {
  const response = await fetch(`${API_BASE_URL}/api/my-places/${placeId}`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching Places");
  }

  return response.json();
};

export const updateMyPlaceById = async (placeFormData: FormData) => {
  const response = await fetch(
    `${API_BASE_URL}/api/my-places/${placeFormData.get("placeId")}`,
    {
      method: "PUT",
      body: placeFormData,
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update Place");
  }

  return response.json();
};


export type SearchParams = {
  destination?: string;
  page?: string;
  types?: string[];
  stars?: string[];
};



export const searchPlaces = async (
  searchParams: SearchParams
): Promise<PlaceSearchResponse> => {
  const queryParams = new URLSearchParams();
  queryParams.append("destination", searchParams.destination || "");
  queryParams.append("page", searchParams.page || "");
   searchParams.types?.forEach((type) => queryParams.append("types", type));
   searchParams.stars?.forEach((star) => queryParams.append("stars", star));
  const response = await fetch(
    `${API_BASE_URL}/api/searchPlace/search?${queryParams}`
  );

  if (!response.ok) {
    throw new Error("Error fetching places");
  }

  return response.json();
};




export const fetchPlaceDetailUsingId = async (
  placeId: string
): Promise<PlaceType> => {
  const response = await fetch(`${API_BASE_URL}/api/searchPlace/${placeId}`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching Places");
  }

  return response.json();
};


export const fetchPlaces = async (): Promise<PlaceType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/searchPlace`);
  if (!response.ok) {
    throw new Error("Error fetching places");
  }
  return response.json();
};