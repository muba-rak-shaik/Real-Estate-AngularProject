var hotelService= angular.module('hotelService',[]);
hotelService.service('hotelService',[function(){
 
         var hotels=[
            {
                id: 1,
                name: "Paradise Retreat Resort",
                address: "123 Serenity Lane, Goa, India",
                city: "Goa",
                imagePath: 'Images/resortImage1.jpg',
                price: '4000',
                //details: "Welcome to Paradise Retreat Resort, where luxury meets tranquility. Nestled along the serene lanes of Goa, India, our resort offers a haven of relaxation. Immerse yourself in the beauty of our lavish accommodations and experience the epitome of comfort. From the vibrant nightlife to the pristine beaches, Paradise Retreat Resort is your gateway to an unforgettable getaway."

            
            },
            {
                id: 2,
                name: "Palm Grove Resort & Spa",
                address: "456 Tranquil Road, Manali, India",
                city: "Manali",
                imagePath: 'Images/resortImage2.jpg',
                price: '5000',
                //details: "Discover a world of serenity at Palm Grove Resort & Spa, situated amidst the tranquil roads of Manali, India. Our resort is a perfect blend of natural beauty and modern luxury. Indulge in the rejuvenating spa treatments, savor delectable cuisine, and unwind in the lap of Himalayan charm. Palm Grove Resort & Spa is your sanctuary in the heart of nature."

            },
            {
                id: 3,
                name: "Tranquil Oasis Hotel",
                address: "789 Majestic Mountain Road, Queenstown, New Zealand",
                city: "New Zealand",
                imagePath: 'Images/resortImage3.jpg',
                price: '10000',
                //details: "Escape to the majestic mountains of Queenstown, New Zealand, and find solace at Tranquil Oasis Hotel. Surrounded by breathtaking landscapes, our hotel offers a peaceful retreat from the hustle and bustle of daily life. Immerse yourself in the local culture, embark on scenic adventures, and let Tranquil Oasis Hotel be your gateway to an oasis of tranquility."

            },
            {
                id: 4,
                name: "Palm Vista Retreat",
                address: "89 Sea Road, Bali, Indonesia",
                city: "Indonesia",
                imagePath: 'Images/resortImage4.jpg',
                price: '3000',
                //details: "Experience the enchantment of Bali, Indonesia, at Palm Vista Retreat. Located along the scenic Sea Road, our retreat offers a harmonious blend of Balinese charm and modern comfort. Dive into the azure waters, explore cultural treasures, and unwind in the lush surroundings. Palm Vista Retreat invites you to a tropical paradise where relaxation knows no bounds."

            },
            {
                id: 5,
                name: "Azure Skyline Suites",
                address: "101 Azure Skyline Street, Barcelona, Spain",
                city: "Spain",
                imagePath: 'Images/resortImage5.jpg',
                price: '7000',
                //details: "Welcome to Azure Skyline Suites, a haven of sophistication in the heart of Barcelona, Spain. Marvel at the breathtaking skyline views from our suites, each designed for luxury and comfort. Immerse yourself in the vibrant culture of Barcelona, indulge in exquisite cuisine, and let Azure Skyline Suites be your elegant escape in the heart of this bustling city."

            },
            {
                id: 6,
                name: "Harmony Cove Inn & Suites",
                address: " 555 Harmony Cove Drive, Maldives, Maldives",
                city: "Maldives",
                imagePath: 'Images/resortImage6.jpg',
                price: '8000',
                //details: "Embark on a journey to the Maldives and discover the allure of Harmony Cove Inn & Suites. Nestled along Harmony Cove Drive, our inn offers a unique blend of luxury and natural beauty. With overwater bungalows and pristine beaches, experience a true Maldivian paradise. Harmony Cove Inn & Suites invites you to a world where harmony and luxury coexist."

            }
        ];
        this.getHotels= function(){
            return hotels;
        }
        this.getHotelById= function(id){
            return hotels.find(function(hotel){
                return hotel.id== id;
            });
        };
    }]);