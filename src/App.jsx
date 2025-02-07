import axios from "axios";
import { useEffect, useState } from "react";

import Tours from "./components/Tours";
const url = "https://www.course-api.com/react-tours-project";

import Loading from "./components/Loading";

const App = () => {
  const [tours, setTours] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data);

        const data = await response.data;
        console.log(data);

        setTours(data);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchTours();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h2>Error</h2>;
  }

  return (
    <div className="main">
      <h1 className="title ">Our Tours</h1>
      <hr className="title-underline" />
      <Tours tours={tours} />;
    </div>
  );
};

export default App;
