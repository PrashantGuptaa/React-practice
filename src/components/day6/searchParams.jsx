import { useSearchParams } from "react-router-dom";

const SearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("name"));
  return (
    <>
      <h1>Car Company: {searchParams.get("company")}</h1>
      <h1>Car Name: {searchParams.get("name")}</h1>
    </>
  );
};

export default SearchParams;
