import { Notification, toaster } from "rsuite";

type MessageType = "error" | "success" | "warning" | "info";

export const Notif = (type: MessageType, header: string, child: string) => {
  const message = (
    <Notification
      type={type}
      header={<strong>{header}</strong>}
      closable
      duration={10000}
    >
      {child}
    </Notification>
  );
  toaster.push(message, { placement: "topEnd" });
};

export const getRandom = (min: number, max: number): number =>
  Math.random() * (max - min) + min;
