export default function AdvocateFinder() {
  const advocates = [
    { name: "Adv. Priya Sharma", exp: "8 yrs", city: "Mumbai" },
    { name: "Adv. Kavita Joshi", exp: "5 yrs", city: "Pune" },
    { name: "Adv. Neha Kulkarni", exp: "10 yrs", city: "Nashik" },
  ];

  return (
    <div className="screen">
      <div>
        <h2>Find Legal Advocates</h2>

        {advocates.map((a, i) => (
          <div key={i} className="card" style={{ margin: "10px 0" }}>
            <h3>{a.name}</h3>
            <p>Experience: {a.exp}</p>
            <p>City: {a.city}</p>
            <button>Contact</button>
          </div>
        ))}
      </div>
    </div>
  );
}
