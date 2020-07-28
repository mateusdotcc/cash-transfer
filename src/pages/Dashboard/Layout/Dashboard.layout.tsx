import React from "react";
import { useTranslation } from "react-i18next";

import { Container } from "./Dashboard.styled";

const DashboardLayout: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t("dashboard:header.title")}</h1>
    </Container>
  );
};

export default DashboardLayout;
