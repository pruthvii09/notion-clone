"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your 📕 wiki,🧾 Docs & 🎯Projects. Together. Welcome to{" "}
        <span className="underline">Notion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notion is connected workspace where <br />
        better, faster work happens.
      </h3>
      {isLoading && (
        <div className="flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Notion
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Notion Free
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
