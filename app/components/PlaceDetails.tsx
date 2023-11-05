type PlaceDetailsProps = {
    fsq_id: string;
};

export default async function PlaceDetails({ fsq_id }: PlaceDetailsProps) {
    const options: any = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: process.env.TRAVEL_API_KEY,
        },
    };

    // const url = `https://api.foursquare.com/v3/places/5a187743ccad6b307315e6fe?fields=${fsq_id}%2Cname%2Cdescription%2Clocation%2Ccategories%2Crelated_places%2Clink%2Cclosed_bucket%2Cemail%2Cwebsite%2Csocial_media%2Cverified%2Chours%2Crating%2Cprice%2Cvenue_reality_bucket`;

    // const res = await fetch(url, options);
    // const data = await res.json();

    return null;
}
