import React, { useState } from "react";
import cryptoRandomString from "crypto-random-string";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);

  const generatedPassword = () => {
    const newPassword = cryptoRandomString({
      length: length,
      type: "ascii-printable",
    });
    setPassword(newPassword);
  };

  return (
    <div className="password-container">
      <fieldset className="password-field">
        <legend>Password Generator</legend>
        <section>
          <label htmlFor="length">Length:</label>
          <input
            type="number"
            id="length"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </section>
        <section className="button-section">
          <button onClick={generatedPassword}>Generate Password</button>
          <button onClick={() => setPassword("")}>Reset</button>
        </section>

        <section>
          <label htmlFor="password">Password:</label>
          <input type="text" value={password} readOnly />
        </section>
      </fieldset>
    </div>
  );
};

export default PasswordGenerator;
