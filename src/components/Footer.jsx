export default function Footer() {
  return (
    <footer className="flex items-center h-[50px] absolute bottom-0 w-full bg-blue-950 opacity-100">
      <ul className="text-white flex justify-around items-center w-full">
        <li>
          <a
            href="https://m.wikidata.org/wiki/Wikidata:Main_Page?uselang=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikidata
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kaliacad/wikidataqueriIA"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kaliacad/wikidataqueriIA/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            Feedback
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kaliacad/wikidataqueriIA/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </li>
      </ul>
    </footer>
  );
}
