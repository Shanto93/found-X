import CardError from "@/src/components/CardError";
import ErrorBoundary from "@/src/components/ErrorBoundary";
import LandingPage from "@/src/components/modules/home/landing";
import RecentPosts from "@/src/components/modules/home/RecentPosts";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <LandingPage></LandingPage>
      <ErrorBoundary fallback={<CardError></CardError>}>
        <Suspense fallback={<p>Loading...</p>}>
          <RecentPosts></RecentPosts>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
