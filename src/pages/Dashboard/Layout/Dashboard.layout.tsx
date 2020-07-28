import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { DefaultTheme } from "styled-components";

import light from "../../../styles/themes/theme-light";
import dark from "../../../styles/themes/theme-dark";

import usePersistedState from "../../../hooks/usePersistedState";

import { Button } from "../../../components";

import { Container } from "./Dashboard.styled";

const DashboardLayout: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme");

  const { t } = useTranslation();

  const handleToggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? dark : light);
  }, [setTheme, theme.title]);

  return (
    <Container>
      <Button type="button" onClick={handleToggleTheme}>
        Theme
      </Button>

      <h1>{t("dashboard:header.title")}</h1>
    </Container>
  );
};

export default DashboardLayout;
