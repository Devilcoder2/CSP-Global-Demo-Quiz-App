import React from "react";
import { useLocation } from "react-router-dom";
import { FormControlLabel, Checkbox, FormGroup } from "@mui/material";
import { styled } from "@mui/material/styles";
import StartTestHeader from "./StartTestHeader";

// Custom styled checkbox
const GreenCheckbox = styled(Checkbox)({
  color: "#DBDBEB",
  "&.Mui-checked": {
    color: "#696CFF",
  },
});

const LiveTest = () => {
  const location = useLocation();
  const { provider, name, length } = location.state || {};

  const [selectedOptions, setSelectedOptions] = React.useState({});

  const handleChange = (event) => {
    setSelectedOptions({
      ...selectedOptions,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="h-[100vh] bg-[#232333]">
      <div>
        <StartTestHeader provider={provider} name={name} />
      </div>

      <div className="bg-[#2B2C40] mx-auto mt-10 text-lg h-3/5 w-9/12 text-[#DBDBEB] rounded-lg">
        <div className="pt-4 ml-8 font-semibold text-lg">
          Question 1/{length}
        </div>

        <div className="ml-8 mt-8 text-lg">
          <div>Who is responsible for return shipping costs?</div>
        </div>

        <div className="ml-8 mt-4">
          <FormGroup>
            {[
              "The customer",
              "The seller",
              "The shipping company",
              "Both the seller and the customer",
            ].map((option, index) => (
              <FormControlLabel
                key={index}
                control={
                  <GreenCheckbox
                    checked={!!selectedOptions[option]}
                    onChange={handleChange}
                    name={option}
                  />
                }
                label={option}
              />
            ))}
          </FormGroup>
        </div>

        <div className="ml-8 mt-4">
          <button className="border text-base rounded-lg border-white px-2 py-1 hover:border-[#696CFF] hover:text-[#696CFF]">
            Sumit answer
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveTest;
