import { useState } from "react";
import Button from "./components/Botton";
import Input from "./components/Input";
import OrderCards from "./components/OrderCards"
function App() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(index);
  };

  const cards = [
    {
      icon: <i className="fa-solid fa-cart-shopping text-2xl text-green-500"></i>,
      title: "Order placed",
      description: "Lorem ipsum dolor sit amet",
      number: 100,
    },
    {
      icon: <i className="fa-solid fa-cogs text-2xl text-green-500"></i>,
      title: "Processing",
      description: "Lorem ipsum dolor sit amet",
      number: 100,
    },
    {
      icon: <i className="fa-solid fa-industry text-2xl text-green-500"></i>,
      title: "Manufacturing",
      description: "Lorem ipsum dolor sit amet",
      number: 10,
    },
    {
      icon: <i className="fa-solid fa-truck text-2xl text-green-500"></i>,
      title: "Dispatch",
      description: "Lorem ipsum dolor sit amet",
      number: 8,
    },
    {
      icon: <i className="fa-solid fa-box text-2xl text-green-500"></i>,
      title: "Delivered",
      description: "Lorem ipsum dolor sit amet",
      number: 10,
    },
  ];

  return (
    <>
      <div
        className="flex items-center gap-4 font-semibold
    "
      >
        <Button variant="primary" size="sm">
          Add items
        </Button>
        <Button variant="secondary" size="md">
          Add items
        </Button>
        <Button variant="tertiary" size="lg">
          Add items
        </Button>
        <Button variant="fourthiary" size="xl">
          Add items
        </Button>
        </div>
        <br />
        <div className="ms-3">
        </div>
<br />
<div className="flex space-x-4 justify-center">
      {cards.map((card, index) => (
        <OrderCards
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          number={card.number}
          active={activeCard === index}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
      
    </>
  );
}

export default App;
