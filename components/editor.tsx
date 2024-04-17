"use client";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";
import { useTheme } from "next-themes";
import { PartialBlock } from "@blocknote/core";
import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}
type BlockNoteEditorOptions<T> = {
  editable?: boolean; // Add the editable property to the type definition
  // Other properties...
};

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });
    return response.url;
  };

  const editor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    uploadFile: handleUpload,
  });

  const handleChnage = (value: PartialBlock[]) => {
    onChange(JSON.stringify(value));
  };
  return (
    <BlockNoteView
      editor={editor}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      onChange={async () => {
        const markdown = await editor.document;
        handleChnage(markdown);
      }}
    />
  );
};
export default Editor;
// "use client";

// import { useTheme } from "next-themes";
// import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
// import {
//   BlockNoteView,
//   useBlockNote,
//   useCreateBlockNote,
// } from "@blocknote/react";
// import "@blocknote/core/style.css";

// import { useEdgeStore } from "@/lib/edgestore";

// interface EditorProps {
//   onChange: (value: string) => void;
//   initialContent?: string;
//   editable?: boolean;
// }

// export const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
//   const { resolvedTheme } = useTheme();
//   const { edgestore } = useEdgeStore();

//   const handleUpload = async (file: File) => {
//     const response = await edgestore.publicFiles.upload({
//       file,
//     });

//     return response.url;
//   };

//   const editor = useCreateBlockNote({
//     initialContent: initialContent
//       ? (JSON.parse(initialContent) as PartialBlock[])
//       : undefined,
//     // uploadFile: handleUpload,
//   });

//   return (
//     <div>
//       <BlockNoteView
//         editor={editor}
//         theme={resolvedTheme === "dark" ? "dark" : "light"}
//       />
//     </div>
//   );
// };
