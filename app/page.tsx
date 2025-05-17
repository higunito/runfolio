import { Button } from "@/components/ui/button"

export default function Home() {
  return (
      <div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <div className="mt-4">
          <Button>Click me</Button>
        </div>
      </div>
  );
}
