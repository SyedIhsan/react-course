### React-course



Babel = JavaScript compiler (translates other languages into JavaScript



JSX = JavaScript XML (same as JavaScript, but we can write HTML directly in our JavaScript code)





##### Components



Component = a piece of the website



When building websites:



* It's better to split up the website into pieces.
* So we can work on a small piece of the website at a time.



The component name must start with a capital letter.



Fragment (<></>) = group elements together, without creating an extra <div>



key = helps React track changes in the array



##### State



State = data that is connected to the HTML



When we update this data, it will update the HTML



State give 2 values:



1. The current data
2. Updater function



State = save data that changes over time



Spread Operator (...) = takes the values in an array, and copies them into a new array



onChange = runs a function when we change the text inside an <input>



Lifting the State Up = share state between multiple components



Hooks = insert React features into our component



React.useState() is a hook



React Hooks:



* useState() = automatically updates the HTML when the data changes
* useEffect() = run some code after the component is created or updated
* useRef() = automatically save an HTML element from the component
* and more...



Every hook starts with the word "use"



Put hooks at the top of the component



Hooks should not be inside anything



###### Dependency Array = control when useEffect runs



\[] = only run once, after the component is created



\[chatMessages] = run this function every time chatMessages changes



Best Practice = Give useEffect a dependency array to avoid running too often



ref = container with special React features

