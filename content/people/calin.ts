import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Calin Tamas",
  about: `Building mobile apps. I aim to write reliable and well-documented software.`,
  image: {
    url: "people/calin.jpeg",
  },
  social: {
    homepage: "https://calintamas.dev/",
    twitter: "calintamas2",
    github: "calintamas",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "", // TODO: Country name
      code: "", // TODO: Two-letter country code
    },
    city: "", // TODO: City name
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
