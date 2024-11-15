import ky from "ky";

export const instance = ky.create({
  prefixUrl: "http://localhost:8080",
  headers: {
    Accept: "application/json",
  },
});
