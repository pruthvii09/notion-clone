"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image src="/robot.svg" height="300" width="300" alt="Error" />
      <h2 className="text-xl font-medium">Something Went Wrong.</h2>
      <Button asChild>
        <Link href="/documents">Go back</Link>
      </Button>
    </div>
  );
};
export default ErrorPage;
