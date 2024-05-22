const QueryEngine = require('@comunica/query-sparql-solid').QueryEngine;
const { interactiveLogin } = require('solid-node-interactive-auth');

// This will open your Web browser to log in
const session = await interactiveLogin({ oidcIssuer: 'https://solidcommunity.net/' });
const myEngine = new QueryEngine();

const bindingsStream = await myEngine.queryBindings(`
  SELECT * WHERE {
      ?s ?p ?o
  } LIMIT 100`, {
  sources: [session.info.webId], // Sets your profile as query source
  '@comunica/actor-http-inrupt-solid-client-authn:session': session,
});

// Consume results as a stream (best performance)
bindingsStream.on('data', (binding) => {
  console.log(binding.toString()); // Quick way to print bindings for testing

  console.log(binding.has('s')); // Will be true

  // Obtaining values
  console.log(binding.get('s').value);
  console.log(binding.get('s').termType);
  console.log(binding.get('p').value);
  console.log(binding.get('o').value);
});
bindingsStream.on('end', () => {
  // The data-listener will not be called anymore once we get here.
});
bindingsStream.on('error', (error) => {
  console.error(error);
});

// Consume results as an array (easier)
const bindings = await bindingsStream.toArray();
console.log(bindings[0].get('s').value);
console.log(bindings[0].get('s').termType);