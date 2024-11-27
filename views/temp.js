<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DJ Info</title>
</head>
<body>
  <h1>DJ Information</h1>

  <!-- Buttons to trigger updates -->
  <div class="DJ_buttons">
    <button id="p1_button">DJ 1</button>
    <button id="p2_button">DJ 2</button>
    <button id="p3_button">DJ 3</button>
    <button id="p4_button">DJ 4</button>
    <button id="p5_button">DJ 5</button>
  </div>

  <!-- DJ Information Table -->
  <div class="DJ_info">
    <table style="font-size: 15px; margin-top: 40px;">
      <tr>
        <td>Name</td>
        <td id="DJ_name">:</td>
      </tr>
      <tr>
        <td>Experience</td>
        <td id="DJ_exp">:</td>
      </tr>
      <tr>
        <td>Rated</td>
        <td id="DJ_rated">:</td>
      </tr>
      <tr>
        <td>Assigned Date</td>
        <td id="DJ_assigned_date">:</td>
      </tr>
    </table>
  </div>

  <!-- Inline JavaScript -->
  <script>
    // Mock DJ Data (Replace with dynamic data if needed)
    const DJ_List = [
      { name: "DJ Alice", experience: "Expert", rated: 5, schedule: "2024-11-25" },
      { name: "DJ Bob", experience: "Intermediate", rated: 4, schedule: "2024-11-20" },
      { name: "DJ Charlie", experience: "Beginner", rated: 3, schedule: "2024-11-15" },
      { name: "DJ Dave", experience: "Advanced", rated: 4.5, schedule: "2024-11-10" },
      { name: "DJ Eve", experience: "Expert", rated: 5, schedule: "2024-11-05" }
    ];

    // Select DOM elements
    const DJ_name = document.getElementById('DJ_name');
    const DJ_exp = document.getElementById('DJ_exp');
    const DJ_rated = document.getElementById('DJ_rated');
    const DJ_assigned_date = document.getElementById('DJ_assigned_date');

    const p1_button = document.getElementById('p1_button');
    const p2_button = document.getElementById('p2_button');
    const p3_button = document.getElementById('p3_button');
    const p4_button = document.getElementById('p4_button');
    const p5_button = document.getElementById('p5_button');

    // Event Listeners for Buttons
    p1_button.addEventListener('click', function () {
      DJ_name.textContent = ": " + DJ_List[0].name;
      DJ_exp.textContent = ": " + DJ_List[0].experience;
      DJ_rated.textContent = ": " + DJ_List[0].rated;
      DJ_assigned_date.textContent = ": " + DJ_List[0].schedule;
    });

    p2_button.addEventListener('click', function () {
      DJ_name.textContent = ": " + DJ_List[1].name;
      DJ_exp.textContent = ": " + DJ_List[1].experience;
      DJ_rated.textContent = ": " + DJ_List[1].rated;
      DJ_assigned_date.textContent = ": " + DJ_List[1].schedule;
    });

    p3_button.addEventListener('click', function () {
      DJ_name.textContent = ": " + DJ_List[2].name;
      DJ_exp.textContent = ": " + DJ_List[2].experience;
      DJ_rated.textContent = ": " + DJ_List[2].rated;
      DJ_assigned_date.textContent = ": " + DJ_List[2].schedule;
    });

    p4_button.addEventListener('click', function () {
      DJ_name.textContent = ": " + DJ_List[3].name;
      DJ_exp.textContent = ": " + DJ_List[3].experience;
      DJ_rated.textContent = ": " + DJ_List[3].rated;
      DJ_assigned_date.textContent = ": " + DJ_List[3].schedule;
    });

    p5_button.addEventListener('click', function () {
      DJ_name.textContent = ": " + DJ_List[4].name;
      DJ_exp.textContent = ": " + DJ_List[4].experience;
      DJ_rated.textContent = ": " + DJ_List[4].rated;
      DJ_assigned_date.textContent = ": " + DJ_List[4].schedule;
    });
  </script>
</body>
</html>


<script>
        console.log("JavaScript is loaded!");
        document.addEventListener('DOMContentLoaded', function () {
            const DJ_List = <% - JSON.stringify(DJ_List) %>;

            // Select DOM elements
            const DJ_name = document.getElementById('DJ_name');
            const DJ_exp = document.getElementById('DJ_experience');
            const DJ_rated = document.getElementById('DJ_rated');
            const DJ_assigned_date = document.getElementById('DJ_assignedDate');

            // Select buttons
            const p1_button = document.getElementById('p1');
            const p2_button = document.getElementById('p2');
            const p3_button = document.getElementById('p3');
            const p4_button = document.getElementById('p4');
            const p5_button = document.getElementById('p5');

            // Event Listeners for Buttons
            p1_button.addEventListener('click', function () {
                DJ_name.textContent = ": " + DJ_List[0].name;
                DJ_exp.textContent = ": " + DJ_List[0].experience;
                DJ_rated.textContent = ": " + DJ_List[0].rated;
                DJ_assigned_date.textContent = ": " + DJ_List[0].assignedDate;
                console.log(DJ_List[0].name);
            });

            p2_button.addEventListener('click', function () {
                DJ_name.textContent = ": " + DJ_List[1].name;
                DJ_exp.textContent = ": " + DJ_List[1].experience;
                DJ_rated.textContent = ": " + DJ_List[1].rated;
                DJ_assigned_date.textContent = ": " + DJ_List[1].assignedDate;
                console.log(DJ_List[1].name);
            });

            p3_button.addEventListener('click', function () {
                DJ_name.textContent = ": " + DJ_List[2].name;
                DJ_exp.textContent = ": " + DJ_List[2].experience;
                DJ_rated.textContent = ": " + DJ_List[2].rated;
                DJ_assigned_date.textContent = ": " + DJ_List[2].assignedDate;
            });

            p4_button.addEventListener('click', function () {
                DJ_name.textContent = ": " + DJ_List[3].name;
                DJ_exp.textContent = ": " + DJ_List[3].experience;
                DJ_rated.textContent = ": " + DJ_List[3].rated;
                DJ_assigned_date.textContent = ": " + DJ_List[3].assignedDate;
            });

            p5_button.addEventListener('click', function () {
                DJ_name.textContent = ": " + DJ_List[4].name;
                DJ_exp.textContent = ": " + DJ_List[4].experience;
                DJ_rated.textContent = ": " + DJ_List[4].rated;
                DJ_assigned_date.textContent = ": " + DJ_List[4].assignedDate;
            });
        });

    </script>
