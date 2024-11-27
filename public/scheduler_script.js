// Date Field Boolean
let dateIsPicked = false;

document.addEventListener('DOMContentLoaded', function () {
    const confirm_button = document.getElementById('confirm_button');
    const calendarInput = document.getElementById('myCalendar');
    const djNameElement = document.getElementById('DJ_name');

    // Initialize Flatpickr
    flatpickr("#myCalendar", {
        enableTime: false,            // Date-only picker
        dateFormat: "Y-m-d",          // Date format as Year-Month-Day
        minDate: "today",             // Restrict past dates
        maxDate: "2024-12-31",        // Restrict future dates
        inline: true,                 // Display calendar inline (optional)
        onChange: handleDateChange    // Use the custom function defined below
    });

    // Define the onChange callback function
    function handleDateChange(selectedDates, dateStr) {
        dateIsPicked = true;
    }

    confirm_button.addEventListener('click', async () => {
        console.log("Confirm button clicked!");
        const selectedDate = calendarInput.value;
        const djName = djNameElement.textContent.trim().replace(': ', '');

        if (selectedDate && djName) {
            try {
                const response = await fetch('/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name: djName, selectedDate }),
                });

                const result = await response.json();

                if (response.ok) {
                    alert(`Date updated successfully for ${djName}: ${selectedDate}`);
                } else {
                    alert(`Error updating date: ${result.message}`);
                }
            } catch (err) {
                console.error(err);
                alert('An error occurred while updating the date.');
            }
        } else {
            alert('No date or DJ name selected!');
        }
    });
});