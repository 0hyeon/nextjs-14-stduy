import { API_URL } from "../app/constants";
import credit from "../styles/movie-credit.module.css";
// import MovieTab from "./movieTab";
export async function getCredit(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredit({ id }: { id: string }) {
  const creditData = await getCredit(id);
  console.log("credit : ", credit);
  return (
    <div className={credit.container}>
      {creditData &&
        creditData.map((el) => (
          <div key={el.id}>
            {el.name} {el.original_name}
          </div>
        ))}
    </div>
  );
}
