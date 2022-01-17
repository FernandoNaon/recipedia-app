import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { getDiets } from "../Actions";

describe("Actions", () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({ recipes: [] });

  beforeEach(() => store.clearActions());
  // import * as data from "../../db.json";

  describe("getDiets", () => {
    it('Debería hacer un dispatch con las propiedades type "GET_DIETS" y como payload, debe traer un diets.length = 13', async () => {
      return store
        .dispatch(getDiets())
        .then(() => {
          const actions = store.getActions();
          expect(actions[0].payload.length).toBe(13);
          expect(actions[0]).toEqual({
            type: "GET_DIETS",
            payload: data.diets,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
});
