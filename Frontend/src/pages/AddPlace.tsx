import { useAppContext } from "../Context/AppContext";
import * as apiClient from "../api-clients";
import { useMutation } from "react-query";
import ManagePlaceForm from "../forms/ManageHotelForm/ManagePlaceForm";
import { useNavigate } from "react-router-dom";

const AddPlace = () => {
  const { showToast } = useAppContext();

  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(apiClient.addMyPlace, {
    onSuccess: () => {
      showToast({ message: "Place Saved!", type: "SUCCESS" });
      navigate("/my-places");
    },
    onError: () => {
      showToast({ message: "Error Saving Place", type: "ERROR" });
    },
  });

  const handleSave = (placeFormData: FormData) => {
    mutate(placeFormData);
  };

  return <ManagePlaceForm onSave={handleSave} isLoading={isLoading} />;
};

export default AddPlace;
