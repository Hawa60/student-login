import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!email && !password) {
      setMessage("Please enter your email and password.");
    } else if (!email) {
      setMessage("Please enter your email.");
    } else if (!password) {
      setMessage("Please enter your password.");
    } else {
      setMessage("Login details submitted successfully.");
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Student Login</h1>

        <p style={styles.subtitle}>
          University Student Portal
        </p>

        <form onSubmit={handleLogin}>
          <label style={styles.label}>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        {message && (
          <p
            style={{
              ...styles.message,
              color: message.includes("successfully")
                ? "green"
                : "red",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "320px",
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  },

  title: {
    textAlign: "center",
    marginBottom: "5px",
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "25px",
  },

  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: "bold",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "18px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box",
    fontSize: "14px",
  },

  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#333",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "15px",
    cursor: "pointer",
  },

  message: {
    textAlign: "center",
    marginTop: "18px",
    fontSize: "14px",
  },
};

export default App;