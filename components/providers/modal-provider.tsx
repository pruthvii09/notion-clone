"use client";

import { SettingsModal } from "@/components/modals/settings-model";
import { useEffect, useState } from "react";
import { CoverImageModal } from "@/components/modals/cover-image-model";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  );
};
