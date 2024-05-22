export const getCitiesMockEndPoint = () => {
  return Promise.resolve([
    { id: 1, name: "Paris", continent: "Europe", population: 35 },
    { id: 2, name: "London", continent: "Europe", population: 55 },
    { id: 3, name: "Athens", continent: "Europe", population: 10 },
    { id: 4, name: "China", continent: "Asia", population: 1000 },
    { id: 5, name: "Japan", continent: "Asia", population: 50 },
    { id: 6, name: "Vietnam", continent: "Asia", population: 5 },
    { id: 7, name: "Argentina", continent: "South America", population: 150 },
    { id: 8, name: "Venezouela", continent: "South America", population: 22 },
    { id: 9, name: "Brazil", continent: "South America", population: 250 },
    { id: 10, name: "Chile", continent: "South America", population: 37 },
  ]);
};
