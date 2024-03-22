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
    <div>
      <fieldset>
        <legend>Password Generator</legend>
        <label htmlFor="length">Length:</label>
        <input
          type="number"
          id="length"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
        <button onClick={generatedPassword}>Generate Password</button>
        <input type="text" value={password} readOnly />
      </fieldset>
    </div>
  );
};

export default PasswordGenerator;
