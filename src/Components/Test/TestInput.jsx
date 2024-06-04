import { TextField } from "@mui/material";

const TestInput = () => {
  return (
    <div className="bg-[#2B2C40] mt-16 w-[95%] h-24 text-[#DBDBEB] flex justify-center items-center rounded-xl">
      <div className=" space-x-8">
        <TextField
          label="Select Certification Providers"
          inputProps={{
            style: {
              height: "45px",
              padding: "10px 14px",
              color: "#DBDBEB",
              fontSize: "20px",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#DBDBEB",
                opacity: "50%",
                borderRadius: "12px",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#696CFF",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#DBDBEB",
              opacity: "50%",
              fontSize: "20px",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#696CFF",
              opacity: "100%",
            },
            "& .MuiInputBase-input": {
              color: "#DBDBEB",
            },
            "& .MuiInputBase-input.Mui-focused": {
              color: "#696CFF",
              opacity: "100%",
            },
            width: "460px",
          }}
        />

        <TextField
          label="Select Certification Exam"
          inputProps={{
            style: {
              height: "45px",
              padding: "10px 14px",
              color: "#DBDBEB",
              fontSize: "20px",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#DBDBEB",
                opacity: "50%",
                borderRadius: "12px",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#696CFF",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#DBDBEB",
              opacity: "50%",
              fontSize: "20px",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#696CFF",
              opacity: "100%",
            },
            "& .MuiInputBase-input": {
              color: "#DBDBEB",
            },
            "& .MuiInputBase-input.Mui-focused": {
              color: "#696CFF",
              opacity: "100%",
            },
            width: "460px",
          }}
        />

        <TextField
          label="Select Exam Length"
          inputProps={{
            style: {
              height: "45px",
              padding: "10px 14px",
              color: "#DBDBEB",
              fontSize: "20px",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#DBDBEB",
                opacity: "50%",
                borderRadius: "12px",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#696CFF",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#DBDBEB",
              opacity: "50%",
              fontSize: "20px",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#696CFF",
              opacity: "100%",
            },
            "& .MuiInputBase-input": {
              color: "#DBDBEB",
            },
            "& .MuiInputBase-input.Mui-focused": {
              color: "#696CFF",
              opacity: "100%",
            },
            width: "460px",
          }}
        />
      </div>
    </div>
  );
};

export default TestInput;
