const getHours = () => {
  return new Date().getHours();
};

const enrichGreetingMessage = () => {
  // TODO 시간대별로 인사말이 달라야 합니다.
  return `Hello world! at ${getHours()}`;
};

const greetings = () => {
  console.log(enrichGreetingMessage());
};

greetings();