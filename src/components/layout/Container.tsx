import { Outlet } from "react-router";

export default function Container() {
  return (
    <div className="flex min-h-dvh px-[24rem] pt-[12rem]">
      <Outlet />
    </div>
  );
}
