## VAD
jag gjorde ett sidescroller-spel med javascript och vite. I spelet så styr man en gubbe som kan skjuta näskråkor ut ur sin näsa för att döda fladdermöss. Efter att du har dödat 5 fladdermöss kommer slutbossen Frej upp och han är rosenrasande för att du har dödat 5 av hans loyala fladdermöss. (borde egentligen vara mer än 5 men orkar inte ändra).

* förstå och ändra antalet monster som krävs för att vinna, slumpa
* göra level 2-5 då det ändras
* Frej ska ha random hitpoints, inte oneshottas
* Frej ska ha en attack
* Bakugrunden eller gubben inte 100% svart
* debug funktion för fiender och frej osv.
* hitpoints ska funka
* en till fiende, Jens

## HUR 
jag började med att följa stegen som Jens hade lagt upp och sen efter det började jag lägga till lite fler saker som Grafik, Frej och sånt. Använde javascript i visual studio code för att programmera spelet. Man behövde göra like en ny fil för varenda grej man ville lägga till för att vi körde objektorienterat.

Frej var nog det jobbigaste jag la till i spelet, jag behövde först skapa en Frej.js, det var det enkla steget. Efter det behövde jag koda så att Frej spawnades när ett X antal fladdermöss hade blivit dödade. För det behövde jag använda mig av if satsen

```js
if (this.slimesKilled >= 5) {
      this.spawnFrej();
}
```

när 5 "slimes" blir dödade så aktiveras spawnFrej funktionen.

I spawnFrej funktionen 

```js
spawnFrej() {
      this.Frej = new Frej(this);
      this.enemies.push(this.Frej);
}
```
kontrolleras först om this.Frej är falsk. Detta indikerar att Frej inte redan har spawnats i spelet. Om så är fallet, skapas en ny instans av Frej klassen och läggs till i this.enemies arrayen, vilket gör så att Frej dyker upp på spelplanen.

## VARFÖR
det var en uppgift. 

## VAD GICK BRA
jag lyckades få till det mesta i spelet, det som jag skulle kunna lagt till är liv, score och attacker från fiendena
Jag gillade att det var objektorienterat, det var enkelt att förstå hur man skulle lägga till nya saker.

## VAD GICK MINDRE BRA
jag var lat så jag hann inte få in allt jag ville. Det som gick mindre bra var att förstå HUR man skulle koda in sakerna man ville ha. Behövde mycket hjälp av Jens och klasskamrater för att lyckas få koden att fungera. 