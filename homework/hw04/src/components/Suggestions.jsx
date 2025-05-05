import React, { useState, useEffect, use } from "react";
import { getDataFromServer } from "../server-requests";
import Suggestion from "./Suggestion";

export default function Suggestions({ token }) {
  const [suggestions, setSuggestions] = useState([]);

  async function getSuggestions() {
    const data = await getDataFromServer(token, "/api/suggestions");
    console.log(data);
    setSuggestions(data);
  }

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <div className="mt-4 ">
      <p className="text-base text-gray-700 font-bold mb-4">Suggestions for you</p>

      <section className="flex flex-col items-start gap-4 ">
        {suggestions.map((suggestion) => (
          <Suggestion user={suggestion} key={suggestion.id} />
        ))}{" "}
      </section>
    </div>
  );
}
