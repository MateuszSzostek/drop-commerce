import type { MenuProps } from "antd"
import { Link } from "../../../../common/components"
import { ROUTES } from "../../../routing-context/domain/router-context"
import { NAVIGATION_KEYS } from "../../domain/layout-context"
import { useTranslation } from "react-i18next"
import { LinkStyleType } from "../../../../common/components"
import { userIcon } from "../../../../common/assets"

export default function useAppLayout() {
  const { t } = useTranslation()

  return {}
}
