import React, {Suspense} from 'react';

 const WithSuspense = (Component) => (props) => {
  {console.log(props)}
    return <Suspense fallback={<div>Загрузка...</div>}>
      <Component {...props} />
      
    </Suspense> 
    
}

export default WithSuspense