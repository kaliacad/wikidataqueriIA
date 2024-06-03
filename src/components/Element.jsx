export default function Element({ item }) {
  const itemArray = Object.keys(item);
  console.log(item[itemArray[0]]);
  return (
    <li className="bg-slate-700  mb-2 px-1 py-2 text-white">
      {itemArray.map((e, i) => (
        <p key={i} className="">
          {item[e].value}
        </p>
      ))}
    </li>
  );
}
