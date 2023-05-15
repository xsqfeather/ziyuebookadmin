import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useTranslate, useTheme, Title, useNotify } from "react-admin";

import { darkTheme, lightTheme } from "../layout/themes";
import { Stack, TextField } from "@mui/material";
import useCurrentUser from "../hooks/useCurrentUser";
import { updateOne } from "../services/dataProvider";

interface UserSettings {
  theme?: "light" | "dark";
  kongUsername?: string;
  kongPassword?: string;
  xianAppKey?: string;
  xianAppSecret?: string;
}

const Configuration = () => {
  const translate = useTranslate();
  const [theme, setTheme] = useTheme();

  const notice = useNotify();

  const { currentUser } = useCurrentUser();
  const [settings, setSettings] = React.useState<UserSettings | null>(
    currentUser?.settings || {
      theme: "light",
      kongUsername: "",
      kongPassword: "",
      xianAppKey: "",
      xianAppSecret: "",
    }
  );

  const [updating, setUpdating] = React.useState(false);

  React.useEffect(() => {
    if (currentUser?.settings) {
      setSettings(currentUser?.settings);
    }
  }, [currentUser?.settings]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setUpdating(true);
      await updateOne("users", currentUser.id, {
        settings,
      });
      setUpdating(false);
      notice("保存成功", {
        type: "success",
      });
    } catch (error) {
      setUpdating(false);
      console.error(error);
    }
  };

  return (
    <Card>
      <Title title={translate("pos.configuration")} />
      <CardContent>
        <Box sx={{ width: "10em", display: "inline-block" }}>
          {translate("pos.theme.name")}
        </Box>
        <Button
          disabled={updating}
          variant="contained"
          sx={{ margin: "1em" }}
          color={theme?.palette?.mode === "light" ? "primary" : "secondary"}
          onClick={() => setTheme(lightTheme)}
        >
          {translate("pos.theme.light")}
        </Button>
        <Button
          disabled={updating}
          variant="contained"
          sx={{ margin: "1em" }}
          color={theme?.palette?.mode === "dark" ? "primary" : "secondary"}
          onClick={() => setTheme(darkTheme)}
        >
          {translate("pos.theme.dark")}
        </Button>
      </CardContent>
      <CardContent>
        <Box sx={{ width: "10em", display: "inline-block" }}>
          {translate("pos.configuration")}
        </Box>
      </CardContent>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Stack>
            <TextField
              disabled={updating}
              label="孔网用户名"
              fullWidth
              value={settings?.kongUsername}
              onChange={(e) =>
                setSettings({ ...settings, kongUsername: e.target.value })
              }
            />
            <TextField
              disabled={updating}
              label="孔网密码"
              fullWidth
              value={settings?.kongPassword}
              onChange={(e) =>
                setSettings({ ...settings, kongPassword: e.target.value })
              }
            />
            <TextField
              disabled={updating}
              label="闲管家AppKey"
              fullWidth
              value={settings?.xianAppKey}
              onChange={(e) =>
                setSettings({ ...settings, xianAppKey: e.target.value })
              }
            />
            <TextField
              disabled={updating}
              label="闲管家AppSecret"
              fullWidth
              value={settings?.xianAppSecret}
              onChange={(e) =>
                setSettings({ ...settings, xianAppSecret: e.target.value })
              }
            />
          </Stack>
        </CardContent>

        <Button disabled={updating} type="submit" fullWidth variant="contained">
          保存
        </Button>
      </form>
    </Card>
  );
};

export default Configuration;
