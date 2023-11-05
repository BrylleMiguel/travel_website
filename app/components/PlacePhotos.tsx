type PlacePhotosProps = {
    fsq_id: string;
};

export default async function PlacePhotos({ fsq_id }: PlacePhotosProps) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "fsq3So6xRt59KnyklDDYZiZUb2fBMU2p/A73SXT3gkX6PMg=",
        },
    };

    const res = await fetch(`https://api.foursquare.com/v3/places/${fsq_id}/photos?sort=NEWEST`, options);
    const data: any[] = await res.json();

    console.log(data);

    return (
        <div>
            <img src={`${data[0].prefix}${350}${data[0].suffix}`} style={{ objectFit: "cover" }} alt={data[0].id} />
        </div>
    );
}
