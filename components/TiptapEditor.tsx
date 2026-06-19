"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type Props = {
value: string;
onChange: (value: string) => void;
};

export default function TiptapEditor({
value,
onChange,
}: Props) {
const editor = useEditor({
extensions: [StarterKit],

  
content: value || "",

immediatelyRender: false,

editorProps: {
  attributes: {
    class:
      "min-h-[400px] p-6 focus:outline-none prose prose-invert max-w-none",
  },
},

onUpdate({ editor }) {
  onChange(editor.getHTML());
},
  

});

if (!editor) {
return ( <div className="h-[400px] rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-500">
Loading editor... </div>
);
}

return ( <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"> <div className="flex flex-wrap gap-2 p-4 border-b border-white/10">
<button
type="button"
onClick={() =>
editor.chain().focus().toggleBold().run()
}
className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20"
>
Bold </button>

  
    <button
      type="button"
      onClick={() =>
        editor.chain().focus().toggleItalic().run()
      }
      className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20"
    >
      Italic
    </button>

    <button
      type="button"
      onClick={() =>
        editor
          .chain()
          .focus()
          .toggleHeading({ level: 1 })
          .run()
      }
      className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20"
    >
      H1
    </button>

    <button
      type="button"
      onClick={() =>
        editor
          .chain()
          .focus()
          .toggleHeading({ level: 2 })
          .run()
      }
      className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20"
    >
      H2
    </button>

    <button
      type="button"
      onClick={() =>
        editor.chain().focus().toggleBulletList().run()
      }
      className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20"
    >
      List
    </button>

    <button
      type="button"
      onClick={() =>
        editor.chain().focus().toggleCodeBlock().run()
      }
      className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20"
    >
      Code
    </button>
  </div>

  <EditorContent editor={editor} />
</div>
  

);
}
