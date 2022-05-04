import html2canvas from "html2canvas";
import { Camera } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

export function ScreenShotButton() {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
  }

  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 
  focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-color"
    >
      {isTakingScreenshot ? <Loading /> : <Camera />}
      <Camera className="w-6 h-6" />
    </button>
  );
}