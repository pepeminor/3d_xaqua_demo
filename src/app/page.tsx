import BodySwap from "@/components/BodySwap";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Suspense>
      <BodySwap />
    </Suspense>
  );
}
