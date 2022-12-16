import { Box, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Cards = styled.div`
  width: 250px;
  height: fit-content;
  display: flex;
  border: solid; 
  border-radius: 30px;
  flex-direction: column;
  margin: 1rem 1rem;
  transition: .25s;  
  overflow: hidden;
  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
    transition: .25s;
  }
`;

export const ShoeCard = ({ name, img, id, price }) => {
  return (
    <Link relative="path" to={`/products/${id}`} style={{textDecoration: "none", color: "#777"}} >
      <Cards>
        <img
          src={img}
          alt=""
          style={{ padding: '3px', margin: '1rem 1rem', width: '100%', borderRadius: '400% 1000% 300% 150%', transform: 'rotate(0.05turn)'}}
        />
        <Box sx={{ width: "100%", boxSizing: "border-box", padding: "1rem" }}>
          <Typography>{name}</Typography>
          <Typography>${price}</Typography>
        </Box>
      </Cards>
    </Link>
  );
};

export const SneakerCard = ({name, img, id, price}) => {
  return (
    <Card sx={{width: '100%', height: '200px'}}>
        <img
          src={img}
          alt=""
          style={{ padding: '3px', margin: '1rem 1rem', height:'fit-content'}}
        />
        <Box sx={{ width: "100%", boxSizing: "border-box", padding: "1rem" }}>
          <Typography>{name}</Typography>
          <Typography>${price}</Typography>
        </Box>
    </Card>

  )
}