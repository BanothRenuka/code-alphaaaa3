// ================= PROPERTY PRICE TRENDS =================
new Chart(document.getElementById("priceChart"), {
    type: "line",
    data: {
        labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
        datasets: [{
            label: "Avg Property Price ($)",
            data: [180000, 185000, 200000, 230000, 250000, 270000],
            borderColor: "purple",
            fill: false
        }]
    }
});

// ================= RENTAL YIELD =================
new Chart(document.getElementById("rentalChart"), {
    type: "bar",
    data: {
        labels: ["City A", "City B", "City C", "City D"],
        datasets: [{
            label: "Rental Yield (%)",
            data: [4.2, 5.1, 3.8, 6.0],
            backgroundColor: "violet"
        }]
    }
});

// ================= DEMAND VS SUPPLY =================
new Chart(document.getElementById("demandSupplyChart"), {
    type: "bar",
    data: {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [
            {
                label: "Demand",
                data: [320, 350, 400, 450],
                backgroundColor: "green"
            },
            {
                label: "Supply",
                data: [300, 330, 360, 380],
                backgroundColor: "red"
            }
        ]
    }
});

// ================= ECONOMIC INDICATORS =================
new Chart(document.getElementById("economicChart"), {
    type: "line",
    data: {
        labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
        datasets: [
            {
                label: "Interest Rate (%)",
                data: [3.5, 3.2, 3.8, 4.5, 5.0, 4.7],
                borderColor: "orange",
                fill: false
            },
            {
                label: "GDP Growth (%)",
                data: [2.1, -1.5, 3.2, 2.8, 2.5, 2.9],
                borderColor: "blue",
                fill: false
            }
        ]
    }
});

// ================= MARKET HOTSPOT HEAT MAP =================
// Simulated heat map using bar intensity
new Chart(document.getElementById("heatMapChart"), {
    type: "bar",
    data: {
        labels: ["North Zone", "South Zone", "East Zone", "West Zone", "Central"],
        datasets: [{
            label: "Market Activity Index",
            data: [65, 80, 55, 70, 90],
            backgroundColor: [
                "#d1b3ff",
                "#b366ff",
                "#e6ccff",
                "#c299ff",
                "#9933ff"
            ]
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
});
