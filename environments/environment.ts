let ENV;

try {
  ENV = process.env;
} catch (_) {
  ENV = {};
}

const PORT = process.env.PORT || 3000;
const URL_EXAM = process.env.URL_EXAM || 'www.mocky.io/v2/5d681ede33000054e7e65c3f';

export const environment = {
  port: PORT,
  apiEndpointExam: URL_EXAM,
};
