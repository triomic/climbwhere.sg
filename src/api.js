import fetch from "isomorphic-unfetch";
console.log(import.meta.env);
const { SNOWPACK_PUBLIC_API_URL: API_URL } = import.meta.env;

// {
//   "id": "07308b34-bbe9-4430-a009-e3af6101b504",
//   "starts_at": "2021-04-21T11:00:00.000Z",
//   "ends_at": "2021-04-21T14:00:00.000Z",
//   "spaces": 0,
//   "gym": {
//     "id": "59ef3bb7-e0d5-49ae-9d4f-175b9679a1ec",
//     "slug": "boulder-plus",
//     "name": "boulder+",
//     "address": null,
//     "phone": null,
//     "email": null
//   }
// },
export const getSessions = async () =>
  fetch(API_URL + "/sessions")
    .then((r) => r.json())
    .then(({ data }) => data);

// { "id": "7c74a543-6584-48bc-8962-57192dd9e9f8",
//   "slug": "bff",
//   "name": "BFF Climb",
//   "address": null,
//   "phone": null,
//   "email": null
// }
export const getGyms = async () =>
  fetch(API_URL + "/gyms")
    .then((r) => r.json)
    .then(({ data }) => data);

export const getLastUpdated = async () =>
  fetch(API_URL + "/snapshots/latest")
    .then((r) => r.json())
    .then(({ data: { created_at } }) => created_at);
