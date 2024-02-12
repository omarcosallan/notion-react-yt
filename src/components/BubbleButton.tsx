import { ComponentProps, ReactNode } from "react";

export interface BubbleButtonPros extends ComponentProps<"button"> {
  children: ReactNode;
}

export function BubbleButton(props: BubbleButtonPros) {
  return (
    <button
      className="p-2 text-zinc-200 text-sl flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600 data-[active=true]:text-violet-500"
      {...props}
    />
  );
}
