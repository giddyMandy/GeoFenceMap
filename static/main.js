document.addEventListener("DOMContentLoaded", function () {
    const stateSelect = document.getElementById("state-select");
    const lgaSelect = document.getElementById("lga-select");
    const districtSelect = document.getElementById("district-select");
    const mapFrame = document.getElementById("map-frame");

    function updateOptions(url, requestData, dropdown, placeholder) {
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestData)
        })
        .then(response => response.json())
        .then(data => {
            dropdown.innerHTML = `<option value="">${placeholder}</option>`;
            data.lgas?.forEach(item => dropdown.innerHTML += `<option value="${item}">${item}</option>`);
            data.districts?.forEach(item => dropdown.innerHTML += `<option value="${item}">${item}</option>`);
            dropdown.disabled = data.lgas?.length === 0 && data.districts?.length === 0;
        })
        .catch(error => console.error("Error fetching data:", error));
    }

    function updateMap(state, lga = null, district = null) {
        fetch("/get_map", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ state_name: state, lga_name: lga, district_name: district })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                mapFrame.src = "static/map.html";
            }
        })
        .catch(error => console.error("Error fetching map:", error));
    }

    stateSelect.addEventListener("change", function () {
        const state = stateSelect.value;
        if (state) {
            updateOptions("/get_lgas", { state_name: state }, lgaSelect, "--Select an LGA--");
            updateMap(state);
        }
    });

    lgaSelect.addEventListener("change", function () {
        const state = stateSelect.value;
        const lga = lgaSelect.value;
        if (lga) {
            updateOptions("/get_districts", { lga_name: lga }, districtSelect, "--Select a District--");
            updateMap(state, lga);
        }
    });

    districtSelect.addEventListener("change", function () {
        const state = stateSelect.value;
        const lga = lgaSelect.value;
        const district = districtSelect.value;
        if (district) {
            updateMap(state, lga, district);
        }
    });
});
