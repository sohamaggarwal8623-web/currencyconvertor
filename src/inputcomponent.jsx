import "./index.css";

function Inputbox({
  name,
  amount, // amount which user enter
  setamount,
  currency, // which currency it takes
  setcurrency,
  currencylist, // taking an array of currency
}) {
  return (
    <div className=" p-2 bg-gray-600 w-fit">
      <label className="font-semibold text-2xl23">{name}</label>

      <div className="flex flex-row gap-10">
        <div className="flex flex-row">
          <label className="text-amber-200 bg-blue-500 text-center p-2 ">
            Amount
          </label>
          <input
            type="number"
            min="0"
            placeholder=" Enter Amount"
            className="text-amber-200 bg-gray-500 text-center p-2 "
            value={amount}
            onChange={(e) => setamount(e.target.value)}
          ></input>
        </div>

        <div className="flex flex-row">
          <label className="text-amber-200 bg-blue-500 text-center p-2 ">
            Currency
          </label>
          <select
            className="bg-gray-500 text-amber-50"
            value={currency}
            onChange={(e) => setcurrency(e.target.value)}
          >
            {currencylist.map((currencyname) => {
              return (
                <option key={currencyname} value={currencyname}>
                  {currencyname}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Inputbox;

// e is event, target is to target that particular thing and line-19
// here value is used see above line to set that currency line -25
// key is there to help when there is change in order then it help in dom to compare the element by there key and update the value
