document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("openModalBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById("addTaskBtn").addEventListener("click", function() {
        var taskName = document.getElementById("taskName").value;
        var selectedColumnIndex = document.getElementById("columnSelect").selectedIndex;
        if (taskName.trim() !== "") {
            var taskElement = document.createElement("div");
            taskElement.classList.add("task");
            taskElement.textContent = taskName;

           
            document.querySelectorAll(".column")[selectedColumnIndex].appendChild(taskElement);

            modal.style.display = "none";
        }
    });

    
    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("task")) {
            var taskElement = event.target;
            var newTaskName = prompt("Editar a tarefa:", taskElement.textContent);
            if (newTaskName !== null) {
                taskElement.textContent = newTaskName;
            }
        }
    });
});
