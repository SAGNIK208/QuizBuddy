const {QuestionType} = require('../constants/constants');
  
  class Question {
    constructor(id, type, text, options, correctAnswer) {
      if (Object.values(QuestionType).includes(type)) {
        this.type = type;
      }else{
        //For invalid question just ignore the question
        console.error(`Invalid question type: ${type}`);
        return;
      }
      this.id = id;
      this.text = text;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
  }


  module.exports = Question;