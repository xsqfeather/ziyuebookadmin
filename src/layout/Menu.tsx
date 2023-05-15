import { useState } from "react";
import Box from "@mui/material/Box";

import {
  useTranslate,
  DashboardMenuItem,
  MenuItemLink,
  MenuProps,
  useSidebarState,
} from "react-admin";

import Admins from "../resources/admins";
import Tenants from "../resources/tenants";
import Users from "../resources/users";
import Wallets from "../resources/wallets";
import Conversations from "../resources/conversations";
import Ai_models from "../resources/ai_models";
import Wallet_records from "../resources/wallet_records";
import Articles from "../resources/articles";
import Products from "../resources/products";
import SubMenu from "./SubMenu";
import products from "../resources/products";

type MenuName =
  | "menuProduct"
  | "menuNft"
  | "menuInterests"
  | "menuTenant"
  | "menuAdmin"
  | "menuUser"
  | "menuOrder"
  | "menuArticle"
  | "menuFinance"
  | "appSettings"
  | "menuWuAv";

const Menu = ({ dense = false }: MenuProps) => {
  const [state, setState] = useState({
    menuProduct: false,
    menuNft: false,
    menuInterests: false,
    menuTenant: false,
    menuAdmin: false,
    menuUser: false,
    appSettings: false,
    menuOrder: false,
    menuArticle: false,
    menuFinance: false,
    menuWuAv: false,
  });
  const translate = useTranslate();
  const [open] = useSidebarState();

  const handleToggle = (menu: MenuName) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <Box
      sx={{
        width: open ? 200 : 50,
        marginTop: 1,
        marginBottom: 1,
        transition: (theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <DashboardMenuItem />
      <MenuItemLink
        to="/articles"
        state={{ _scrollToTop: true }}
        primaryText={translate(`resources.articles.name`, {
          smart_count: 2,
        })}
        leftIcon={<Articles.icon />}
        dense={dense}
      />
      <SubMenu
        dense={false}
        handleToggle={() => handleToggle("menuProduct")}
        icon={<products.icon />}
        isOpen={state.menuProduct}
        name={translate(`resources.products.name`, {
          smart_count: 2,
        })}
      >
        <MenuItemLink
          to="/products"
          state={{ _scrollToTop: true }}
          primaryText={translate(`resources.products.name`, {
            smart_count: 2,
          })}
          leftIcon={<Products.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/products_on_xian_on_sale"
          state={{ _scrollToTop: true }}
          primaryText={translate(`resources.products_on_xian_on_sale.name`, {
            smart_count: 2,
          })}
          leftIcon={<Products.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/products_off_xian_off_sale"
          state={{ _scrollToTop: true }}
          primaryText={translate(`resources.products_off_xian_off_sale.name`, {
            smart_count: 2,
          })}
          leftIcon={<Products.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/products_on_xian_banned"
          state={{ _scrollToTop: true }}
          primaryText={translate(`resources.products_on_xian_banned.name`, {
            smart_count: 2,
          })}
          leftIcon={<Products.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/product_categories"
          state={{ _scrollToTop: true }}
          primaryText={translate(`resources.product_categories.name`, {
            smart_count: 2,
          })}
          leftIcon={<Products.icon />}
          dense={dense}
        />
      </SubMenu>
    </Box>
  );
};

export default Menu;
