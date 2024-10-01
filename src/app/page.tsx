import CanvasRender from "./components/CanvasRender";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-between p-24">
      <CanvasRender />
    </div>
  );
}
