import chineseMessages from "./i18n/zh";
import polyglotI18nProvider from "ra-i18n-polyglot";
import { Admin, CustomRoutes, Resource } from "react-admin";
import adminDataProvider from "./services/adminDataProvider";
import hapiAuthProvider from "./services/hapiAuthProvider";
import Layout from "./layout/Layout";
import Login from "./layout/Login";
import { Dashboard } from "./dashboard";
import { Route } from "react-router";
import Configuration from "./customRoutes/Configuration";
import admins from "./resources/admins";
import tenants from "./resources/tenants";
import users from "./resources/users";
import wallets from "./resources/wallets";
import conversations from "./resources/conversations";
import ai_models from "./resources/ai_models";
import wallet_records from "./resources/wallet_records";
import articles from "./resources/articles";
import { darkTheme } from "./layout/themes";
import products from "./resources/products";
import av_posts from "./resources/av_posts";
import product_categories from "./resources/product_categories";
import products_on_xian_on_sale from "./resources/products_on_xian_on_sale";

const i18nProvider = polyglotI18nProvider((locale) => {
  if (locale === "en") {
    return import("./i18n/en").then((messages) => messages.default);
  }
  return chineseMessages;
}, "zh");

function App() {
  return (
    <Admin
      dataProvider={adminDataProvider}
      authProvider={hapiAuthProvider}
      i18nProvider={i18nProvider}
      layout={Layout}
      theme={darkTheme}
      loginPage={Login}
      dashboard={Dashboard}
    >
      <CustomRoutes>
        <Route path="/configuration" element={<Configuration />} />
      </CustomRoutes>
      <Resource name="admins" list={admins.list} icon={admins.icon} />
      <Resource
        name="articles"
        list={articles.list}
        icon={articles.icon}
        create={articles.create}
      />
      <Resource
        name="products"
        list={products.list}
        icon={products.icon}
        show={products.show}
        edit={products.edit}
      />
      <Resource
        name="products_on_xian_on_sale"
        list={products_on_xian_on_sale.list}
        icon={products_on_xian_on_sale.icon}
        show={products_on_xian_on_sale.show}
      />
      <Resource
        name="products_off_xian_off_sale"
        list={products.list}
        icon={products.icon}
        show={products.show}
        edit={products.edit}
      />
      <Resource
        name="products_on_xian_banned"
        list={products.list}
        icon={products.icon}
        show={products.show}
        edit={products.edit}
      />
      <Resource
        name="tenants"
        edit={tenants.edit}
        list={tenants.list}
        create={tenants.create}
        icon={tenants.icon}
      />
      <Resource
        name="users"
        list={users.list}
        icon={users.icon}
        create={users.create}
      />
      <Resource name="wallets" list={wallets.list} icon={wallets.icon} />
      <Resource
        name="wallet_records"
        list={wallet_records.list}
        icon={wallet_records.icon}
      />
      <Resource
        name="conversations"
        list={conversations.list}
        create={conversations.create}
        icon={conversations.icon}
      />
      <Resource name="ai_models" list={ai_models.list} icon={ai_models.icon} />
      <Resource
        name="av_posts"
        list={av_posts.list}
        icon={av_posts.icon}
        create={av_posts.create}
      />
      <Resource
        name="av_actors"
        list={av_posts.list}
        icon={av_posts.icon}
        create={av_posts.create}
      />
      <Resource
        name="product_categories"
        list={product_categories.list}
        icon={product_categories.icon}
        create={product_categories.edit}
      />
    </Admin>
  );
}

export default App;
