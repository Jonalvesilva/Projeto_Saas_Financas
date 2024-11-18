import { ImSpinner } from "react-icons/im";
export default function Loading() {
  return (
    <div className="w-full h-full fixed bg-black/90 text-white flex items-center justify-center text-4xl gap-x-6">
      Loading
      <ImSpinner size={30} className="animate-spin" />
    </div>
  );
}
