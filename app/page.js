import Link from "next/link";

export default function Home() {
  const name = "Jooonnnnn";
  const test1 = "test1";

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <div className="text-lg font-bold text-white">영준 후레시</div>
        <div className="m-4 " />
        <div className="text-lg font-bold text-white ">by YeongJun {name}</div>
      </div>
    </div>
  );
}
