// "use client"; //this is to make this whole component server side to client side

import Counter from "@/components/Counter/Counter";
import GalleryPage from "./gallery/page";

const HomePage = () => {
  console.log("Hello World");
  return (
    <div className="text-xl text-center">
      <h1 className="">Welcome to Home Boss</h1>
      <GalleryPage></GalleryPage>
      <Counter></Counter>
    </div>
  );
};

export default HomePage;