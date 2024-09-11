import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../../routing-context/domain/router-context";
import {
  useGetKindergartenQuery,
  useDeleteKindergartenMutation,
} from "../../services/kindergartenSlice";
import { Space, TableProps } from "antd";
import { faker } from "@faker-js/faker";
import { useTranslation } from "react-i18next";
import { Link, LinkStyleType } from "../../../../common/components";
import { SelectOptions } from "../../../../common/types";
import { useGetAllGroupsByKindergartenQuery } from "../../../group-context/services/groupsSlice";

interface KindergartenData {
  name: string;
  groups: string[];
  kidsAmount: number;
  address: string;
}

interface KindergartenGroupsData {
  id: string;
  name: string;
  teachers: {
    id: string;
    name: string;
  }[];
  childrenAmount: number;
}

export default function useKindergartenPreview() {
  const [deleteConfirmationModal, setDeleteConfirmationModal] =
    useState<boolean>(false);
  const [isOpenAssignGroupnModal, setIsOpenAssignGroupnModal] =
    useState<boolean>(false);
  const [kindergartenData, setkindergartenData] =
    useState<KindergartenData | null>(null);
  const [kindergartenGroupsData, setKindergartenGroupsData] = useState<
    GroupsDataType[]
  >([]);
  const params = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    data: kindergarten,
    isFetching: isFetchingKindergarten,
    isLoading: isLoadingKindergarten,
  } = useGetKindergartenQuery(
    { id: params?.kindergartenId ? params.kindergartenId : "" },
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );

  const {
    data: groupsByKindergarten,
    isFetching: isFetchingGroupsByKindergarten,
    isLoading: isLoadingGroupsByKindergarten,
  } = useGetAllGroupsByKindergartenQuery(
    { kindergartenId: params?.kindergartenId ? params.kindergartenId : "" },
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );

  useEffect(() => {
    if (!isLoadingGroupsByKindergarten && groupsByKindergarten) {
      const groups: GroupsDataType[] = groupsByKindergarten.data.map(
        (group, idx) => {
          return {
            lp: idx,
            key: group.id,
            id: group.id,
            name: group.name,
            teachers: group.teachers.map((teacher) => {
              return {
                "full-name": "",
                id: "",
              };
            }),
            "kids-amount": group.children.length,
          };
        }
      );

      setKindergartenGroupsData(groups);
    }
    //  console.log(groupsByKindergarten)
  }, [groupsByKindergarten, isLoadingGroupsByKindergarten]);

  const [deleteKindergarten] = useDeleteKindergartenMutation();
  // console.log(params)

  useEffect(() => {
    if (!isLoadingKindergarten && kindergarten) {
      const data: KindergartenData = {
        name: kindergarten.data.name,
        groups: kindergarten.data.groups,
        kidsAmount: kindergarten.data.kidsAmount,
        address: kindergarten.data.address,
      };

      const avaliableGroupsOptions: SelectOptions = data.groups.map(
        (group) => ({
          value: group,
          label: group,
        })
      );

      setkindergartenData(data);
    }
  }, [isLoadingKindergarten, kindergarten]);

  useEffect(() => {
    console.log(kindergartenData);
  }, [kindergartenData]);

  const handleEditKindergarten = () => {
    navigate(
      `/${ROUTES.app}/${ROUTES.editKindergarten}/${params?.kindergartenId}`
    );
  };

  const handleDeleteKindergarten = () => {
    setDeleteConfirmationModal(true);
  };

  const handleDeleteKindergartenConfirmation = async () => {
    await deleteKindergarten({ id: params?.kindergartenId as string });
    navigate(`/${ROUTES.app}/${ROUTES.kindergartens}`);
  };

  const handleDeleteKindergartenCancel = () => {
    setDeleteConfirmationModal(false);
  };

  const handleOpenAssignGroupModal = () => {
    setIsOpenAssignGroupnModal(true);
  };

  const handleCloseAssignGroupModal = () => {
    setIsOpenAssignGroupnModal(false);
  };

  const handleAssignGroup = () => {};

  const handleCreateGroup = () => {
    navigate(`/${ROUTES.app}/${ROUTES.newGroup}`);
  };

  interface GroupsDataType {
    key: string;
    lp: number | string;
    name: string;
    teachers: { id: string; "full-name": string }[];
    "kids-amount": number;
    id: string;
  }

  const GROUPS = ["Poziomki", "Kruszynki", "Misiaczki", "Truskaweczki"];

  const GROUPS_TABLE_HEADERS = {
    lp: "lp",
    name: "name",
    actions: "actions",
    wardens: "wardens",
    kidsAmount: "kids-amount",
  };

  const groupsTableColumns: TableProps<GroupsDataType>["columns"] = [
    {
      title: t(`groups.groups-list.${GROUPS_TABLE_HEADERS.lp}-header`),
      dataIndex: GROUPS_TABLE_HEADERS.lp,
      key: GROUPS_TABLE_HEADERS.lp,
      render: (text) => <a>{text}</a>,
      responsive: ["xs", "sm", "md", "xl"],
    },
    {
      title: t(`groups.groups-list.${GROUPS_TABLE_HEADERS.name}-header`),
      dataIndex: GROUPS_TABLE_HEADERS.name,
      key: GROUPS_TABLE_HEADERS.name,
      render: (_, record) => (
        <Link
          styleType={LinkStyleType.TABLE_RECORD}
          to={`/${ROUTES.app}/${ROUTES.groupPreview}/${record.id}`}
        >
          {record.name}
        </Link>
      ),
      responsive: ["sm", "md", "xl"],
    },
    {
      title: t(`groups.groups-list.${GROUPS_TABLE_HEADERS.wardens}-header`),
      dataIndex: GROUPS_TABLE_HEADERS.wardens,
      key: GROUPS_TABLE_HEADERS.wardens,
      render: (_, record) => {
        return record.teachers?.map((teacher) => (
          <Space direction="horizontal">
            <Link
              styleType={LinkStyleType.TABLE_RECORD}
              to={`/${ROUTES.app}/${ROUTES.teacherPreview}/${teacher.id}`}
            >
              {teacher["full-name"]}
            </Link>{" "}
            <span> </span>
          </Space>
        ));
      },
      responsive: ["sm", "md", "xl"],
    },

    {
      title: t(`groups.groups-list.${GROUPS_TABLE_HEADERS.kidsAmount}-header`),
      dataIndex: GROUPS_TABLE_HEADERS.kidsAmount,
      key: GROUPS_TABLE_HEADERS.kidsAmount,
      render: (text) => <p>{text}</p>,
      responsive: ["sm", "md", "xl"],
    },
  ];

  const today = new Date();
  today.setDate(today.getDate() - 10);
  const future = new Date();
  future.setDate(future.getDate() + 10);

  const groupsTableFakeData: GroupsDataType[] = [
    {
      key: "1",
      lp: "1",
      name: GROUPS[0],
      teachers: [
        { "full-name": faker.person.fullName(), id: "agsdagfhadfh" },
        { "full-name": faker.person.fullName(), id: "agsdagfhadfh" },
      ],
      "kids-amount": 10,
      id: "saldhmfaslidngfhavsdo",
    },
    {
      key: "2",
      lp: "2",
      name: GROUPS[1],
      teachers: [
        { "full-name": faker.person.fullName(), id: "agsdagfhadfh" },
        { "full-name": faker.person.fullName(), id: "agsdagfhadfh" },
      ],
      "kids-amount": 10,
      id: "saldhmfaslidngfhavsasdgasddo",
    },
    {
      key: "3",
      lp: "3",
      name: GROUPS[2],
      teachers: [
        { "full-name": faker.person.fullName(), id: "agsdagfhadfh" },
        { "full-name": faker.person.fullName(), id: "agsdagfhadfh" },
      ],
      "kids-amount": 10,
      id: "saldhmfsfgaslidngfhavsdo",
    },
    {
      key: "4",
      lp: "4",
      name: GROUPS[3],
      teachers: [
        { "full-name": faker.person.fullName(), id: "agsdagfhadfh" },
        { "full-name": faker.person.fullName(), id: "agsdagfhadfh" },
      ],
      "kids-amount": 0,
      id: "saldhmfaslidngfha2435vsdo",
    },
  ];

  return {
    kindergartenData,
    isLoadingKindergarten,
    deleteConfirmationModal,
    kindergartenGroupsData,
    groupsTableColumns,
    isOpenAssignGroupnModal,

    handleEditKindergarten,
    handleDeleteKindergarten,
    handleDeleteKindergartenConfirmation,
    handleDeleteKindergartenCancel,
    handleOpenAssignGroupModal,
    handleCloseAssignGroupModal,
    handleAssignGroup,
    handleCreateGroup,
  };
}
