import {
  HomeOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

export const route = [
  {
    key: "0",
    icon: <HomeOutlined />,
    label: "home",
    component: <div>home :D</div>,
    path: "/",
  },
  {
    key: "1",
    icon: <VideoCameraOutlined />,
    label: "nav 2",
    component: <div>naaav 2</div>,
    path: "/video",
  },
];
