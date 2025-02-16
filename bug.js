```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect asynchronous operation inside useEffect without cleanup
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function to clear the interval when the component unmounts
    // This can lead to memory leaks and unexpected behavior.
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```