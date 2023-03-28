import React, { useEffect, useState } from "react";
import getPopularService from "../../service/Recipes.Service";
import Container from "../layout/Container";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import CardRecipe from "../layout/CardRecipe";

const Articoli = () => {
  const localstorageKey: string = "popular";
  const [popular, setPopular] = useState<any>([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const localStore = localStorage.getItem(localstorageKey);

    if (localStore) {
      setPopular(JSON.parse(localStore));
    } else {
      const data = await getPopularService();
      if (data && data.recipes) {
        localStorage.setItem(localstorageKey, JSON.stringify(data.recipes));
        setPopular(data.recipes);
      }
    }
  };
  return (
    <Container>
      <h2 className="text-2xl uppercase text-center">recepies</h2>
      <Splide options={{ perPage: 3, pagination: false, gap: "5rem" }}>
        {popular.map((item: any) => {
          return (
            <SplideSlide>
              <CardRecipe title={item.title} src={item.image} />
            </SplideSlide>
          );
        })}
      </Splide>
    </Container>
  );
};

export default Articoli;
