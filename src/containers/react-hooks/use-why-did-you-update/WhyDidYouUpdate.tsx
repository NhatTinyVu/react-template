/* eslint-disable */
import React, { useState } from 'react';
import Counter from './Counter';

const WhyDidYouUpdate: React.FC = () => {
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState(0);

  const counterStyle = { color: 'red' };

  return (
    <div>
      <div className="counter">
        <Counter count={count} style={counterStyle} />
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div className="user">
        <img src={`http://i.pravatar.cc/80?img=${userId}`} />
        <button onClick={() => setUserId(userId + 1)}>Switch User</button>
      </div>
    </div>
  );
}

export default WhyDidYouUpdate;
