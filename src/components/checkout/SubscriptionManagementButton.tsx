"use client";

import { Button } from "../ui/button";

const SubscriptionManagementButton = () => {
  const loadPortal = async () => {
    const response = await fetch("http://localhost/api/portal");
    const data = await response.json();
  };

  return (
    <div>
      <Button onClick={loadPortal}>サブスクリプション管理</Button>
    </div>
  );
};

export default SubscriptionManagementButton;
