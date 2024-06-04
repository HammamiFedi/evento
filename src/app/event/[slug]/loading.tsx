import Skeleton from "@/components/skeleton";

const Loading = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 pt-28">
      <Skeleton className="w-[550px]" />
      <Skeleton className="w-[400px]" />
      <Skeleton className="w-[450px]" />
    </div>
  );
};

export default Loading;
