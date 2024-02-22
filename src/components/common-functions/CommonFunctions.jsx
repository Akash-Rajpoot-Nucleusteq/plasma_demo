import countryStateData from '../../assets/lists/countryStateData.json'

export function downloadDocument(url, fileName) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        })
        .catch(error => console.error('Error downloading document:', error));
}

export function getCountryList() {
    const countries = countryStateData.map((country) => (
        country.country_name
    ));
    return countries;
}

export function getStatesListByCountry(countryName) {
    const country = countryStateData.find((c) => c.country_name === countryName);
    console.log('country name is: ', countryName);
    console.log('country : ', country);
    const states = country.states.map((state) => (
        state.state_name
    ));
    return states;
};

export function isFileObject(variable) {
    return variable instanceof File;
}