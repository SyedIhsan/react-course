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





##### Backend



Backend = manages the data



axios = cleaner way to make requests to the backend



API = Application Programming Interface



/api = these URL Paths are for interacting with the backend



<base href="/" /> (Adds / in front of any relative URLs)

e.g. /images/products/shirt.png



###### Add Server Proxy



server: {

  proxy: {

    '/api': {

      target: 'http://localhost:3000'

    },

    '/images': {

      target: 'http://localhost:3000'

    }

  }

}





Query Parameter = lets us add additional info to our request



'/api/cart-items?expand=product'





##### Data Mutation



Data Mutation = update data in the backend



###### HTTP Method



Backend will look into this: Type \& URL Path (e.g. GET /api/products)

Type: GET/POST/PUT/DELETE

URL Path: /api/products

4 common types of requests:



GET = get some data

POST = create some data

PUT = update some data

DELETE = delete some data





useNavigate() = lets us navigate to (go to) another page in our app





##### Automated Tests



npm install --save-dev vitest@3.1.2



\--save-dev = only for development



###### Unit Test = test 1 unit (or 1 piece) of code



it = create a test

expect = check if the result is correct

describe = groups tests together (group of tests = test suite)



To test, run:

npx vitest





###### Integration Test = test multiple units of code working together



render = display the component on the page



npm install --save-dev @testing-library/react@16.3.0 @testing-library/jest-dom@6.6.3 @testing-library/user-event@14.6.1 jsdom@26.1.0



import { render } from '@testing-library/react'; = renders a component in a fake web page



In our tests, we should not contact a real backend



vi.fn() = creates a fake function that doesn't do anything (mock)

screen = check the fake web page





###### Test User Interactions



vi.mock() = create a fake packages



Test Hook:

* beforeEach()
* afterEach()
* beforeAll()
* afterAll()



Mock the Implementation = make the mock do whatever we want



MemoryRouter = specifically for testing



within() = lets us find things within a specific element





##### Deployment (AWS)



EC2 (Elastic Compute Cloud) = rent a computer from AWS



Infrastructure as a Service (IaaS)



Elastic Beanstalk = End-to-end web application management



Platform as a Service (PaaS)



1. Uses EC2 to rent a computer
2. Installs all the software we need
3. Does all the software setup for us



Role = gives Elastic Beanstalk permission to use other services in AWS



Load Balancer = distribute the request across multiple computer (Busy Website/Traffic)



Route 53 = manage domain names in AWS



Hosted Zone = lets us connect a domain name to our app



React Compiler = optimizes our React code





##### TypeScript



TypeScript = is just JavaScript with extra features



Features:



* Type Checking = Add types to a variables (string, number, object, etc)
* Type Inference = TypeScript can figure out the type automatically



! = this value definitely exists (it will not be null)



allowJs = lets us mix TypeScript and JavaScript files

