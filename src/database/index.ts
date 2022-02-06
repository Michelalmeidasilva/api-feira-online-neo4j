/* eslint-disable no-console */
import neo4j from 'neo4j-driver';

import config from '../config';

const driver = neo4j.driver(
  config.neo4j.url ?? '',
  neo4j.auth.basic(config.neo4j.username ?? '', config.neo4j.password ?? '')
);

console.log(`Database running at ${config.neo4j.url}`);

const read = async (cypher: string, params = {}) => {
  const session = await driver.session({
    defaultAccessMode: neo4j.session.READ,
    database: config.neo4j.database
  });

  return session.run(cypher, params).then(res => {
    session.close();
    return res;
  });
};

const write = async (cypher: string, params = {}) => {
  const session = await driver.session({
    defaultAccessMode: neo4j.session.WRITE,
    database: config.neo4j.database
  });

  return await session
    .run(cypher, params)
    .then(res => {
      session.close();
      return res;
    })
    .catch(e => {
      session.close();
      throw e;
    });
};

export default {
  read,
  write
};
