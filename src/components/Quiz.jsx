import React, { useState, useEffect } from "react";

const Quiz = ({ quizData }) => {
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [id, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  // Randomize and pick 5 questions from quizData
  const getRandomQuestions = (data) => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5); // Get 5 random questions
  };

  // Initialize quiz with 5 random questions when component mounts or after restart
  const startNewQuiz = () => {
    setCurrentQuestions(getRandomQuestions(quizData));
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer("");
    setQuizFinished(false);
    setUserAnswers([]); // Reset user answers
  };

  useEffect(() => {
    // Ensure quizData is available and load initial questions
    if (quizData && quizData.length > 0) {
      startNewQuiz();
    }
  }, [quizData]);

  if (!quizData || quizData.length === 0) {
    return <div className="text-white">Loading or no quiz data available.</div>; // Handle missing quiz data
  }

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    setUserAnswers([...userAnswers, selectedAnswer]); // Store user's selected answer
    if (selectedAnswer === currentQuestions[id]?.answer) {
      setScore(score + 1);
    }

    if (id + 1 < currentQuestions.length) {
      setCurrentQuestionIndex(id + 1);
      setSelectedAnswer("");
    } else {
      setQuizFinished(true);
    }
  };

  const getResultMessage = () => {
    if (score >= 3) {
      return "Good Job!";
    } else {
      return "Better Luck Next Time!";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 pt-24">
      {/* Space for the navbar */}
      <div className="text-center text-2xl font-bold text-white mb-8">Quiz Application</div>

      {quizFinished ? (
        <div className="text-center shadow-xl p-8 rounded-lg max-w-3xl mx-auto bg-transparent">
          <h2 className="text-3xl font-semibold text-white mb-4">Your Score: {score}/{currentQuestions.length}</h2>
          <p className="text-xl text-white">{getResultMessage()}</p>
          
          {/* Display the answers and their correctness */}
          <div className="mt-6">
            {currentQuestions.map((question, index) => (
              <div key={index} className="mb-4">
                <p className="font-semibold text-white">{question.question}</p>
                <div>
                  {question.options.map((option, idx) => {
                    const isSelected = userAnswers[index] === option;
                    const isCorrect = question.answer === option;
                    const isIncorrect = isSelected && !isCorrect;

                    return (
                      <p
                        key={idx}
                        className={`p-2 text-white ${isIncorrect ? "border-2 border-red-500" : ""} ${isCorrect && !isSelected ? "border-2 border-green-500" : ""}`}
                      >
                        {option}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={startNewQuiz}
            className="mt-6 w-full p-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 shadow-lg"
          >
            Start Again
          </button>
        </div>
      ) : (
        <div className="shadow-xl p-8 rounded-lg max-w-3xl mx-auto bg-transparent">
          {currentQuestions[id] && (
            <>
              <h2 className="text-3xl font-semibold text-white mb-6">{currentQuestions[id].question}</h2>
              <div className="flex flex-col space-y-4">
                {currentQuestions[id].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className={`p-4 rounded-lg border border-gray-300 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${selectedAnswer === option ? "bg-gray-600" : ""}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                onClick={handleNext}
                disabled={!selectedAnswer}
                className={`mt-6 w-full p-4 rounded-lg text-white ${selectedAnswer ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"}`}
              >
                Next
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
