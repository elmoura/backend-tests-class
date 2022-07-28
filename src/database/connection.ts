import { mainDataSource } from "./main-datasource"

(async () => {
  await mainDataSource.initialize();
  console.log('connected to database => ', mainDataSource.isInitialized)
})();