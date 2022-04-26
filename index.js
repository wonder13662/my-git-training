const enrichGreetingMessage = () => {
  // TODO 시간대별로 인사말이 달라야 합니다.
  return '안녕하세요!';
};

const greetings = () => {
  console.log(enrichGreetingMessage());
};

greetings();