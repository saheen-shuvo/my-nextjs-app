// "use client"; //this is to make this whole component server side to client side

import Counter from "@/components/Counter/Counter";

const HomePage = () => {
  console.log("Hello World");
  return (
    <div className="text-6xl text-center">
      <h1 className="">Welcome to Home Boss</h1>
      <Counter></Counter>
    </div>
  );
};

export default HomePage;