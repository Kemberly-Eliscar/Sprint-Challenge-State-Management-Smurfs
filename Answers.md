1. What problem does the context API help solve?
     Context API allows components to share data outside the parent-child relationship.
     It provides a way to pass and store data down a React component tree without writing it into every layer of the component hierarchy. It does so by leveraging on two types of components:
    * Provider
    * Consumer


2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    REDUCERS:
    * Reducers are pure functions that take the previous state and an action, and returns the next state. 
    
    ACTIONS:
    * Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch() .
    * Actions describe what took place but doesn’t describe how the application’s state changes.
    
    STORE:
    * Store is an object that holds the application’s state tree. 
 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    * Application state is global, and your component state is local. Flux or a flux-like library like Redux, use what they call "stores" to hold application state. That means any component, anywhere in the app can access it (kind of like a database) so long as they hook into it.
    * Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1. What is your favorite state management system you've learned and this sprint? Please explain why!
