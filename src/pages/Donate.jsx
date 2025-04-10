import React, { useEffect, useState } from "react";
import axios from "axios";
import paymentlogo from "../../src/assets/payment.png";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [purpose, setPurpose] = useState("General");
  const [name, setName] = useState("");
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  const presetAmounts = [100, 250, 500, 1000, 5000];

  const handleDonate = async () => {
    const amount = selectedAmount || customAmount;
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    try {
      await axios.post("https://ngo-backend-w0ir.onrender.com/api/donation/donate", {
        name,
        amount: Number(amount),
        purpose,
      });
      alert("Thank you for your donation!");
      setCustomAmount("");
      setSelectedAmount("");
      setName("");
      fetchDonations();
    } catch (error) {
      console.error("Donation failed:", error);
      alert("Failed to process donation.");
    }
  };

  const fetchDonations = async () => {
    try {
      const res = await axios.get("https://ngo-backend-w0ir.onrender.com/api/donation/donors");
      const sorted = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setDonations(sorted);
    } catch (err) {
      console.error("Error loading donations", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-4">Support Our Cause</h2>


      {/* Name Input */}
      <div className="mb-3 col-md-6 mx-auto">
        <input
          type="text"
          className="form-control text-center"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Amount Selection */}
      <div className="text-center mb-4">
        {presetAmounts.map((amt) => (
          <button
            key={amt}
            className={`btn btn-outline-primary m-2 ${
              selectedAmount === String(amt) ? "active" : ""
            }`}
            onClick={() => {
              setSelectedAmount(String(amt));
              setCustomAmount("");
            }}
          >
            ₹{amt}
          </button>
        ))}
      </div>

      {/* Custom Amount */}
      <div className="mb-3 col-md-6 mx-auto">
        <input
          type="number"
          className="form-control text-center"
          placeholder="Or enter custom amount (₹)"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setSelectedAmount("");
          }}
          min="1"
        />
      </div>

      {/* Purpose Selection */}
      <div className="mb-4 col-md-6 mx-auto">
        <select
          className="form-select text-center"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
        >
          <option value="General">Use Where Needed</option>
          <option value="Education">Support Education</option>
          <option value="Healthcare">Healthcare Aid</option>
          <option value="Food">Food & Essentials</option>
        </select>
      </div>

      {/* Donate Button */}
      <div className="text-center mb-5">
        <button className="btn btn-success btn-lg" onClick={handleDonate}>
          Donate ₹{selectedAmount || customAmount || "0"}
        </button>
      </div>

      {/* Donation History */}
      <h4 className="fw-bold text-center mb-3">Donation History</h4>

      {/* Total Donations */}
      {!loading && donations.length > 0 && (
        <p className="text-center fw-semibold text-primary">
          Total Donations: ₹{donations.reduce((sum, d) => sum + Number(d.amount), 0)}
        </p>
      )}

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : donations.length === 0 ? (
        <p className="text-center text-muted">No donations yet.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Amount (₹)</th>
                <th>Purpose</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {donations.slice(0, 10).map((don) => (
                <tr key={don._id}>
                  <td>{don.name}</td>
                  <td>{don.amount}</td>
                  <td>{don.purpose}</td>
                  <td>{new Date(don.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Donate;
