const Child1 = ({ incrementMoney }) => {
  return (
    <div>
      <div>
        <button onClick={incrementMoney}>Increment by 1000</button>
      </div>
    </div>
  );
};

export default Child1;
