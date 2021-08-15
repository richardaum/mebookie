import axios from "axios";
import React from "react";

export interface IPlace {
  id: string;
  name: string;
}

export const usePlaces = () => {
  const [places, setPlaces] = React.useState<IPlace[]>([]);

  React.useEffect(() => {
    axios
      .post<{ data: { places: IPlace[] } }>("/graphql", {
        query: `
          {
            places {
              id
              name
            }
          }
        `,
      })
      .then(({ data }) => setPlaces(data.data.places));
  }, []);

  return { places };
};
