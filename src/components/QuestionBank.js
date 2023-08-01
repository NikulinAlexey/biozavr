import Questions from './Questions';
import AddForm from './AddForm';

function QuestionBank({
  questions,
  handleSubmit,
  handleDeleteQuestion,
  handleGetAllQuestions,
}) {
  return (
    <>
      <AddForm handleSubmit={handleSubmit} />
      <Questions
        questions={questions}
        handleDeleteQuestion={handleDeleteQuestion}
        handleGetAllQuestions={handleGetAllQuestions}
      />
    </>
  );
};

export default QuestionBank;