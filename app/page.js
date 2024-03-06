export default function Home() {
  const name = 'Jooo';
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-300">
      <div className="text-lg font-bold text-white">영준 후레시</div>
      <div className="m-4"/>
      <div className="text-lg font-bold text-white ">by YeongJun { name }</div>
    </div>
  );
}
