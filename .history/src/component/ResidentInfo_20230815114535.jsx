import React, { useState, useEffect } from 'react';

<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
+import React, { useEffect, useState } from 'react';
+
const ResidentInfo = ({ residentUrl }) => {
  const [residentData, setResidentData] = useState(null);

  useEffect(() => {
-    fetch(residentUrl)
-      .then(response => response.json())
-      .then(data => setResidentData(data))
-      .catch(error => console.error('Error fetching resident data:', error));
+    const fetchData = async () => {
+      try {
+        const response = await fetch(residentUrl);
+        const data = await response.json();
+        setResidentData(data);
+      } catch (error) {
+        console.error('Error fetching resident data:', error);
+      }
+    };
+
+    fetchData();
  }, [residentUrl]);

  if (!residentData) {
    return <p>Loading resident data...</p>;
  }

  const { name, status, species, gender } = residentData;

  return (
    <div className="resident-info">
      <h4>{name}</h4>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};
<<<<<  bot-7e79846b-c445-4259-8063-0bb9700342fa  >>>>>

export default ResidentInfo;