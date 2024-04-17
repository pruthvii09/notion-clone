"use client";

import EmojiPicker, { Theme } from "emoji-picker-react";

import { useTheme } from "next-themes";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";

interface IconPickerProps {
  onChnage: (icon: string) => void;
  children: React.ReactNode;
  asChild?: boolean;
}

export const IconPicker = ({
  onChnage,
  children,
  asChild,
}: IconPickerProps) => {
  const { resolvedTheme } = useTheme();
  const currentTheme = (resolvedTheme || "light") as keyof typeof themeMap;

  const themeMap = {
    dark: Theme.DARK,
    light: Theme.LIGHT,
  };

  const theme = themeMap[currentTheme];

  return (
    <Popover>
      <PopoverTrigger asChild={asChild}>{children}</PopoverTrigger>
      <PopoverContent className="p-0 w-full border-none shadow-none">
        <EmojiPicker
          height={350}
          theme={theme}
          onEmojiClick={(data) => onChnage(data.emoji)}
        />
      </PopoverContent>
    </Popover>
  );
};
