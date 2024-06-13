// script.js

let map;
let markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

function searchStores() {
    const locationInput = document.getElementById('location-input').value;
    const radius = document.getElementById('radius').value;

    // Example stores data
    const stores = [
        { name: "Store 1", lat: -34.397, lng: 150.644 },
        { name: "Store 2", lat: -34.497, lng: 150.744 },
        { name: "Store 3", lat: -34.297, lng: 150.844 },
    ];

    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    stores.forEach(store => {
        const marker = new google.maps.Marker({
            position: { lat: store.lat, lng: store.lng },
            map: map,
            title: store.name,
        });
        markers.push(marker);

        const storeDetails = document.getElementById('store-details');
        const storeElement = document.createElement('div');
        storeElement.textContent = store.name;
        storeDetails.appendChild(storeElement);
    });

    // Update map center based on the first store (for demonstration)
    if (stores.length > 0) {
        map.setCenter({ lat: stores[0].lat, lng: stores[0].lng });
    }
}
