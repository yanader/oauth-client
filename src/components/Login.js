export default function Login() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Login</h1>

      <a href="http://localhost:8080/oauth2/authorization/google">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>
          Sign in with Google
        </button>
      </a>
    </div>
  );
}
