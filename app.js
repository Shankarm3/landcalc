function convertArea() {
   const value = parseFloat(document.getElementById("inputValue").value);

   const fromUnit = document.getElementById("fromUnit").value;

   const toUnit = document.getElementById("toUnit").value;

   const sqftMap = {
      sqft: 1,

      gaj: 9,

      kanal: 5445,

      bigha: 27225,

      acre: 43560,
   };

   const valueInSqft = value * sqftMap[fromUnit];

   const finalValue = valueInSqft / sqftMap[toUnit];

   document.getElementById("result").innerText =
      finalValue.toFixed(2) + " " + toUnit;
}
