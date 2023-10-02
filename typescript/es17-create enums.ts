/**
 * START: Follow the instructions below.
 */

// The objects in the `countries` array use strings as the values of the
// `currency` properties.
// Complete this numeric enum so that it can be used instead of strings.
// Hint: Use the string values in the `currency` properties as the enum members.

enum Currency {
    Euro,
    Dollar,
}

interface Country {
    name: string;
    currency: Currency;
}

const countries: Country[] = [
    {
        name: "France",
        currency: Currency.Euro,
    },
    {
        name: "United States of America",
        currency: Currency.Dollar,
    },
    {
        name: "Italy",
        currency: Currency.Euro,
    },
    {
        name: "New Zealand",
        currency: Currency.Dollar,
    },
];

enum LanguageStatus {
    Primary = "primary",
    Secondary = "secondary",
}

const countryLanguages = [
    { language: "Spanish", status: LanguageStatus.Primary },
    { language: "English", status: LanguageStatus.Secondary },
];


export {};
