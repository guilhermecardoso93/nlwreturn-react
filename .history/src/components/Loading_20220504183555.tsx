import { CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <div className='w-6 h-6 flex items-center'>
      <CircleNotch weight="bold" className="w-4 h-4" />
    </div>
  );
}
