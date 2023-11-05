import CountryBeaches from "../components/CountryBeaches";

export default async function DisplayCountryBeaches() {
    return (
        <>
            <CountryBeaches code="CA" category="16003" />
            <CountryBeaches code="US" category="16003" />
        </>
    );
}
