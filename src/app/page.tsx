import Image from "next/image";

import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center">Hello, World!</h1>
      <Button>See More</Button>
    </div>
  );
}
