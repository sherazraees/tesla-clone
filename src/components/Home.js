import React from "react";
import Section from "./Section";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      {data.map((car) => {
        return (
          <Section
            title={car.title}
            description={car.description}
            backgroundImg={car.image}
            leftBtnText="Customer Order"
            rightBtnText="Existing Inventory"
          ></Section>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

export default Home;

const data = [
  {
    id: 0,
    title: "Model S",
    description: "Order Online for Touchless Delivery",
    image: "model-s.jpg",
    range: "390",
    time: "1.99",
    topSpeed: "200",
    peakPower: "1,020",
  },
  {
    id: 1,
    title: "Model 3",
    description: "Order Online for Touchless Delivery",
    image: "model-3.jpg",
    range: "400",
    time: "2.99",
    topSpeed: "180",
    peakPower: "900",
  },
  {
    id: 2,
    title: "Model X",
    description: "Order Online for Touchless Delivery",
    image: "model-x.jpg",
    range: "350",
    time: "1.55",
    topSpeed: "150",
    peakPower: "1,130",
  },
  {
    id: 3,
    title: "Model Y",
    description: "Order Online for Touchless Delivery",
    image: "model-y.jpg",
    range: "410",
    time: "2.05",
    topSpeed: "190",
    peakPower: "1,040",
  },
  {
    id: 4,
    title: "Accessories",
    description: "",
    image: "accessories.jpg",
    range: "410",
    time: "2.05",
    topSpeed: "190",
    peakPower: "1,040",
  },
];
