import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypeSection from "./TypeSection";
import ImagesSection from "./ImageSection";
import { PlaceType } from "../../../../backend/src/shared/type";
import { useEffect } from "react";

export type PlaceFormData = {
  name: string;
  address:string;
  city: string;
  country: string;
  description: string;
  type: string;
  pricePerNight: number;
  starRating: number;
  imageFiles: FileList;
  imageUrls: string[];
  adultCount: number;
  childCount: number;
};
type Props = {
  place?: PlaceType;
  onSave: (PlaceFormData: FormData) => void;
  isLoading: boolean;
};

const ManagePlaceForm = ({ onSave, isLoading, place }: Props) => {
  const formMethods = useForm<PlaceFormData>();
  const { handleSubmit, reset } = formMethods;

  useEffect(() => {
    reset(place);
  }, [place, reset]);
  const onSubmit = handleSubmit((formDataJson: PlaceFormData) => {
    const formData = new FormData();
    if (place) {
      formData.append("placeId", place._id);
    }
    formData.append("name", formDataJson.name);
    formData.append("address", formDataJson.address);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append("description", formDataJson.description);
     formData.append("starRating", formDataJson.starRating.toString());
    formData.append("type", formDataJson.type);
    
 
   
    if (formDataJson.imageUrls) {
      formDataJson.imageUrls.forEach((url, index) => {
        formData.append(`imageUrls[${index}]`, url);
      });
    }

    Array.from(formDataJson.imageFiles).forEach((imageFile) => {
      formData.append(`imageFiles`, imageFile);
    });

    onSave(formData);
  });
  return (
    <FormProvider {...formMethods}>
      <form className="flex flex-col gap-10" onSubmit={onSubmit}>
        <DetailsSection />
        <TypeSection />
        <ImagesSection />
        <span className="flex justify-end">
          <button
            disabled={isLoading}
            type="submit"
            className="bg-green-600 text-white p-2 font-bold hover:bg-green-500 text-xl disabled:bg-gray-500"
          >
            {isLoading ? "Saving" : "Save"}
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ManagePlaceForm;
