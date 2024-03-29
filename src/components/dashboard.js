const Dashboard = () => {
    const { logout } = useAuth(); 
  
    return (
      <div>
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard!</p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
  