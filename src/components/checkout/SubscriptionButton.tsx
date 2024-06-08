"use client";

import { Button } from "../ui/button";

const SubscriptionButton = ({ planId }: { planId: string }) => {
  const processSubscription = async () => {
    await fetch(`http://localhost:3000/api/subscription/${planId}`);
  };

  return (
    <Button onClick={async () => processSubscription()}>
      サブスクリプション契約する
    </Button>
  );
};

export default SubscriptionButton;
