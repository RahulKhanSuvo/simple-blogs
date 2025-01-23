export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h3 className="text-center mb-4 text-lg font-medium text-gray-700">
        Loading...
      </h3>
      <div className=" size-11 border-4 border-t-2 border-[#F13B3B] border-dashed rounded-full animate-spin"></div>
    </div>
  );
}
