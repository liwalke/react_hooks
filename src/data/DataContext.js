import React from "react"

export const data = {
    number: 123,
    text: 'Example with State'
}
const DataContext = React.createContext(data)

export default DataContext