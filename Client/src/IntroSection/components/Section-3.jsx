import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 4vw;
  position: relative;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
`;

const Header = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: black;
  margin: 15px;
  padding: 10px 20px;
  border: 2px solid #ff266e;
  position: relative;
`;

const Circle = styled.div`
  width: 15px;
  height: 15px;
  background: #ff266e;
  border-radius: 50%;
  position: absolute;
`;

const TopLeft = styled(Circle)`
  top: 8px;
  left: 9px;
`;

const TopRight = styled(Circle)`
  top: 8.5px;
  left: 297px;
`;

const BottomLeft = styled(Circle)`
  bottom: 9px;
  left: 9px;
`;

const BottomRight = styled(Circle)`
  bottom: 9px;
  left: 297px;
`;

const ProductGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 5vh;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-height: 500px;
  object-fit: cover;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  width: 250px;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 250px;
  max-height: 210px;
  border-radius: 10px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 13px;
  color: gray;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const Button = styled.button`
  background: #ff4f77;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  &:hover {
    background: #ff3366;
  }
`;

const Stars = styled.div`
  color: gold;
  margin-bottom: 10px;
`;

const products = [
  {
    name: "Jordan Stay 3",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a4ac1985-5f2d-4571-80c8-44afb1669f43/JORDAN+MVP.png",
    price: "$150.00",
  },
  {
    name: "Nike Air Max 100",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3035f5bd-54d2-49c2-a4c8-e85ee99854c2/W+NIKE+AIR+MAX+SNDR.png",
    price: "$130.00",
  },
  {
    name: "Nike Air Max 300",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f278e36a-db77-4574-88b6-58c14eb89e69/NIKE+VOMERO+18+%28GS%29.png",
    price: "$160.00",
  },
  {
    name: "Vemaro 17",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/108039/01/sv01/fnd/IND/fmt/png/Accelerate-NITRO%E2%84%A2-SQD-Unisex-Indoor-Court-Shoes",
    price: "$140.00",
  },
];

function Section3() {
  return (
      <Container>
        <HeaderWrapper>
          <Header>
            Upcoming Arrivals
          </Header>
          <TopLeft />
          <TopRight />
          <BottomLeft />
          <BottomRight />
        </HeaderWrapper>

        <ProductGrid>
          {products.map((product, index) => (
            <Card key={index}>
              <Image src={product.image} alt={product.name} />
              <Title>{product.name}</Title>
              <Description>
              This shoes is engineered for those who demand both performance and style .
              </Description>
              <Stars>⭐⭐⭐⭐⭐ (29)</Stars>
              <Price>{product.price}</Price>
              <Button>Pre-Order</Button>
            </Card>
          ))}
        </ProductGrid>
      </Container>

  );
}

export default Section3;
