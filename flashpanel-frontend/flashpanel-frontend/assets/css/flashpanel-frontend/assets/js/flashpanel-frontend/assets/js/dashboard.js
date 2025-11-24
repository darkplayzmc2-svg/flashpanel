<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>FlashPanel — Dashboard</title>

  <link rel="stylesheet" href="assets/style.css">
</head>
<body>
  <nav class="navbar">
    <div class="navbar-left">
      <h2>FlashPanel</h2>
    </div>

    <div class="navbar-right">
      <span id="usernameDisplay">Loading...</span>
      <button id="logoutBtn">Logout</button>
    </div>
  </nav>

  <section class="dashboard-main">

    <div class="card">
      <h3>Total Users</h3>
      <p id="totalUsers">0</p>
    </div>

    <div class="card">
      <h3>Active Servers</h3>
      <p id="activeServers">0</p>
    </div>

    <div class="card">
      <h3>Logs</h3>
      <p id="logsCount">0</p>
    </div>

  </section>

  <script src="dashboard.js"></script>
</body>
</html>
