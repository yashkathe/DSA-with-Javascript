/*
Given a function fn and a time in milliseconds t, return a debounced version of that function.

A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms. The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms. If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.

Debounce Schematic

The above diagram shows how debounce will transform events. Each rectangle represents 100ms and the debounce time is 400ms. Each color represents a different set of inputs.

Please solve it without using lodash's _.debounce() function.

 

Example 1:

Input: 
t = 50
calls = [
  {"t": 50, inputs: [1]},
  {"t": 75, inputs: [2]}
]
Output: [{"t": 125, inputs: [2]}]
Explanation:
let start = Date.now();
function log(...inputs) { 
  console.log([Date.now() - start, inputs ])
}
const dlog = debounce(log, 50);
setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 75);

The 1st call is cancelled by the 2nd call because the 2nd call occurred before 100ms
The 2nd call is delayed by 50ms and executed at 125ms. The inputs were (2).

Example 2:

Input: 
t = 20
calls = [
  {"t": 50, inputs: [1]},
  {"t": 100, inputs: [2]}
]
Output: [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]
Explanation:
The 1st call is delayed until 70ms. The inputs were (1).
The 2nd call is delayed until 120ms. The inputs were (2).

Example 3:

Input: 
t = 150
calls = [
  {"t": 50, inputs: [1, 2]},
  {"t": 300, inputs: [3, 4]},
  {"t": 300, inputs: [5, 6]}
]
Output: [{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5, 6]}]
Explanation:
The 1st call is delayed by 150ms and ran at 200ms. The inputs were (1, 2).
The 2nd call is cancelled by the 3rd call
The 3rd call is delayed by 150ms and ran at 450ms. The inputs were (5, 6).

*/

var debounce = function (fn, t) {
	let timer;
	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => fn(...args), t);
	};
};

/*
Why to use Debouncing?

Have you ever encountered a situation where a function gets called multiple times within a short amount of time, leading to performance issues or unexpected behavior? 
This is a common problem in JavaScript, especially when working with events like scrolling, resizing, or typing.

Fortunately, there's a simple technique called "debouncing" that can help you control the frequency of function calls and avoid these issues.
What is Debouncing?

Debouncing is a method that limits the rate at which a function gets called. 
It works by delaying the execution of a function until a certain amount of time has passed without any additional function calls. 
If another function call happens within this time frame, the timer resets and the function execution is delayed again.

    Debouncing is useful in situations where you want to prevent a function from being called too frequently, such as:

    Handling user input events like keypresses, mouse movements, or button clicks

    Handling expensive computations or network requests that don't need to be performed on every function call


Intuition and Approach

    debounce takes two arguments: fn and t.
    fn is the function that you want to debounce.
    t is the amount of time you want to wait before executing fn after the last time it was called.
    The debounce function returns a new function that takes any number of arguments (...args).
    Within the returned function, a timer is set using setTimeout. The timer is initially set to t milliseconds.
    Every time the returned function is called, the clearTimeout function is called to reset the timer to t milliseconds.
    Once the timer has elapsed without the returned function being called again, the timer's callback function is executed. 
    The callback function calls fn with the arguments that were passed to the returned function.
    The debounce function returns the new function that was created in step 2.

In simpler terms, the debounce function creates a new function that can only be executed after a certain amount of time has passed without it being called again. 
This is achieved by creating a timer that is reset every time the debounced function is called. 
Once the timer has elapsed without the debounced function being called again, the function is executed. 
This is useful when you want to limit the frequency of some expensive operation, such as making an HTTP request or rendering a large number of elements on a page.
*/
