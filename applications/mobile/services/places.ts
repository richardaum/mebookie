import axios from "axios";
import React from "react";

export interface Place {
  id: string;
  name: string;
}

export const usePlaces = () => {
  const [places, setPlaces] = React.useState<Place[]>([]);

  React.useEffect(() => {
    axios
      .post<{ data: { places: Place[] } }>("/graphql", {
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
