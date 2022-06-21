import { FirstName, LastName, MiddleName } from "../../../App";

const CompCContext = () => {
  return (
    <>
      <h1>Component-C</h1>
      <FirstName.Consumer>
        {(fname) => (
          <LastName.Consumer>
            {(lname) => (
              <MiddleName.Consumer>
                {(mname) => <h2>{`${fname} ${mname} ${lname}`}</h2>}
              </MiddleName.Consumer>
            )}
          </LastName.Consumer>
        )}
      </FirstName.Consumer>
    </>
  );
};

export default CompCContext;
