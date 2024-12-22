import { Box, Button, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Timer } from "./fragments/timer";
import { isValid, total } from "@/utils/validation";
import { useTimer } from "./hooks/useTimer";
import { AlertDialog } from "@/components/molecules/alertDialog/alertDialog";
import { NextButton } from "@/components/molecules/nextButton/nextButton";
import { useValidationQuiz } from "./hooks/useValidationQuiz";
import { useValidate } from "./hooks/useValidate";
import { useQuizProgress } from "./hooks/useQuizProgress";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { SuccessDialog } from "@/components/molecules/successDialog/successDialog";
import { BackButton } from "@/components/molecules/backButton/backButton";
import { useRouter } from "next/navigation";
import { paths } from "@/utils/navigation";
import { SpError } from "@/components/organisms/spError/spError";
import { isMobile, isTablet } from "react-device-detect";

export const Validation: FC = () => {
  const router = useRouter();
  const [isTimeUpOpen, setIsTimeUpOpen] = useState(false);

  const { regExps, getQuestion, reset: resetQuiz } = useValidationQuiz();

  const {
    text,
    isError,
    handleChange,
    handleCheck,
    reset: resetText,
  } = useValidate(regExps);

  const clear = () => {
    resetQuiz();
    resetQuestion();
    resetText();
  };

  const { time, reset, isTimerOn, handleStartTimer, handleReset } = useTimer(
    () => setIsTimeUpOpen(true),
    () => clear()
  );

  const {
    isSuccess,
    handleClickNext,
    reset: resetQuestion,
    okCount,
  } = useQuizProgress(handleCheck, getQuestion, resetText, handleReset);

  const getColor = (pattern: RegExp) => {
    if (isValid(text, pattern)) {
      return "success";
    } else {
      if (isError) return "error";
      return undefined;
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#d6e9ca",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          p: 12,
          color: "gray",
        }}
      >
        <Box
          width="100%"
          sx={{
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
          display={
            isMobile || isTablet
              ? "none"
              : { xs: "none", sm: "flex", md: "flex", lg: "flex" }
          }
        >
          <Box width="100%">
            <BackButton onClick={() => router.push(paths.home)} />
          </Box>
          <Typography fontSize={30} color="gray">
            🕰️ Validation Time Attack 🕰️
          </Typography>
          <Box
            fontSize={20}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography>
              Come up with a password that meets the requirements.
            </Typography>
            <Typography>
              The shorter the time it takes to answer all questions correctly,
              the better!
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            mt={2}
            flexDirection="column"
            gap={2}
          >
            <Typography>total : {total}</Typography>
            <Box display="flex" alignItems="center" gap={4}>
              <Timer time={time} />
              <Button
                variant="contained"
                sx={{ backgroundColor: "#2e8b57" }}
                onClick={() => {
                  handleStartTimer();
                  getQuestion();
                }}
                disabled={isTimerOn}
              >
                Start
              </Button>
            </Box>
            {isTimerOn && (
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography>
                  {okCount} / {total}
                </Typography>
                <Box display="flex" alignItems="center" gap={2}>
                  <TextField
                    size="small"
                    value={text ?? ""}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleClickNext();
                    }}
                  />
                  <NextButton
                    disabled={!text}
                    onClick={() => {
                      handleClickNext(text);
                    }}
                  />
                </Box>
                <Box display="flex" flexDirection="column" gap={1}>
                  {regExps.map((question) => {
                    return (
                      <Box
                        key={question.name}
                        display="flex"
                        alignItems="center"
                        gap={1}
                      >
                        <CheckCircleOutlineIcon
                          color={getColor(question.regExp)}
                        />
                        <Typography color={getColor(question.regExp)}>
                          {question.name}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
                <Button color="error" onClick={reset}>
                  Quit
                </Button>
              </Box>
            )}
          </Box>
        </Box>
        <SpError />
      </Box>
      <AlertDialog
        title={"Oops! Time is over!"}
        open={isTimeUpOpen}
        handleClose={() => setIsTimeUpOpen(false)}
      />
      <SuccessDialog
        title="congraturations!"
        open={isSuccess}
        handleClose={() => {
          handleReset();
        }}
      />
    </>
  );
};
