exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:8000'
  specs: ['tests/e2e/todo-spec.js']
};