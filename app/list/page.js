export default function List() {
  return (
    <div>
      <div className="text-xl font-bold text-center mt-[2rem] text-white">
        상품 목록
      </div>
      <div className="flex flex-col items-center m-4">
        <div className="w-[15rem] m-2 h-[8rem] flex items-center justify-center bg-white rounded-md ">
          상품1 $40
        </div>
        <div className="w-[15rem] m-2 h-[8rem] flex items-center justify-center bg-white rounded-md ">
          상품2 $40
        </div>
      </div>
    </div>
  );
}
