import React from 'react'

/*
 This context is used to provide configuration to Cosmos components. To use it,
 app developers should put a <Provider> near the root element, and pass configuration
 to it. For example:

 const onNavigate = (event, href) => {
   history.go(href); // or another way to interact with a client-side router
   event.preventDefault();
 }

 const config = {
   onNavigate
 }

 <Provider config={config}>
   ... any Links within this block will call onNavigate ...
 </Provider>
*/

const CosmosContext = React.createContext({
  onNavigate: null
})

export default CosmosContext
