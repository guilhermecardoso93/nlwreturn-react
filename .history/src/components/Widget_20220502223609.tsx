import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";

export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen ] = useState(false)

  return (
    <>
      <div className="absolute bottom-4 right-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et
          reiciendis debitis aliquam consequatur voluptatem numquam officia
          error rerum neque, id amet laborum molestiae repudiandae quis ullam
          atque illum ipsam.
        </p>

        <button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
          <ChatTeardropDots className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
            <span className="pl-2"></span>
            Feedback
          </span>
        </button>
      </div>
    </>
  );
}
