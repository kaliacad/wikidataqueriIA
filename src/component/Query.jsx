export default function Query() {
  return (
    <div className="w-[80%] bg-slate-50">
      <iframe
        className=""
        src="https://query.wikidata.org/#%23Star%20Wars%20films%0A%0ASELECT%20%3Fitem%20%20%3FitemLabel%20%0AWHERE%20%0A%7B%20%0A%20%20%3Fitem%20wdt%3AP179%20wd%3AQ22092344.%20%23%20item%20is%20part%20of%20the%20series%20Star%20Wars%20%28film%20series%29%0A%20%20%3Fitem%20wdt%3AP57%20wd%3AQ38222.%20%20%20%20%20%23%20item%20has%20director%20property%20with%20value%20George%20Lucas.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%22.%20%7D%0A%7D"
        style={{ width: "100%", "max-width": "100%", height: "100%" }}
        frameBorder="0"
      ></iframe>
    </div>
  );
}
