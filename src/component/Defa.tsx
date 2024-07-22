import { Link } from "react-router-dom";

export default function DefaultPageUser() {
  return (
    <>
      <h6 className="mx-auto text-center">
        please check{" "}
        <Link to={"/"} className="underline text-red-500">
          Home
        </Link>
        and
        <Link to={"/create"} className="underline text-red-500">
          Create
        </Link>
      </h6>
    </>
  );
}
