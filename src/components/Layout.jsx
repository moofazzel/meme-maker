import { Dressup } from "./Dressup";
import { MemeFace } from "./MemeFace";

export const Layout = () => {
  return (
    <>
      <div className="grid grid-cols-3 mt-32 ">
        <MemeFace />
        <div className="col-span-2 border-l-2 border-green-600">
          <Dressup />
        </div>
      </div>
    </>
  );
};
