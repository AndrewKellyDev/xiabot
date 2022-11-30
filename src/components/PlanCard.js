export const PlanCard = ({ type, active, setActiveCard }) => {
  return (
    <div
      className={
        "p-10 font-Jakarta lg:w-96 w-80 rounded-2xl cursor-pointer shadow-xl " +
        (active ? "bg-primary" : "bg-white")
      }
      onClick={setActiveCard}
    >
      <div className="text-3xl font-medium">
        {type === "personal" ? "Personal" : "Enterprise"}
      </div>
      <div className="text-lg mt-5 border-b border-border pb-4">
        (one time fee)
      </div>
      <div className="mt-4 text-5xl font-medium mb-10">
        {type === "personal" ? "£199" : "£299"}
      </div>
      <ul>
        <li>
          {type === "personal"
            ? "1 Live  Account License"
            : "2 Live  Account License"}
        </li>
        <li className="mt-3">Unlimited Demo licenses</li>
        <li className="mt-3">Easy Instillation Videos</li>
        <li className="mt-3">High Performance Settings</li>
        <li className="mt-3">Lifetime Membership</li>
      </ul>
      <button
        className={
          "text-lg py-3 mt-10 rounded-xl font-bold w-full " +
          (active ? "bg-white" : "bg-primary")
        }
        onClick={() => console.log("hi")}
      >
        Ready to purchase
      </button>
    </div>
  );
};
