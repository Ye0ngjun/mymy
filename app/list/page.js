export default function List() {
  const products = ["물", "토마토", "맥주"];
  return (
    <div>
      <div className="text-xl font-bold text-center mt-[2rem] text-white">
        상품 목록
      </div>
      {products.map((a, i) => {
        return (
          <div className="flex flex-col items-center m-4">
            <div className="w-[15rem] m-2 h-[8rem] flex items-center justify-center bg-white rounded-md ">
              {products[i]} $10
            </div>
          </div>
        );
      })}
    </div>
  );
}
