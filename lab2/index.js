import Fetch from "./Fetch.js";

const pokemon1 = new Fetch(459, "#6a0dad");
const pokemon2 = new Fetch(-24, "#6a0dad");

pokemon1.fetch();
pokemon2.fetch();