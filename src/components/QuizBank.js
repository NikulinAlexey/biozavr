import QuizTopics from './QuizTopics';

import { useState } from 'react';

function QuizBank({
  quizTopics,
  handleSelectTopic,
}) {



  return (
    <>
      <QuizTopics quizTopics={quizTopics} handleSelectTopic={handleSelectTopic} />
    </>
  );
};

export default QuizBank;