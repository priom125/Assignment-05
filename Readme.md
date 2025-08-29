1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans : getElementById is access one element by using id name.
 getElementsByClassName is access one element by using class name.
 querySelector is access one element by using class name and id name both
 querySelectorAll is access all element by using class name and id name both

2. How do you create and insert a new element into the DOM?

 If I want create a div then I write : const Div = document.createElement('div');
 and then i append this parent div.

3. What is Event Bubbling and how does it work?

 Event bubbling is the default event to go to parent element and from this parent element we can i other branches and access 
 their children.

4.What is Event Delegation in JavaScript? Why is it useful?

 Event delegation is a techniqu where you add a single event listener to a parent element instead of adding multiple listeners to each of its child elements. The listener on the parent then uses event bubbling to capture events from its children. here is some usefull reason

Improve Performance,Dynamic Elements,Cleaner Code



5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() stops the default action of an element from happening. example when i send a form that time this page is will refresh but preventDefault() stop this action.

stopPropagation() prevents an event from bubbling.
