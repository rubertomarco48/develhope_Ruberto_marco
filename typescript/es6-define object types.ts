/**
 * START: Follow the instructions below.
 */

// Add a type annotation to this variable that describes the object it contains.

interface Country {
    name: string;
    code: string;
    population: number;
}

const countryData: Country = {
    name: "India",
    code: "IN",
    population: 1_352_642_280,
};

type Currency = {
    name: string;
    code: string;
    symbol: string;
};

const currencyData: Currency = {
    name: "Euro",
    code: "EUR",
    symbol: "€",
};

const countryPopulation: { code: string; population: number } = {
    code: "NZ",
    population: 5_135_300,
};

// ----

export {};
