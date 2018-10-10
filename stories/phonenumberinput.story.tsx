import * as React from "react";
import { storiesOf } from "@storybook/react";
import PhoneNumberInput from "../src/components/PhoneNumberInput";
// import { boolean, select, text } from "@storybook/addon-knobs";
// import { css } from "emotion";
import { withState } from "@dump247/storybook-state";
import Option from "../src/components/Option";

// const className = css({
//   width: 400
// });

// const type = ["text", "date", "password", "email"];
const countries = [
  {
    id: 49,
    name: "India",
    url_name: "in",
    country_code: "+91",
    operational: true
  },
  {
    id: 120,
    name: "United Arab Emirates",
    url_name: "ae",
    country_code: "+971",
    operational: true
  },
  {
    id: 94,
    name: "Qatar",
    url_name: "qa",
    country_code: "+974",
    operational: null
  },
  {
    id: 51,
    name: "Iran",
    url_name: "ir",
    country_code: "+98",
    operational: null
  },
  {
    id: 85,
    name: "Oman",
    url_name: "om",
    country_code: "+968",
    operational: null
  },
  {
    id: 122,
    name: "United States",
    url_name: "us",
    country_code: "+1",
    operational: true
  },
  {
    id: 121,
    name: "United Kingdom",
    url_name: "gb",
    country_code: "+44",
    operational: true
  },
  {
    id: 1,
    name: "Afghanistan",
    url_name: "af",
    country_code: "+93",
    operational: null
  },
  {
    id: 2,
    name: "Albania",
    url_name: "al",
    country_code: "+355",
    operational: null
  },
  {
    id: 3,
    name: "Algeria",
    url_name: "dz",
    country_code: "+213",
    operational: null
  },
  {
    id: 4,
    name: "Angola",
    url_name: "ao",
    country_code: "+244",
    operational: null
  },
  {
    id: 5,
    name: "Argentina",
    url_name: "ar",
    country_code: "+54",
    operational: null
  },
  {
    id: 6,
    name: "Armenia",
    url_name: "am",
    country_code: "+374",
    operational: null
  },
  {
    id: 7,
    name: "Australia",
    url_name: "au",
    country_code: "+61",
    operational: null
  },
  {
    id: 8,
    name: "Austria",
    url_name: "at",
    country_code: "+43",
    operational: null
  },
  {
    id: 9,
    name: "Bahrain",
    url_name: "bh",
    country_code: "+973",
    operational: null
  },
  {
    id: 10,
    name: "Bangladesh",
    url_name: "bd",
    country_code: "+880",
    operational: null
  },
  {
    id: 11,
    name: "Belarus",
    url_name: "by",
    country_code: "+375",
    operational: null
  },
  {
    id: 12,
    name: "Belgium",
    url_name: "be",
    country_code: "+32",
    operational: null
  },
  {
    id: 13,
    name: "Bhutan",
    url_name: "bt",
    country_code: "+975",
    operational: null
  },
  {
    id: 14,
    name: "Bolivia",
    url_name: "bo",
    country_code: "+591",
    operational: null
  },
  {
    id: 15,
    name: "Bosnia \u0026 Herzegovina",
    url_name: "ba",
    country_code: "+387",
    operational: null
  },
  {
    id: 16,
    name: "Botswana",
    url_name: "bw",
    country_code: "+267",
    operational: null
  },
  {
    id: 17,
    name: "Brazil",
    url_name: "br",
    country_code: "+55",
    operational: null
  },
  {
    id: 18,
    name: "Bulgaria",
    url_name: "bg",
    country_code: "+359",
    operational: null
  },
  {
    id: 19,
    name: "Cambodia",
    url_name: "kh",
    country_code: "+855",
    operational: null
  },
  {
    id: 20,
    name: "Cameroon",
    url_name: "cm",
    country_code: "+237",
    operational: null
  },
  {
    id: 21,
    name: "Canada",
    url_name: "ca",
    country_code: "+1",
    operational: null
  },
  {
    id: 22,
    name: "Chile",
    url_name: "cl",
    country_code: "+56",
    operational: null
  },
  {
    id: 23,
    name: "China",
    url_name: "cn",
    country_code: "+86",
    operational: null
  },
  {
    id: 24,
    name: "Colombia",
    url_name: "co",
    country_code: "+57",
    operational: null
  },
  {
    id: 25,
    name: "Costa Rica",
    url_name: "cr",
    country_code: "+506",
    operational: null
  },
  {
    id: 26,
    name: "Croatia",
    url_name: "hr",
    country_code: "+385",
    operational: null
  },
  {
    id: 27,
    name: "Cuba",
    url_name: "cu",
    country_code: "+53",
    operational: null
  },
  {
    id: 28,
    name: "Cyprus",
    url_name: "cy",
    country_code: "+357",
    operational: null
  },
  {
    id: 29,
    name: "Czech Republic",
    url_name: "cz",
    country_code: "+420",
    operational: null
  },
  {
    id: 30,
    name: "Denmark",
    url_name: "dk",
    country_code: "+45",
    operational: null
  },
  {
    id: 31,
    name: "Ecuador",
    url_name: "ec",
    country_code: "+593",
    operational: null
  },
  {
    id: 32,
    name: "Egypt",
    url_name: "eg",
    country_code: "+20",
    operational: null
  },
  {
    id: 33,
    name: "Estonia",
    url_name: "ee",
    country_code: "+372",
    operational: null
  },
  {
    id: 34,
    name: "Ethiopia",
    url_name: "et",
    country_code: "+251",
    operational: null
  },
  {
    id: 35,
    name: "Fiji",
    url_name: "fj",
    country_code: "+679",
    operational: null
  },
  {
    id: 36,
    name: "Finland",
    url_name: "fi",
    country_code: "+358",
    operational: null
  },
  {
    id: 37,
    name: "France",
    url_name: "fr",
    country_code: "+33",
    operational: null
  },
  {
    id: 38,
    name: "Germany",
    url_name: "de",
    country_code: "+49",
    operational: null
  },
  {
    id: 39,
    name: "Ghana",
    url_name: "gh",
    country_code: "+233",
    operational: null
  },
  {
    id: 40,
    name: "Greece",
    url_name: "gr",
    country_code: "+30",
    operational: null
  },
  {
    id: 41,
    name: "Greenland",
    url_name: "gl",
    country_code: "+299",
    operational: null
  },
  {
    id: 42,
    name: "Guinea",
    url_name: "gn",
    country_code: "+224",
    operational: null
  },
  {
    id: 43,
    name: "Guyana",
    url_name: "gy",
    country_code: "+592",
    operational: null
  },
  {
    id: 44,
    name: "Haiti",
    url_name: "ht",
    country_code: "+509",
    operational: null
  },
  {
    id: 45,
    name: "Honduras",
    url_name: "hn",
    country_code: "+504",
    operational: null
  },
  {
    id: 46,
    name: "Hong Kong",
    url_name: "hk",
    country_code: "+852",
    operational: null
  },
  {
    id: 47,
    name: "Hungary",
    url_name: "hu",
    country_code: "+36",
    operational: null
  },
  {
    id: 48,
    name: "Iceland",
    url_name: "is",
    country_code: "+354",
    operational: null
  },
  {
    id: 50,
    name: "Indonesia",
    url_name: "id",
    country_code: "+62",
    operational: null
  },
  {
    id: 52,
    name: "Iraq",
    url_name: "iq",
    country_code: "+964",
    operational: null
  },
  {
    id: 53,
    name: "Ireland",
    url_name: "ie",
    country_code: "+353",
    operational: null
  },
  {
    id: 54,
    name: "Israel",
    url_name: "il",
    country_code: "+972",
    operational: null
  },
  {
    id: 55,
    name: "Italy",
    url_name: "it",
    country_code: "+39",
    operational: null
  },
  {
    id: 56,
    name: "Japan",
    url_name: "jp",
    country_code: "+81",
    operational: null
  },
  {
    id: 57,
    name: "Jersey",
    url_name: "je",
    country_code: "+44",
    operational: null
  },
  {
    id: 58,
    name: "Jordan",
    url_name: "jo",
    country_code: "+962",
    operational: null
  },
  {
    id: 59,
    name: "Kazakhstan",
    url_name: "kz",
    country_code: "+7",
    operational: null
  },
  {
    id: 60,
    name: "Kenya",
    url_name: "ke",
    country_code: "+254",
    operational: null
  },
  {
    id: 61,
    name: "Kuwait",
    url_name: "kw",
    country_code: "+965",
    operational: null
  },
  {
    id: 62,
    name: "Kyrgyzstan",
    url_name: "kg",
    country_code: "+996",
    operational: null
  },
  {
    id: 63,
    name: "Lebanon",
    url_name: "lb",
    country_code: "+961",
    operational: null
  },
  {
    id: 64,
    name: "Liberia",
    url_name: "lr",
    country_code: "+231",
    operational: null
  },
  {
    id: 65,
    name: "Libya",
    url_name: "ly",
    country_code: "+218",
    operational: null
  },
  {
    id: 66,
    name: "Lithuania",
    url_name: "lt",
    country_code: "+370",
    operational: null
  },
  {
    id: 67,
    name: "Luxembourg",
    url_name: "lu",
    country_code: "+352",
    operational: null
  },
  {
    id: 68,
    name: "Macedonia",
    url_name: "mk",
    country_code: "+389",
    operational: null
  },
  {
    id: 69,
    name: "Madagascar",
    url_name: "mg",
    country_code: "+261",
    operational: null
  },
  {
    id: 70,
    name: "Malaysia",
    url_name: "my",
    country_code: "+60",
    operational: null
  },
  {
    id: 71,
    name: "Maldives",
    url_name: "mv",
    country_code: "+960",
    operational: null
  },
  {
    id: 72,
    name: "Mali",
    url_name: "ml",
    country_code: "+223",
    operational: null
  },
  {
    id: 73,
    name: "Mauritius",
    url_name: "mu",
    country_code: "+230",
    operational: null
  },
  {
    id: 74,
    name: "Mexico",
    url_name: "mx",
    country_code: "+52",
    operational: null
  },
  {
    id: 75,
    name: "Monaco",
    url_name: "mc",
    country_code: "+377",
    operational: null
  },
  {
    id: 76,
    name: "Mongolia",
    url_name: "mn",
    country_code: "+976",
    operational: null
  },
  {
    id: 77,
    name: "Morocco",
    url_name: "ma",
    country_code: "+212",
    operational: null
  },
  {
    id: 78,
    name: "Namibia",
    url_name: "na",
    country_code: "+264",
    operational: null
  },
  {
    id: 79,
    name: "Nepal",
    url_name: "np",
    country_code: "+977",
    operational: null
  },
  {
    id: 80,
    name: "Netherlands",
    url_name: "nl",
    country_code: "+31",
    operational: null
  },
  {
    id: 81,
    name: "New Zealand",
    url_name: "nz",
    country_code: "+64",
    operational: null
  },
  {
    id: 82,
    name: "Nigeria",
    url_name: "ng",
    country_code: "+234",
    operational: null
  },
  {
    id: 83,
    name: "North Korea",
    url_name: "kp",
    country_code: "+850",
    operational: null
  },
  {
    id: 84,
    name: "Norway",
    url_name: "no",
    country_code: "+47",
    operational: null
  },
  {
    id: 86,
    name: "Pakistan",
    url_name: "pk",
    country_code: "+92",
    operational: null
  },
  {
    id: 87,
    name: "Panama",
    url_name: "pa",
    country_code: "+507",
    operational: null
  },
  {
    id: 88,
    name: "Papua New Guinea",
    url_name: "pg",
    country_code: "+675",
    operational: null
  },
  {
    id: 89,
    name: "Paraguay",
    url_name: "py",
    country_code: "+595",
    operational: null
  },
  {
    id: 90,
    name: "Peru",
    url_name: "pe",
    country_code: "+51",
    operational: null
  },
  {
    id: 91,
    name: "Philippines",
    url_name: "ph",
    country_code: "+63",
    operational: null
  },
  {
    id: 92,
    name: "Poland",
    url_name: "pl",
    country_code: "+48",
    operational: null
  },
  {
    id: 93,
    name: "Portugal",
    url_name: "pt",
    country_code: "+351",
    operational: null
  },
  {
    id: 95,
    name: "Romania",
    url_name: "ro",
    country_code: "+40",
    operational: null
  },
  {
    id: 96,
    name: "Russia",
    url_name: "ru",
    country_code: "+7",
    operational: null
  },
  {
    id: 97,
    name: "Rwanda",
    url_name: "rw",
    country_code: "+250",
    operational: null
  },
  {
    id: 98,
    name: "Saudi Arabia",
    url_name: "sa",
    country_code: "+966",
    operational: null
  },
  {
    id: 99,
    name: "Serbia",
    url_name: "rs",
    country_code: "+381",
    operational: null
  },
  {
    id: 100,
    name: "Singapore",
    url_name: "sg",
    country_code: "+65",
    operational: null
  },
  {
    id: 101,
    name: "Slovakia",
    url_name: "sk",
    country_code: "+421",
    operational: null
  },
  {
    id: 102,
    name: "Slovenia",
    url_name: "si",
    country_code: "+386",
    operational: null
  },
  {
    id: 103,
    name: "South Africa",
    url_name: "za",
    country_code: "+27",
    operational: null
  },
  {
    id: 104,
    name: "South Korea",
    url_name: "kr",
    country_code: "+82",
    operational: null
  },
  {
    id: 105,
    name: "Spain",
    url_name: "es",
    country_code: "+34",
    operational: null
  },
  {
    id: 106,
    name: "Sri Lanka",
    url_name: "lk",
    country_code: "+94",
    operational: null
  },
  {
    id: 107,
    name: "Sudan",
    url_name: "sd",
    country_code: "+249",
    operational: null
  },
  {
    id: 108,
    name: "Sweden",
    url_name: "se",
    country_code: "+46",
    operational: null
  },
  {
    id: 109,
    name: "Switzerland",
    url_name: "ch",
    country_code: "+41",
    operational: null
  },
  {
    id: 110,
    name: "Syria",
    url_name: "sy",
    country_code: "+963",
    operational: null
  },
  {
    id: 111,
    name: "Taiwan",
    url_name: "tw",
    country_code: "+886",
    operational: null
  },
  {
    id: 112,
    name: "Tajikistan",
    url_name: "tj",
    country_code: "+992",
    operational: null
  },
  {
    id: 113,
    name: "Tanzania",
    url_name: "tz",
    country_code: "+255",
    operational: null
  },
  {
    id: 114,
    name: "Thailand",
    url_name: "th",
    country_code: "+66",
    operational: null
  },
  {
    id: 115,
    name: "Tunisia",
    url_name: "tn",
    country_code: "+216",
    operational: null
  },
  {
    id: 116,
    name: "Turkey",
    url_name: "tr",
    country_code: "+90",
    operational: null
  },
  {
    id: 117,
    name: "Turkmenistan",
    url_name: "tm",
    country_code: "+993",
    operational: null
  },
  {
    id: 118,
    name: "Uganda",
    url_name: "ug",
    country_code: "+256",
    operational: null
  },
  {
    id: 119,
    name: "Ukraine",
    url_name: "ua",
    country_code: "+380",
    operational: null
  },
  {
    id: 123,
    name: "Uruguay",
    url_name: "uy",
    country_code: "+598",
    operational: null
  },
  {
    id: 124,
    name: "Uzbekistan",
    url_name: "uz",
    country_code: "+998",
    operational: null
  },
  {
    id: 125,
    name: "Venezuela",
    url_name: "ve",
    country_code: "+58",
    operational: null
  },
  {
    id: 126,
    name: "Vietnam",
    url_name: "vn",
    country_code: "+84",
    operational: null
  },
  {
    id: 127,
    name: "Yemen",
    url_name: "ye",
    country_code: "+967",
    operational: null
  },
  {
    id: 128,
    name: "Zambia",
    url_name: "zm",
    country_code: "+260",
    operational: null
  },
  {
    id: 129,
    name: "Zimbabwe",
    url_name: "zw",
    country_code: "+263",
    operational: null
  }
];

storiesOf("PhoneNumberInput", module).add(
  "Material",
  withState({})(({ store }) => (
    <PhoneNumberInput
      countryCode={store.state.countryCode || "+91"}
      phone={store.state.phone || ""}
      onChange={({ countryCode, phone }) => store.set({ countryCode, phone })}
    >
      {countries.map(country => (
        <Option
          key={country.id}
          value={country.country_code}
          label={`${country.name} (${country.country_code})`}
        />
      ))}
    </PhoneNumberInput>
  ))
);
