import React, { useState } from 'react';
import Counter from './Counter';
import {
  useChangeUserHandler,
  useIncrementHandler,
} from './WhyDidYouUpdate.hooks';

const WhyDidYouUpdate: React.FC = () => {
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState(0);

  const handleChangeUser = useChangeUserHandler({ setUserId });
  const handleIncrement = useIncrementHandler({ setCount });

  const counterStyle = { color: 'red' };

  return (
    <div>
      <div className="counter">
        <Counter count={count} style={counterStyle} />
        <button onClick={handleChangeUser}>Increment</button>
      </div>
      <div className="user">
        <img src={`http://i.pravatar.cc/80?img=${userId}`} alt="avatar" />
        <button onClick={handleIncrement}>Change User</button>
      </div>
    </div>
  );
};

export default WhyDidYouUpdate;
