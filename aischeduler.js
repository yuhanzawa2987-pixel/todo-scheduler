async function askAI() {
  const mood = document.getElementById("mood").value;

  const response = await fetch("/api/ask", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ mood })
  });

  const data = await response.json();

  const ul = document.getElementById("result");
  ul.innerHTML = "";

  data.tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    ul.appendChild(li);
  });
}


