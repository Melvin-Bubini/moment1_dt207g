#Moment 1 i kursen dt207g

Syftet med detta laboratorium är att utveckla en webbapplikation som möjliggör för användare att spara och visa kurser de har studerat. 
För att uppnå detta kommer Node.js och Express användas för att bygga servern och ansluta till en relationsdatabas för att lagra kursinformationen. 
Data kommer att lagras i en valfri relationsdatabas, såsom SQLite eller MySQL/MariaDb.
Applikationen ska ha minst tre olika sidor:
Startsida / Visa kurser: Här visas alla kurser som har sparats i databasen. För varje kurs ska kurskod, kursnamn, kursplan och kursprogression visas. 
Dessutom ska det finnas en funktion för att ta bort en kurs. Möjligheten att uppdatera en kurs är valfri att implementera.
Lägg till kurs: På denna sida finns ett formulär där användaren kan lägga till en ny kurs. Formuläret ska inkludera fälten för "Kurskod", "Kursnamn", "Kursplan" och "Kursprogression". 
När användaren skickar formuläret ska den angivna informationen sparas i databasen. Om det saknas information ska användaren få ett tydligt felmeddelande.
Om sidan: Denna sida beskriver syftet med webbplatsen och ger information om vilken databas-server som används.
