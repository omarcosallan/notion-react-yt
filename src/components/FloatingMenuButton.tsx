import { ComponentProps } from "react";

export interface FloatingMenuButtonProps extends ComponentProps<"button"> {
  imgURL: string;
  title: string;
  description: string;
}

export function FloatingMenuButton(props: FloatingMenuButtonProps) {
  return (
    <button
      {...props}
      className="flex items-center gap-2 p-1 rounded min-w-[200px] hover:bg-zinc-600"
    >
      <img
        src={props.imgURL}
        alt={props.title}
        className="w-12 border border-zinc-600 rounded"
      />
      <div className="flex flex-col text-left ">
        <span className="text-sm">{props.title}</span>
        <span className="text-xs text-zinc-400">{props.description}</span>
      </div>
    </button>
  );
}
