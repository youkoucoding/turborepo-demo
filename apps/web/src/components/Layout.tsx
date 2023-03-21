import { forwardRef, Ref } from "react";
import {
  type AppLayoutProps,
  AppLayout,
  Badge,
  Box,
  Button,
  Link,
  SpaceBetween,
} from "@cloudscape-design/components";

const appLayoutAriaLabels: AppLayoutProps.Labels = {
  navigation: "Side navigation",
  navigationToggle: "Open side navigation",
  navigationClose: "Close side navigation",
  notifications: "Notifications",
  tools: "Help panel",
  toolsToggle: "Open help panel",
  toolsClose: "Close help panel",
};

const CustomAppLayout = forwardRef<AppLayoutProps, any>((props, ref) => {
  return (
    <AppLayout
      ref={ref}
      {...props}
      headerSelector="#header"
      ariaLabels={appLayoutAriaLabels}
    />
  );
});

CustomAppLayout.displayName = "CustomAppLayout";

export default CustomAppLayout;
