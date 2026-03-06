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



#### React Vite



node\_modules = packages

public = images that can be access on public/with url



eslint = highlights problems in JavaScript code

install eslint on extension

package.json = has a lists of packages that need to install to run the projects

package-lock.json = it saves the version numbers of all the packages that we install

npm automatically updates package-lock.json



vite.config.js configures Vite

Vite = tool that we used to set up this project

* Vite also helps us "build" the website
* Vite also creates a server (A server puts our website at a URL)



main.jsx = sets up React



<StrictMode> = gives us some additional checks and warnings when developing our app

<Route> = adds a page to the website



###### Single Page Application (SPA)



* Only have 1 HTML file
* use React to create multiple pages



<Link> = go to another page without reloading

