# promise-either-reactjs-with-folktalejs

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/promise-either-reactjs-with-folktalejs)


Using the Folktale.js Maybe type in a React.js application 

We have created a simple custom Maybe type but now we are going to switch to a Functional Library called [Folktale.js](https://folktale.origamitower.com/). Folktale is probably the 3rd most popular Functional library (after Rambda and Senctuary.js)

Folktale provides a [Maybe Type](https://folktale.origamitower.com/api/v2.3.0/en/folktale.maybe.html) with the two Cases named `Just` and `Nothing`. Other that that we have a `map` method and a pattern matching method called `matchWith`

```javascript
Maybe.matchWith({
  Just: ({ value }) => _,
  Nothing: () => _
});
```

If we replace our custom Maybe with the Folktale Library Maybe the code now becomes : 

```javascript
 let ClientService = ({
    getClientNameById: id =>
        Repository.getById(id)
            .map(Client.name)
            .matchWith({
                Just: ({ value }) => `Found: ${value}`, 
                Nothing: () => 'Nothing was found'
            })
}); 
```

 We can now integrate this simple `ClientService` in a React.js application.

This is not a React.js book, so we are not going to expand on the  React concepts. You can try to run the Application bellow. When you type any integer value into the text input, react calls the `ClientService` retrieves the client name and display it into a `<div>`.

<iframe  height="500" width="100%" src="https://stackblitz.com/edit/maybe-reactjs-with-folktalejs?file=src/App.js"></iframe>

```javascript
 import React from 'react';

import { ClientService } from "./ClientService.js"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      clientName: ClientService.getClientNameById(event.target.value),
      id: event.target.value
    });
  }

  render() {
    return (
      <form  >
        <label>
          Id:
          <input type="text" value={this.state.id} onChange={this.handleChange} />
        </label>
        <div> {this.state.clientName} </div>
      </form>
    );
  }
}
```

​														 																																					***[Run this](https://stackblitz.com/edit/maybe-reactjs-with-folktalejs?file=src/App.js){:target="_blank"}***

This React app is very simple. The core of the app is in the app.js file. Inside the `render() `method you can find the html snippet that the component renders:

```javascript
   <form>
        <label>
          Name:
          <input type="text" value={this.state.id} onChange={this.handleChange} />
        </label>
        <div> {this.state.clientName} </div>
   </form> 
```

The mechanics are simple :

1. The `<input type="text">` has an onChange event attached, so when we type in the box the Component calls the `handleChange` function

2. The `handleChange` in turn updates the clientName property of the state :

   ```javascript
     this.setState({
         clientName: ClientService.getClientNameById(event.target.value),
         id: event.target.value
       });
   ```

3. the `clientName` property of the state is bind to the div, which is updated in real time

```javascript
  <div> {this.state.clientName} </div>
```
