1. What problem does the context API help solve?

Passing props from Parent to Child is an inherit problem with React, especially as apps scale. Context API solves this problem by creating context. Through context different components are able to pass data without having to pass it through every level of the data app tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are triggered within an redux application action creator that contain an action type and a payload.

These actions are picked up from the reducer, delineated by action type, and result in a pure function that results in an immutable change to state.

The store, is connected to the reducer to reflect the initialState and the current state of the application. The store makes state available to any part of the application through the use of mapStateToProps /  mapDispatchToProps and connect.

The store is known as  a 'single source of truth' because through pure functions, state remains immutable, and the store holds the initialState and the notices the actions that has led to the current state.  

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application State is data that can be used throughout the Application. This state needn’t apply every state item to each individual component, but it could. As a result, Application state is extremely important as projects from in scale.

Component State, on the other hand, is state that only needs be applied to within an individual component. This state achieves it’s purpose for its select component and when the component’s objective is completed the state doesn’t need to be passed along.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is an middleware dependency that makes async functions possible. While react itself encourages pure functions, redux-thunk intercepts data flow from the action creators, and performs an async action (such as an API call) that has a side effect, and results in either an acquisition of data or an error, and then returning to the pure function state of redux.


1. What is your favorite state management system you've learned and this sprint? Please explain why!

	A little to early to make a decision on this. But, at the moment I’m leaning towards Redux. I like the organization and flow of the state. While it is quite complex, redux feels like a very strong powerful engine that will make me be very organized as a developer. I like how each piece is put together and works with each other.