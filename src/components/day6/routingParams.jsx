import { useParams } from "react-router-dom";

const RoutingParams = () => {
  const params = useParams();
  console.log(params);

  const getDynamicData = () => {
    const appliance = params.appliance;
    if (appliance === "mixer") {
      return <h1>Current appliance is {appliance}, and it is used in homes</h1>;
    } else if (appliance === "mobile") {
      return (
        <h1>
          Current appliance is {appliance}, and is used for calling purpose
        </h1>
      );
    } else {
      return <h1>Current Appliance: {appliance}</h1>;
    }
  };
  
  return <>{getDynamicData()}</>;
};

export default RoutingParams;

// ES6 De-structuring