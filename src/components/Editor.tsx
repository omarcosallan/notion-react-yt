import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";
import {
  BubbleMenu,
  EditorContent,
  FloatingMenu,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import js from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/tokyo-night-dark.css";
import { createLowlight } from "lowlight";
import {
  RxChatBubble,
  RxChevronDown,
  RxCode,
  RxFontBold,
  RxFontItalic,
  RxListBullet,
  RxQuote,
  RxStrikethrough,
} from "react-icons/rx";
import { BubbleButton } from "./BubbleButton";
import { FloatingMenuButton } from "./FloatingMenuButton";
import "./styles/placeholder.css";

const lowlight = createLowlight({ js });

export function Editor() {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "prose prose-invert focus:outline-none",
      },
    },
    extensions: [
      StarterKit.configure({
        codeBlock: false,
        document: false,
      }),
      Document.extend({
        content: "heading block*",
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === "heading") {
            return "Untitled";
          }

          if (node.type.name === "editorBlock") {
            return "";
          }

          return "Type '/' to see commands...";
        },
      }),
    ],
    content: "",
  });

  return (
    <>
      <EditorContent className="max-w-[700px] mx-auto pt-16" editor={editor} />

      {editor && (
        <FloatingMenu
          className="min-w-[320px] bg-zinc-700 py-2 px-1 shadow-xl border gap-1 border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex flex-col"
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection;
            const currentLineText = $from.nodeBefore?.textContent;
            return currentLineText === "/";
          }}
        >
          <FloatingMenuButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            imgURL="https://www.notion.so/images/blocks/header.57a7576a.png"
            title="Heading 1"
            description="Big section heading."
          ></FloatingMenuButton>

          <FloatingMenuButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            imgURL="https://www.notion.so/images/blocks/subheader.9aab4769.png"
            title="Heading 2"
            description="Medium section heading."
          ></FloatingMenuButton>

          <FloatingMenuButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            imgURL="https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png"
            title="Heading 3"
            description="Small section heading."
          ></FloatingMenuButton>

          <FloatingMenuButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            imgURL="https://www.notion.so/images/blocks/bulleted-list.0e87e917.png"
            title="Bulleted list"
            description="Create a simple bulleted list."
          ></FloatingMenuButton>

          <FloatingMenuButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            imgURL="https://www.notion.so/images/blocks/numbered-list.0406affe.png"
            title="Numbered list"
            description="Create a list with numbering."
          ></FloatingMenuButton>

          <FloatingMenuButton
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            imgURL="https://www.notion.so/images/blocks/quote/en-US.png"
            title="Quote"
            description="Capture a quote."
          ></FloatingMenuButton>

          <FloatingMenuButton
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            imgURL="https://www.notion.so/images/blocks/text/en-US.png"
            title="Code"
            description="Capture a code snippet."
          ></FloatingMenuButton>
        </FloatingMenu>
      )}

      {editor && (
        <BubbleMenu
          className="min-w-max text-sm bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600"
          editor={editor}
        >
          <BubbleButton>
            Text
            <div className="min-w-max text-sm bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600"></div>
            <RxChevronDown className="w-4 h-4" />
          </BubbleButton>
          <BubbleButton>
            <RxChatBubble className="w-4 h-4" />
            Comment
          </BubbleButton>
          <div className="flex items-center">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive("bold")}
            >
              <RxFontBold className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive("italic")}
            >
              <RxFontItalic className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive("strike")}
            >
              <RxStrikethrough className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              data-active={editor.isActive("code")}
            >
              <RxCode className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              data-active={editor.isActive("blockquote")}
            >
              <RxQuote className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              data-active={editor.isActive("bulletList")}
            >
              <RxListBullet className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              data-active={editor.isActive("orderedList")}
            >
              <RxListBullet className="w-4 h-4" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
}
