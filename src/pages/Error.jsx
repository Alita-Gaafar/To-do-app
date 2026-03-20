import { useRouteError } from "react-router-dom";

export default function Error() {
  const data = useRouteError();
  console.log(data);
  

  const message = JSON.parse(data.data).message;
  

  return <div className="h-screen bg-emerald-500 text-center pt-15 text-2xl font-bold">{message}</div>;
}
