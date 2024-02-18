import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api-clients";
import ManagePlaceForm from "../forms/ManageHotelForm/ManagePlaceForm";
import { useAppContext } from "../Context/AppContext";

const EditPlace = () => {
  const { placeId } = useParams();
  const { showToast } = useAppContext();

  const { data: place } = useQuery(
    "fetchMyPlaceById",
    () => apiClient.fetchMyPlaceById(placeId || ""),
    {
      enabled: !!placeId,
    }
  );

  const { mutate, isLoading } = useMutation(apiClient.updateMyPlaceById, {
    onSuccess: () => {
      showToast({ message: "Place Saved!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error Saving Place", type: "ERROR" });
    },
  });

  const handleSave = (placeFormData: FormData) => {
    mutate(placeFormData);
  };

  return (
    <ManagePlaceForm place={place} onSave={handleSave} isLoading={isLoading} />
  );
};

export default EditPlace;
