import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SummaryList } from "./summary/SummaryList";
import { SummaryCreate } from "./summary/SummaryCreate";
import { SummaryEdit } from "./summary/SummaryEdit";
import { SummaryShow } from "./summary/SummaryShow";
import { ArticleList } from "./article/ArticleList";
import { ArticleCreate } from "./article/ArticleCreate";
import { ArticleEdit } from "./article/ArticleEdit";
import { ArticleShow } from "./article/ArticleShow";
import { ReadLaterList } from "./readLater/ReadLaterList";
import { ReadLaterCreate } from "./readLater/ReadLaterCreate";
import { ReadLaterEdit } from "./readLater/ReadLaterEdit";
import { ReadLaterShow } from "./readLater/ReadLaterShow";
import { ProducerList } from "./producer/ProducerList";
import { ProducerCreate } from "./producer/ProducerCreate";
import { ProducerEdit } from "./producer/ProducerEdit";
import { ProducerShow } from "./producer/ProducerShow";
import { ReadItemList } from "./readItem/ReadItemList";
import { ReadItemCreate } from "./readItem/ReadItemCreate";
import { ReadItemEdit } from "./readItem/ReadItemEdit";
import { ReadItemShow } from "./readItem/ReadItemShow";
import { StarList } from "./star/StarList";
import { StarCreate } from "./star/StarCreate";
import { StarEdit } from "./star/StarEdit";
import { StarShow } from "./star/StarShow";
import { StatisticsList } from "./statistics/StatisticsList";
import { StatisticsCreate } from "./statistics/StatisticsCreate";
import { StatisticsEdit } from "./statistics/StatisticsEdit";
import { StatisticsShow } from "./statistics/StatisticsShow";
import { CollectionList } from "./collection/CollectionList";
import { CollectionCreate } from "./collection/CollectionCreate";
import { CollectionEdit } from "./collection/CollectionEdit";
import { CollectionShow } from "./collection/CollectionShow";
import { ReadHistoryList } from "./readHistory/ReadHistoryList";
import { ReadHistoryCreate } from "./readHistory/ReadHistoryCreate";
import { ReadHistoryEdit } from "./readHistory/ReadHistoryEdit";
import { ReadHistoryShow } from "./readHistory/ReadHistoryShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"RSSReaderAI"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Summary"
          list={SummaryList}
          edit={SummaryEdit}
          create={SummaryCreate}
          show={SummaryShow}
        />
        <Resource
          name="Article"
          list={ArticleList}
          edit={ArticleEdit}
          create={ArticleCreate}
          show={ArticleShow}
        />
        <Resource
          name="ReadLater"
          list={ReadLaterList}
          edit={ReadLaterEdit}
          create={ReadLaterCreate}
          show={ReadLaterShow}
        />
        <Resource
          name="Producer"
          list={ProducerList}
          edit={ProducerEdit}
          create={ProducerCreate}
          show={ProducerShow}
        />
        <Resource
          name="ReadItem"
          list={ReadItemList}
          edit={ReadItemEdit}
          create={ReadItemCreate}
          show={ReadItemShow}
        />
        <Resource
          name="Star"
          list={StarList}
          edit={StarEdit}
          create={StarCreate}
          show={StarShow}
        />
        <Resource
          name="Statistics"
          list={StatisticsList}
          edit={StatisticsEdit}
          create={StatisticsCreate}
          show={StatisticsShow}
        />
        <Resource
          name="Collection"
          list={CollectionList}
          edit={CollectionEdit}
          create={CollectionCreate}
          show={CollectionShow}
        />
        <Resource
          name="ReadHistory"
          list={ReadHistoryList}
          edit={ReadHistoryEdit}
          create={ReadHistoryCreate}
          show={ReadHistoryShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
