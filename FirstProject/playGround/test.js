const _ = require('../node_modules/lodash');
const arr = [{"title":"XXX","body":"VKL"},{"title":"xxx","body":"xxxx"},{"title":"xxzx","body":"xxxxz"},{"title":"B","body":"AAA"},{"title":"C","body":"AAA"},{"title":"C","body":"AAA"},{"title":"C","body":"AAA"},{"title":"C","body":"AAA"},{"title":"C","body":"AAA"},{"title":"XB","body":"BBBB"}];
const x = _.unionWith(arr, _.isEqual);
x.forEach(function (value) {
    console.log(value);
})