import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../../routing-context/domain/router-context";
import { faker } from "@faker-js/faker";
import { Row, TableProps } from "antd";
import { useTranslation } from "react-i18next";
import { Button, ButtonStyleType } from "../../../../common/components";

export default function useAttendanceDiary() {
  const [deleteConfirmationModal, setDeleteConfirmationModal] =
    useState<boolean>(false);
  const [selectedDateRange, setSelectedDateRange] = useState<string>("week");
  const [selectedScope, setSelectedScope] = useState<string>("children");
  const params = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSelectDateRange = (dateRange: string) => {
    //console.log(dateRange)
    setSelectedDateRange(dateRange);
  };

  const handleSelectScope = (scope: string) => {
    console.log(scope);
    setSelectedScope(scope);
  };

  return {
    selectedDateRange,
    selectedScope,
    handleSelectDateRange,
    handleSelectScope,
  };
}
