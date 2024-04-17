"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const DocumentsPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    );
    toast.promise(promise, {
      loading: "Creating a new Note...",
      success: "New Note Created!!",
      error: "Failed to create Note",
    });
  };
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/computer-light.svg"
        height="300"
        width="300"
        alt="computer"
        className="dark:hidden"
      />
      <Image
        src="/computer-dark.svg"
        height="300"
        width="300"
        alt="computer"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos; Notion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};
export default DocumentsPage;
