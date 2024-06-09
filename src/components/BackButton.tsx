import { useRouter } from "next/router";
import { FaChevronLeft } from "react-icons/fa";

const BackButton = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className="flex flex-row gap-x-3 items-center border border-1 border-gray-400 max-w-fit px-5 py-2 mb-5 cursor-pointer"
    >
      <FaChevronLeft />
      <p>Back</p>
    </div>
  );
}

export default BackButton;
