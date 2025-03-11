import { Suspense } from "react";
import SearchPage from "./SearchPage"; // Assuming it's in the same directory

export default function Search() {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <SearchPage />
    </Suspense>
  );
}
