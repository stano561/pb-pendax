"use client";

import React, { useState, useEffect } from "react";

const ApiTextDisplay = () => {
  const [apiText, setApiText] = useState("Loading...");

  useEffect(() => {
    const fetchApiText = async () => {
      try {
        // const response = await fetch("https://api.example.com/someendpoint");
        const response = await fetch("http://localhost:3333/main/test");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.text();
        setApiText(data);
      } catch (error) {
        console.error("Error fetching API text:", error);
        setApiText("Failed to load text from API");
      }
    };

    fetchApiText();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <p className="text-black">{apiText}</p>
    </div>
  );
};

export default ApiTextDisplay;
