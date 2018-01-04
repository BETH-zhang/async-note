/**
 * 异步和同步的概念
 * 同步阻塞线程
 * 异步不阻塞线程
 */

function func1(n, callback) {
  stack.push('func1');

  setTimeout(function() {
    stack.push('func1 timeout');
    func2(n, function(result) {
      stack.push('func1 callback');
      return callback(result * 2);
    });
  }, 1000);
}

function func2(n, callback) {
  stack.push('func2');

  setTimeout(function() {
    stack.push('func2 timeout');
    callback(n * 2);
  }, 1000);
}

console.log('Main Task Begin');

var stack = [];

stack.push('main');

func1(10, function(result) {
  stack.push('main callback');
  console.log('End width ' + result);
  console.log('The func stack ' + JSON.stringify(stack, null, 2));
});

console.log('Main Task finished');