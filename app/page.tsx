"use client";

import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <div>Test Page</div>
      <div>{t("signInPage")}</div>
    </div>
  );
}
