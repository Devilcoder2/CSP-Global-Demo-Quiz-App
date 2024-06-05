import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomSelect = styled(Select)(() => ({
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    height: "65px",
    padding: "15px 14px",
    color: "#DBDBEB",
    fontSize: "20px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#DBDBEB",
    opacity: "50%",
    borderRadius: "12px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#696CFF",
  },
  "& .MuiSvgIcon-root": {
    color: "#DBDBEB",
  },
  "&.Mui-focused .MuiSvgIcon-root": {
    color: "#696CFF",
  },
}));

const CustomMenuProps = {
  PaperProps: {
    style: {
      backgroundColor: "#2B2C40",
      color: "#DBDBEB",
    },
  },
};

const TestInput = () => {
  const [provider, setProvider] = React.useState("");
  const [exam, setExam] = React.useState("");
  const [length, setLength] = React.useState("");

  const handleProviderChange = (event) => {
    setProvider(event.target.value);
  };

  const handleExamChange = (event) => {
    setExam(event.target.value);
  };

  const handleLengthChange = (event) => {
    setLength(event.target.value);
  };

  const selectStyles = {
    "& .MuiInputLabel-root": {
      color: "#DBDBEB",
      opacity: "50%",
      fontSize: "16px",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#696CFF",
      opacity: "100%",
      fontSize: "16px",
    },
    "& .MuiInputBase-input": {
      color: "#DBDBEB",
    },
    "& .MuiInputBase-input.Mui-focused": {
      color: "#696CFF",
      opacity: "100%",
    },
    width: "460px",
  };

  return (
    <div className="bg-[#2B2C40] mt-16 w-[95%] h-24 text-[#DBDBEB] flex justify-center items-center rounded-xl">
      <div className="space-x-8 ">
        <FormControl fullWidth sx={selectStyles} margin="normal">
          <InputLabel id="provider-select-label">
            Select Certification Providers
          </InputLabel>
          <CustomSelect
            labelId="provider-select-label"
            id="provider-select"
            value={provider}
            label="Select Certification Providers"
            onChange={handleProviderChange}
            MenuProps={CustomMenuProps}
          >
            <MenuItem value={1}>Microsoft</MenuItem>
            <MenuItem value={2}>Amazon</MenuItem>
            <MenuItem value={3}>Google</MenuItem>
          </CustomSelect>
        </FormControl>

        <FormControl fullWidth sx={selectStyles} margin="normal">
          <InputLabel id="exam-select-label">
            Select Certification Exam
          </InputLabel>
          <CustomSelect
            labelId="exam-select-label"
            id="exam-select"
            value={exam}
            label="Select Certification Exam"
            onChange={handleExamChange}
            MenuProps={CustomMenuProps}
          >
            <MenuItem value={1}>AZ-120</MenuItem>
            <MenuItem value={2}>AZ-140</MenuItem>
            <MenuItem value={3}>SC-900</MenuItem>
            <MenuItem value={4}>AI-900</MenuItem>
          </CustomSelect>
        </FormControl>

        <FormControl fullWidth sx={selectStyles} margin="normal">
          <InputLabel id="length-select-label">Select Exam Length</InputLabel>
          <CustomSelect
            labelId="length-select-label"
            id="length-select"
            value={length}
            label="Select Exam Length"
            onChange={handleLengthChange}
            MenuProps={CustomMenuProps}
          >
            <MenuItem value={1}>5</MenuItem>
            <MenuItem value={2}>10</MenuItem>
            <MenuItem value={3}>20</MenuItem>
            <MenuItem value={4}>50</MenuItem>
          </CustomSelect>
        </FormControl>
      </div>
    </div>
  );
};

export default TestInput;
