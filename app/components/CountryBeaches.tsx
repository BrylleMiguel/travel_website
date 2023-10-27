import { countryBoundaries } from "../countryBoundaries";

type CountryBeachesProps = {
    code: string;
    category: string;
};

export default async function CountryBeaches({ code, category }: CountryBeachesProps) {
    const findCountry = (countryCode: string) => {
        const foundCountry = countryBoundaries.find((i: any) => countryCode === i.code);
        return foundCountry;
    };

    const foundCountry = findCountry(code);

    if (foundCountry) {
        const coordinates = foundCountry.boundaries;

        const [w, s, e, n] = coordinates;

        const options: any = {
            method: "GET",
            headers: { accept: "application/json", Authorization: process.env.TRAVEL_API_KEY },
        };

        const url = `https://api.foursquare.com/v3/places/search?categories=${category}&ne=${n},${e}&sw=${s},${w}`;

        // const res = await fetch(url, options);
        // const data = await res.json();

        // console.log(data?.results);

        return <div></div>;
    } else return null;
}
