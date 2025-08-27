What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans : getElementById is access one element by using id name.
 getElementsByClassName is access one element by using class name.
 querySelector is access one element by using class name and id name both
 querySelectorAll is access all element by using class name and id name both

 How do you create and insert a new element into the DOM?

 If I want create a div then I write : const Div = document.createElement('div');

 What is Event Bubbling and how does it work?

 Event bubbling is the default event propagation mechanism in the DOM. When an event, like a click, happen on an element, it first triggers on that element and then bubbles up through all of its ancestor elements in the DOM hierarchy, from the immediate parent all the way to the root html element and the window object. This process allows parent elements to react to events that happen on their children.

What is Event Delegation in JavaScript? Why is it useful?

 Event delegation is a technique in JavaScript where you add a single event listener to a parent element instead of adding multiple listeners to each of its child elements. The listener on the parent then uses event bubbling to capture events from its children. here is some usefull reason

Improve Performance,Dynamic Elements,Cleaner Code



What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() stops the default action of an element from happening. The default action is the browser's built-in behavior for a specific event like form submiting

stopPropagation() prevents an event from bubbling. The default action of the element is not affected by this method.