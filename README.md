# savvycal-react

React + Hook bindings for the wonderful Savvycal service.

## Installation

With npm

`npm install --save savvycal-react`

With yarn

`yarn add savvycal-react`

## Usage

Wrap your App component with `SavvyCalProvider`

```
import React from "react"
import { SavvyCalProvider } from "savvycal-react"
import MyComp from "./components/MyComp"

function App() {
  return (
    <SavvyCalProvider>
      <div className="App">
        <MyComp />
      </div>
    </SavvyCalProvider>
  )
}

export default App
```

Then in your component:

```
import { useSavvyCal } from "savvycal-react"

export default function MyComp() {
  const savvyCal = useSavvyCal()

  const handleOpen = () => {
    savvyCal.open({ link: `my/link` })
  }

  return <div>
    <button onClick={handleOpen}>Open SavvyCal</button>
  </div>
}
```

## Credits

Contributors list:

- [@ian](https://github.com/ian)

## License

Create React App is open source software [licensed as MIT](https://github.com/facebook/create-react-app/blob/master/LICENSE). The Create React App logo is licensed under a [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/).
