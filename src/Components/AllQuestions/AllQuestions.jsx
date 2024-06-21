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
  const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    "& .MuiAccordionSummary-content": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
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
              backgroundColor: "rgb(255, 255, 255)",
              color: "rgb(33, 43, 54)",
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
            {/* <Box sx={{ display: "flex", gap: "20px" }}> */}
            <Autocomplete
              sx={{ flex: 1 }}
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
            <Autocomplete
              sx={{ flex: 1 }}
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
            {/* </Box> */}
            <Button
              variant="contained"
              onClick={handleFetchQuestions}
              color="primary"
              disabled={!provider || !exam}
            >
              Fetch Questions
            </Button>
          </Card>
        </Box>
      </Container>

      {loading ? (
        <CircularProgress />
      ) : (
        questions.map((q) => (
          <Card
            key={q.id}
            elevation={3}
            variation="outlined"
            style={{ margin: "20px 0", padding: "10px" }}
          >
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5" style={{ fontsize: "2 rem" }}>
                  Question:{q.id}
                </Typography>
              </div>
              <Typography variant="body1" style={{ margin: "10px 0" }}>
                {q.question}
              </Typography>
              {q.img && (
                <img
                  src={q.img}
                  alt="question"
                  className="img-question"
                  style={{ width: "100%", marginBottom: "10px" }}
                />
              )}
              <ul style={{ listStyleType: "none" }}>
                {q.options.map((option, index) => (
                  <li key={index} ClassName="ind-opt">
                    <span ClassName="mcq-opt">{option}</span>
                  </li>
                ))}
              </ul>
              <Accordion>
                <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    variant="subtitle1"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <ConstructionOutlinedIcon sx={{ marginRight: "8px" }} />
                    Show Solution
                  </Typography>
                </StyledAccordionSummary>
                <AccordionDetails>
                  <Typography>Answer: {q.answer}</Typography>
                  <Typography variant="body2" style={{ marginTop: "15px" }}>
                    Explanation: {q.explanation}
                  </Typography>
                  {q.answerImage && (
                    <img
                      src={q.answerImage}
                      alt="Answer"
                      style={{ width: "100%", marginTop: "10px" }}
                    />
                  )}
                  <Typography variant="body2" style={{ marginTop: "15px" }}>
                    Reference:{" "}
                    <a
                      href={q.reference}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ wordBreak: "break-all" }}
                    >
                      {q.reference}
                    </a>
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} />
                <AccordionDetails>
                  <Typography>Answer: {q.answer}</Typography>
                  <Typography variant="body2" style={{ marginTop: "15px" }}>
                    Explanation: {q.explanation}
                  </Typography>
                  {q.answerImage && (
                    <img
                      src={q.answerImage}
                      alt="Answer"
                      style={{ width: "100%", marginTop: "10px" }}
                    />
                  )}
                  <Typography variant="body2" style={{ marginTop: "15px" }}>
                    Reference:{" "}
                    <a
                      href={q.reference}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ wordBreak: "break-all" }}
                    >
                      {q.reference}
                    </a>
                  </Typography>
                </AccordionDetails>
              </Accordion> */}
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
};

export default AllQuestions;
