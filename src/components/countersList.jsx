import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialCounters = [
    { id: 0, value: 0, name: "Ненужная вещь", price: 200 },
    { id: 1, value: 4, name: "Ложка", price: 130 },
    { id: 2, value: 0, name: "Вилка", price: 220 },
    { id: 3, value: 0, name: "Тарелка", price: 340 },
    { id: 4, value: 0, name: "Набор минималиста", price: 290 },
  ];
  const [counters, setCounters] = useState(initialCounters);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialCounters);
  };
  const handleIncrement = (id) => {
    setCounters((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, value: item.value + 1 } : item
      )
    );
  };
  const handleDecrement = (id) => {
    setCounters((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, value: item.value - 1 } : item
      )
    );
  };
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
