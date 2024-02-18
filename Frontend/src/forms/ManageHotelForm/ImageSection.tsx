import { useFormContext } from "react-hook-form";
import { PlaceFormData } from "./ManagePlaceForm";

const ImagesSection = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<PlaceFormData>();
 const existingImageUrls = watch("imageUrls");
 const handleDelete = (
   event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
   imageUrl: string
 ) => {
   event.preventDefault();
   setValue(
     "imageUrls",
     existingImageUrls.filter((url) => url !== imageUrl)
   );
 };
  return (
    <div>
      <div className="text-2xl font-bold mb-3">Images</div>
      <div className="border rounded p-4 flex flex-col gap-4">
        {existingImageUrls && (
          <div className="grid grid-cols-6 gap-4">
            {existingImageUrls.map((url) => (
              <div className="relative group">
                <img src={url} alt="min-h-full object-cover" />
                <button
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white"
                  onClick={(event) => handleDelete(event, url)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full text-gray-700 font-normal"
          {...register("imageFiles", {
            validate: (imagesFiles) => {
              const totalLength =
                imagesFiles.length + (existingImageUrls?.length || 0);

              if (totalLength === 0) {
                return "At least one image should be added";
              }

              if (totalLength > 6) {
                return "At least one image should be added";
              }
              return true;
            },
          })}
        />
      </div>
      {errors.imageFiles && (
        <span className="text-red-500 text-sm font-bold">
          {errors.imageFiles.message}
        </span>
      )}
    </div>
  );
};

export default ImagesSection;
