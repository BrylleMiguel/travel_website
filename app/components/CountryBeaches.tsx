import { countryBoundaries } from "../countryBoundaries";
import PlacePhotos from "./PlacePhotos";

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

        const res = await fetch(url, options);
        const data: { results: [] } = await res.json();

        // console.log(data);

        return (
            <div>
                {data?.results?.map((states: any) => {
                    if (states.location.country === code)
                        return (
                            <div key={states.fsq_id}>
                                <p>{states.name}</p>
                                <p>{states.location.country}</p>
                                <PlacePhotos fsq_id={states.fsq_id} />
                            </div>
                        );
                })}
            </div>
        );
    } else console.log("hmm, something's wrong");
}
