import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import PaginationButton from "./pagination-button";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="flex items-center justify-between w-full">
      {previousPath ? (
        <PaginationButton href={previousPath}>
          <ArrowLeftIcon />
          Previous
        </PaginationButton>
      ) : (
        <div />
      )}

      {nextPath && (
        <PaginationButton href={nextPath}>
          Next
          <ArrowRightIcon />
        </PaginationButton>
      )}
    </section>
  );
}

export default PaginationControls;
