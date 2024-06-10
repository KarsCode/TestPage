/* eslint-disable no-unused-vars */
import './searchpage.css'
import Header from '../components/header'
import Navbar from '../components/Search/Navbar';
import SearchModal from '../components/Search/SearchModal'
import Footer from '../components/Footer/footer'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const SearchPage = () => {
    // State to manage the selected icon
    const [selectedIcon, setSelectedIcon] = useState('flight');
    const [redirect, setRedirect] = useState(false);
    const [tripData, setTripData] = useState(null); // State to store trip data

    // Function to handle icon click
    const handleIconClick = (iconName) => {
        setSelectedIcon(iconName);
    };

    // Function to handle trip data selection
    const handleTripDataSelect = (tripData) => {
        // Update the selected trip data state
        setTripData(tripData);
    };

    // Function to handle the search action
    const handleSearch = () => {
        // Check if required fields are missing
        if (!tripData || !tripData.departCity || !tripData.destinationCity) {
            window.alert("Please fill in all required fields: Depart City, Arrival City, and Depart Date");
            return;
        }

        // Check if Depart City and Arrival City are the same
        if (tripData.departCity.value === tripData.destinationCity.value) {
            window.alert("Depart City and Destination City Cannot be the Same");
            return;
        }

        console.log('Trip Mode',tripData.tripMode)

        // If all checks pass, construct the URL with search parameters
        const sessionToken = localStorage.getItem('TransactionStatus');
        const onwardDate = tripData.selectedDepartDate.toISOString().split('T')[0];
        const returnDate = tripData.selectedReturnDate ? tripData.selectedReturnDate.toISOString().split('T')[0] : '';

        console.log('searchpage: ',tripData.tripMode)

        const urlParams = new URLSearchParams({
            actioncode: 'FSAPIV4',
            agentid: 'SUPER',
            opid: 'FS000',
            sessiontoken: sessionToken,
            origin: tripData.departCity.value,
            destination: tripData.destinationCity.value,
            onwarddate: onwardDate,
            returndate: returnDate,
            numadults: tripData.adults,
            numchildren: tripData.children,
            numinfants: tripData.infants,
            journeytype: tripData.tripMode,
            prefclass: 'Y',
            requestformat: 'JSON',
            resultformat: 'JSON',
            searchtype: 'normal',
            numresults: 100
        });

        const customUrl = `/landing?${urlParams.toString()}`;

        // Redirect to the constructed URL
        setRedirect(customUrl);
    };

    if (redirect) {
        return <Navigate to={redirect} />;
    }

    return (
        <div>
            {/* Content on top of the gradient */}
            <div className="content font-normal">
                <div className="">
                    <Header />
                </div>
                <div className="flex flex-col items-center">
                    <div className="sm:absolute flex w-full justify-center pt-10 sm:px-4 sm:pt-12 z-3">
                        <Navbar handleIconClick={handleIconClick} />
                    </div>
                    <div className="w-full flex flex-col sm:flex-row justify-center sm:mt-[110px] sm:z-2">
                        <SearchModal selectedIcon={selectedIcon} onTripDataSelect={handleTripDataSelect} />
                    </div>
                    <div className="w-1/3 text-xl font-bold sm:z-3 p-2 sm:mt-[-20px] bg-[#E0621A] text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                        <button className="relative" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
                <div className="pt-48">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
