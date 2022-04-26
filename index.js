const enrichGreetingMessage = () => {
  // TODO 시간대별로 인사말이 달라야 합니다.
  return 'Hello world!';
};

const greetings = () => {
  console.log(enrichGreetingMessage());
};

greetings();