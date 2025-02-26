import { Outlet } from "react-router";

export default function Container() {
  return (
    <div className="flex min-h-dvh justify-center pt-[12rem]">
      <Outlet />
    </div>
  );
}
