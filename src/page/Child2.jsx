const Child2 = ({ decrementMoney }) => {
  return (
    <div>
      <div>
        <button onClick={decrementMoney}>Decrement by 500</button>
      </div>
    </div>
  );
};

export default Child2;
