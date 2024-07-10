import { React, useState } from "react";

import {
  Container,
  Card,
  Box,
  CardContent,
  CircularProgress,
  Autocomplete,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import { styled } from "@mui/material/styles";

const AllQuestions = () => {
  const [provider, setProvider] = useState("");
  const [exam, setExam] = useState("");
  const [loading, setLoading] = useState("true");
  const [questions, setQuestions] = useState([]);
  const providers = ["Amazon", "Microsoft", "Google"];
  const exams = {
    Amazon: [
      "AWS Certified Developer - Associate DVA-C02",
      "AWS Certified Solutions Architect - Associate",
    ],
    Microsoft: ["Azure Administrator Associate", "Azure Developer Associate"],
    Google: [
      "Google Cloud Professional Cloud Architect",
      "Google Cloud Professional Data Engineer",
    ],
  };
  const handleFetchQuestions = async () => {
    try {
      const response = await axios.get("http://localhost:5000/questions", {
        params: { provider, exam },
      });
      console.log("hii");
      console.log(response.data);
      setQuestions(response.data);
    } catch (error) {
      console.error("Error Fetching Questions:", error);
    }
    setLoading(false);
  };
  // const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  //   backgroundColor: theme.palette.background.default,
  //   borderRadius: theme.shape.borderRadius,
  //   "& .MuiAccordionSummary-content": {
  //     display: "flex",
  //     justifyContent: "space-between",
  //     alignItems: "center",
  //   },
  // }));
  const CustomAutocomplete = styled(Autocomplete)(() => ({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#DBDBEB",
        opacity: "50%",
        borderRadius: "12px",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#696CFF",
      },
    },
    "& .MuiAutocomplete-popupIndicator": {
      color: "#DBDBEB",
    },
    "& .MuiAutocomplete-popupIndicator.Mui-focused": {
      color: "#696CFF",
    },
    "& .MuiAutocomplete-listbox": {
      backgroundColor: "#2B2C40",
      color: "#DBDBEB",
    },
  }));

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
    width: "320px",
  };
  const StyledCard = styled(Card)(() => ({
    margin: "20px 0",
    padding: "10px",
    backgroundColor: "rgba(35, 35, 51, 0.9)",
    color: "rgb(255, 255, 255)",
    boxShadow:
      "rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px",
    borderRadius: "16px",
  }));

  const StyledAccordionSummary = styled(AccordionSummary)(() => ({
    backgroundColor: "rgba(35, 35, 51, 0.9)",
    color: "#DBDBEB",
    "& .MuiAccordionSummary-expandIconWrapper": {
      color: "#DBDBEB",
    },
  }));

  const StyledAccordionDetails = styled(AccordionDetails)(() => ({
    backgroundColor: "rgba(35, 35, 51, 0.9)",
    color: "#DBDBEB",
  }));

  const StyledTypography = styled(Typography)(() => ({
    fontSize: "20px",
  }));

  const StyledLink = styled("a")(() => ({
    color: "#696CFF",
    wordBreak: "break-all",
  }));
  const StyledButton = styled(Button)(() => ({
    backgroundColor: "rgb(105, 108, 255)",
    "&:hover": {
      backgroundColor: "rgba(105, 108, 255, 0.8)",
    },
  }));
  return (
    <Container>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          marginTop: "60px",
        }}
      >
        <Card
          variation="outlined"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "20px",
            width: "1200px",
            marginTop: "60px",
            margin: "20px 0",
            padding: "10px",
          }}
        >
          <Autocomplete
            style={{ padding: "10px", width: "45%"}}
            options={providers}
            value={provider}
            onChange={(e, val) => {
              setProvider(val);
              setExam("");
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select certificate provider"
                variant="outlined"
              />
            )}
            
          />
          <Autocomplete
            options={exams[provider] || []}
            value={exam}
            onChange={(e, val) => {
              setExam(val);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Select Exam" variant="outlined" />
            )}
            style={{ width: "45%" }}
          />
          <Button
            variant="contained"
            onClick={handleFetchQuestions}
            color="primary"
            disabled={!provider || !exam}
          >
            Fetch Questions
          </Button>
        </Card>

      </div> */}

      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            marginTop: "60px",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "20px",
              marginBottom: "20px",
              width: "100%",
              maxWidth: "1200px",
              padding: "16px",
              backgroundColor: "rgba(35, 35, 51, 0.9)",
              color: "rgb(255, 255, 255)",
              transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              backgroundImage: "none",
              overflow: "hidden",
              boxShadow:
                "rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px",
              borderRadius: "16px",
              position: "relative",
              zIndex: 0,
            }}
          >
            <CustomAutocomplete
              sx={selectStyles}
              options={providers}
              value={provider}
              onChange={(e, val) => {
                setProvider(val);
                setExam("");
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select certificate provider"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            <CustomAutocomplete
              sx={selectStyles}
              options={exams[provider] || []}
              value={exam}
              onChange={(e, val) => {
                setExam(val);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Exam"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            <StyledButton
              variant="contained"
              onClick={handleFetchQuestions}
              disabled={!provider || !exam}
            >
              Fetch Questions
            </StyledButton>
          </Card>
        </Box>
      </Container>

      <Container>
        <Box sx={{ marginTop: "60px", marginBottom: "20px" }}>
          {loading
            ? null
            : questions.map((q) => (
                <StyledCard key={q.id} elevation={3} variant="outlined">
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <StyledTypography variant="h5">
                        Question: {q.id}
                      </StyledTypography>
                    </div>
                    <Typography variant="body1" style={{ margin: "10px 0" }}>
                      {q.question}
                    </Typography>
                    {q.img && (
                      <img
                        src={q.img}
                        alt="question"
                        style={{ width: "100%", marginBottom: "10px" }}
                      />
                    )}
                    <ul style={{ listStyleType: "none" }}>
                      {q.options.map((option, index) => (
                        <li key={index} style={{ margin: "5px 0" }}>
                          <span>{option}</span>
                        </li>
                      ))}
                    </ul>
                    <Accordion>
                      <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography
                          variant="subtitle1"
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <ConstructionOutlinedIcon
                            sx={{ marginRight: "8px" }}
                          />
                          Show Solution
                        </Typography>
                      </StyledAccordionSummary>
                      <StyledAccordionDetails>
                        <Typography>Answer: {q.answer}</Typography>
                        <Typography
                          variant="body2"
                          style={{ marginTop: "15px" }}
                        >
                          Explanation: {q.explanation}
                        </Typography>
                        {q.answerImage && (
                          <img
                            src={q.answerImage}
                            alt="Answer"
                            style={{ width: "100%", marginTop: "10px" }}
                          />
                        )}
                        <Typography
                          variant="body2"
                          style={{ marginTop: "15px" }}
                        >
                          Reference:{" "}
                          <StyledLink
                            href={q.reference}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {q.reference}
                          </StyledLink>
                        </Typography>
                      </StyledAccordionDetails>
                    </Accordion>
                  </CardContent>
                </StyledCard>
              ))}
        </Box>
      </Container>
    </Container>
  );
};

export default AllQuestions;
