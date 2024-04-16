import countryStateData from '../../assets/common/countryStateData.json'
import moment from "moment";
import html2pdf from "html2pdf.js";

export function handleDownload(downloadDocument) {
    if (downloadDocument) {
        const url = window.URL.createObjectURL(new Blob([downloadDocument]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', downloadDocument.name);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    }
}

export function getCountryList() {
    const countries = countryStateData.map((country) => (
        country.country_name
    ));
    return countries;
}

export function getStatesListByCountry(countryName) {
    const country = countryStateData.find((c) => c.country_name === countryName);
    const states = country.states.map((state) => (
        state.state_name
    ));
    return states;
};

export function isFileObject(variable) {
    return variable instanceof File;
}

export function byteArrayToFile(byteArray, fileName) {
    const blob = new Blob([byteArray]);
    const file = new File([blob], fileName, { type: 'application/pdf' });
    return file;
}


export const getCurrentDate = () => {
    return moment().format('YYYY-MM-DD');
};

export const getStatusBadgeClass = (status) => {
    switch (status) {
        case 'Approved':
            return 'badge badge-success';
        case 'Pending':
            return 'badge badge-warning';
        case 'Rejected':
            return 'badge badge-danger';
        default:
            return 'badge badge-secondary';
    }
};
export const handleDownloadPage = async (contentRef, fileName) => {
    const content = contentRef.current;

    if (content) {
        const pdfOptions = {
            margin: 10,
            filename: `${fileName}.pdf`,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: {
                unit: "mm",
                format: [297, 420],
                orientation: "landscape",
            },
        };

        try {
            const pdfBlob = await html2pdf()
                .from(content)
                .set(pdfOptions)
                .outputPdf("blob");
            const blobUrl = URL.createObjectURL(pdfBlob);

            const a = document.createElement("a");
            a.href = blobUrl;
            a.download = pdfOptions.filename || "download.pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } catch (error) {
            console.error("Error generating PDF:", error);
        }
    }
};

export const getNameWithErrorPrefix = (name) => {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    const nameWithError = "error" + capitalizedName;
    return nameWithError;
};

export const formatDropdownOption = (value) => {
    const formattedValue = value.replace(/_/g, ' ');
    return formattedValue
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};