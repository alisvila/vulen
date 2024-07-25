import Spinner from "@/components/shared/spinner";

export function Loading({ classNames }: { classNames?: string }) {
  return (
    <div
      className={`w-full h-full min-h-96 bg-Neutral-600 opacity-20 flex justify-center
      items-center rounded-lg ${classNames}`}
    >
      <Spinner />
    </div>
  );
}
