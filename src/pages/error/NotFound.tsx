import { PageWrapper } from "@/components/layout";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <PageWrapper className="min-h-dvh items-center justify-center">
      <span className="text-6xl font-semibold text-neutral-100">404</span>
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-xl text-neutral-100">Could not find requested resource</span>
        <Link to="/" className="flex items-center justify-center gap-2 rounded-sm bg-purple-600 p-2">
          <ArrowLeft className="text-neutral-100" />
          <span className="font-semibold text-neutral-100">Back to home</span>
        </Link>
      </div>
    </PageWrapper>
  );
}
